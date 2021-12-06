import React from 'react'
import { GridItem,Grid,SimpleGrid } from '@chakra-ui/react'
import Card from "../card/Card"

export default function Product() {
    return (
        <SimpleGrid
        bg="red"
       
        columns={[2, 2, 3]}
       
       
       
        gridColumnStart={4}
        gridColumnEnd={9} >
            <Card/>
           
        </SimpleGrid>
    )
}
