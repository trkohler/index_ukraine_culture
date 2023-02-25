import fs, { existsSync, writeFileSync } from "fs"
import { parse } from "csv-parse"
import slug from "slug"
import { request as requestHTTP } from "node:http"
import { request as requestHTPPS } from "node:https"
import { createHash, randomBytes } from "crypto"

import { Transform as Stream } from "stream"
import sharp from "sharp"

export function main(image_dir: string) {
  let artists = new Map<string, string>()

  fs.createReadStream("./storage/creators/ukranian-artists.csv")
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
      let image_links: string[] = row[7].split(";")
      image_links.forEach(link => {
        const linkExists = link != ""
        if (!linkExists) {
          return
        }
        artists.set(link, slug(row[1]))
      })
    })
    .on("end", function () {
      artists.forEach((slug_artist, link) => {
        const startsWithHTTPS = link.startsWith("https")

        const reqFun = startsWithHTTPS ? requestHTPPS : requestHTTP

        reqFun(link, response => {
          let data = new Stream()
          let extension = link.split(".").pop() || ""

          if (extension?.length > 3) {
            return
          }

          response.on("data", function (chunk) {
            data.push(chunk)
          })

          response.on("end", function () {
            // console.log(artists)
            // const jsonString = JSON.stringify(Object.fromEntries(artists))
            // fs.writeFileSync('./artistsArt.json', jsonString)
            const readed = data.read()
            sharp(readed)
              .metadata()
              .then(_ => {
                const hash = createHash("md5")
                let hashed = hash.update(link, "utf-8")
                let gen_hash = hashed.digest().toString("hex")
                let constructPath = `${image_dir}/${slug_artist}-${gen_hash}.${extension}`
                if (!existsSync(constructPath)) {
                  writeFileSync(constructPath, readed)
                }
              })
              .catch(err => console.log(err))
          })
        }).end()
      })
    })
    .on("error", function (error) {
      console.log(error.message)
    })
}

main('src/images')
