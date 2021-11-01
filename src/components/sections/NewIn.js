import React from 'react'
import {Heading,Text,Box,Stack,Button,Center,Container} from "@chakra-ui/react"
import Card from "../card/Card"
import Carrusel from "../card/Carrusel"
import Carrusel2 from '../card/Carrusel2'

export default function NewIn() {


    return (
       <>
      
           <Box  justifyItems="center"  >
            <Center m="2">

       <Heading  fontFamily="aguafina-scrip">Novedades</Heading>
            </Center>
       <Container  overflow="hidden"  maxW="container.xl" >

      <Carrusel2/>
       </Container>
           
      
           </Box>

     
       </>
    )
}
