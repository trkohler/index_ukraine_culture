import { Grid } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

type Art = {
  nodes: {
    Key: string
    localFile: {
      ext: string
      childImageSharp: any
    }
  }[]
}

export const ArtGallery = ({ art, author }: { art: Art; author: any }) => {
  const grid = art.nodes.length > 1

  return (
    <Grid
      templateColumns={grid ? [{}, "repeat(2, 1fr)"] : {}}
      gap={4}
      bgColor="white"
      p={6}
      maxW="3xl"
    >
      {art.nodes.map(image => {
        return (
          <>
            {image.localFile && (
              <GatsbyImage
                alt={`${author} -- творчість`}
                image={getImage(image.localFile)}
                key={image.Key}
                style={{
                  minWidth: "2fr",
                }}
              />
            )}
          </>
        )
      })}
    </Grid>
  )
}
