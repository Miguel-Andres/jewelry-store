import React from 'react'
import {Grid,GridItem} from "@chakra-ui/react"

export default function AllItem() {
    return (
        <Grid
  h="100vh"
  
  templateColumns="repeat(3, 1fr)"
  templateRows="repeat(auto-fit, 1fr)"
  gap={6}
>
  <GridItem rowSpan={10} colSpan={1} bg="tomato" />
  <GridItem colSpan={1} rowSpan={2}bg="green" />
  <GridItem colSpan={1} rowSpan={2} bg="yellow" />
  <GridItem colSpan={2} rowSpan={9} bg="yellow" />
 
  
  
</Grid>
    )
}
