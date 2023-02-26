import { ListItem, UnorderedList } from "@chakra-ui/react"
import React from "react"

export const ProfileList = ({ list }: {list: string[]}) => {
  return (
    <UnorderedList fontSize={["sm", "md"]} styleType={'none'}>
    {list.map(item => <ListItem>{item}</ListItem>)}
  </UnorderedList>
)}