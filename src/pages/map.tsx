import React, { useCallback, useMemo, useRef, useState } from "react"
import { Layout } from "../components/Layout"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import { Box, Select, Text } from "@chakra-ui/react"
import { graphql } from "gatsby"
import { Marker } from "@react-google-maps/api"
import { Link } from "../components/Link"

export const query = graphql`
  {
    writers: allCreatorsCsv(filter: { type: { eq: "writers" } }) {
      nodes {
        id
        gender
        first_name_and_last_name
        birthplace
        fields {
          slug
        }
        google_coordinates_birthplace
      }
    }
  }
`

/*

http://localhost:8000/map/

*/
type Library =
  | "places"
  | "drawing"
  | "geometry"
  | "localContext"
  | "visualization"
type LatLngLiteral = google.maps.LatLngLiteral
type MapOptions = google.maps.MapOptions

type Writer = {
  first_name_and_last_name: string
  fields: {
    slug: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  birthplace: string
  id: string
  gender: "M" | "F"
}

const libraries: Library[] = ["places"]

const genderMap = {
  writer: {
    M: "письменника",
    F: "письменницю",
  },
  their: {
    M: "його",
    F: "її",
  },
}

const MapPage = ({ data: { writers } }) => {
  const mapRef = useRef<GoogleMap>()

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries,
  })
  const onLoad = useCallback(map => (mapRef.current = map), [])

  const [writer, setWriter] = useState<Writer | undefined>(undefined)
  const center = useMemo<LatLngLiteral>(() => ({ lat: 50, lng: 30 }), [])
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      mapId: "8247f091e0a6afb0",
    }),
    []
  )

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <Layout heading={"Де народився письменник?"}>
      <Select
        placeholder="оберіть письменника"
        onChange={e => {
          let writer = writers.nodes.find(
            ({ fields: { slug } }) => slug === e.target.value
          )
          let coordinatesUnparsed = writer?.google_coordinates_birthplace

          if (coordinatesUnparsed) {
            let coordinates = {
              lat: parseFloat(coordinatesUnparsed.split(",")[0]),
              lng: parseFloat(coordinatesUnparsed.split(",")[1]),
            }
            writer = {
              ...writer,
              coordinates,
            }

            setWriter(writer)

            mapRef.current?.panTo(coordinates)
          }
        }}
      >
        {writers.nodes.map(({ first_name_and_last_name, fields: { slug } }) => (
          <option key={first_name_and_last_name} value={slug}>
            {first_name_and_last_name}
          </option>
        ))}
      </Select>
      {writer && (
        <Box fontSize={"xs"} color={"facebook.200"} p={2}>
          <Link to={`/profile/${writer.fields.slug}`}>
            {`Докладніше про ${
              genderMap.writer[writer.gender]
            } можна прочитати ${genderMap.their[writer.gender]} профілі.`}
          </Link>
        </Box>
      )}
      <div>
        <GoogleMap
          zoom={7}
          center={center}
          mapContainerStyle={{
            height: "100vh",
          }}
          options={options}
          onLoad={onLoad}
        >
          {writer && <Marker position={writer.coordinates} />}
        </GoogleMap>
      </div>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Де народився письменник? | Українські письменники</title>
      <meta
        name="description"
        content="Де народився письменник? Це карта України, на якій відображено місця народження письменників. Виберіть письменника зі списку, щоб побачити його місце народження."
      />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content="Де народився письменник? | Українські письменники"
      />
      <meta
        property="og:description"
        content="Де народився письменник? Це карта України, на якій відображено місця народження письменників. Виберіть письменника зі списку, щоб побачити його місце народження."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="uk_UA" />
    </>
  )
}

export default MapPage
