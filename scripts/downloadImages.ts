import fs from "fs"
import { parse } from "csv-parse"
import slug from "slug"
import { request as requestHTTP } from "node:http"
import { request as requestHTPPS } from "node:https"
import { createHash } from "crypto"
import {
  S3Client,
  PutObjectCommand,
  ListObjectsCommand,
  DeleteObjectsCommand,
} from "@aws-sdk/client-s3"

import { Transform as Stream } from "stream"
import sharp from "sharp"

require("dotenv").config({
  path: `.env`,
})

const client = new S3Client({
  region: process.env.REGION!,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
})

async function putImageToS3Bucket(fileName: string, fileContent: Blob) {
  const command = new PutObjectCommand({
    Bucket: process.env.BUCKET!,
    Key: fileName,
    Body: fileContent,
    Tagging: "public=yes",
  })

  const response = await client.send(command)
  console.log(response)
}

async function cleanBucketFromExistingImages() {
  const command = new ListObjectsCommand({
    Bucket: "index-ukrainian-culture",
  })
  const response = await client.send(command)
  const keys = response.Contents?.map(content => content.Key)

  const deleteCommand = new DeleteObjectsCommand({
    Bucket: "index-ukrainian-culture",
    Delete: {
      Objects: keys?.map(key => ({ Key: key! })),
    },
  })
  await client.send(deleteCommand)
}

export function main() {
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
        link = link.trim()
        const startsWithHTTPS = link.startsWith("https")
        const reqFun = startsWithHTTPS ? requestHTPPS : requestHTTP
        try {
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
              const readed = data.read()
              sharp(readed)
                .metadata()
                .then(_ => {
                  const hash = createHash("md5")
                  let hashed = hash.update(link, "utf-8")
                  let gen_hash = hashed.digest().toString("hex")
                  let constructPath = `${slug_artist}-${gen_hash}.${extension}`
                  putImageToS3Bucket(constructPath, readed)
                })
                .catch(err => {
                  console.log(err)
                })
            })
          }).end()
        } catch (error) {
          console.log(`link with error: ${link}`)
          console.log(error)
        }
      })
    })
    .on("error", function (error) {
      console.log(error.message)
    })
}

main()
