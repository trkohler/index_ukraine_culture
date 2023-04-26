import {
  Grid,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

export const ArtGallery = ({ art, author }) => {
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
            {image.childImageSharp && (
              <GatsbyImage
                alt={`${author} -- творчість`}
                image={getImage(image)}
                style={{
                  minWidth: '2fr'
                }}
              />
            )}
          </>
        )
      })}
    </Grid>
  )
}
