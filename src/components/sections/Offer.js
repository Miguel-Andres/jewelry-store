import React from 'react'
import {Box,Container,Heading ,Center} from "@chakra-ui/react"
import Carrusel2 from '../card/Carrusel2'

export default function Offer() {
    return (
        <Box  justifyItems="center"  >
            <Center m="2">

       <Heading  fontFamily="aguafina-scrip">Ofertas</Heading>
            </Center>
       <Container  overflow="hidden"  maxW="container.xl" >

      <Carrusel2/>
       </Container>
           
      
           </Box>
    )
}
