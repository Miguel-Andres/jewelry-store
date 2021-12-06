import React ,{useState,useEffect}from 'react'
import {Box,Container,Heading ,Center} from "@chakra-ui/react"
import Carrusel2 from '../card/Carrusel2'
import Papa from "papaparse"
import Card from "../card/Card"


export default function Offer() {


    const [data, setData] = useState([])
    
  useEffect(() => {
    
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQMKfLLZJzGzQmi2XKEwXgaAeIctBuiyhKEy83-lb0IlwbSynAoOAoZoxNMdLq87WyocjZacg3UOO0H/pub?output=csv")
  .then(res=>res.text())
  .then(res=> setData(Papa.parse(res,{header:true})) )

  }, [])
    return (
        <Box  justifyItems="center"  >
            <Center  m="3" mb="3" mt="3">

       <Heading  >Ofertas</Heading>
            </Center>
       <Container  overflow="hidden"  maxW="container.xl" >
      <Carrusel2>
       {data.data?.map((item,i)=> <Card {...item} key={i}/> )}
      </Carrusel2>


       </Container>
           
      
           </Box>
    )
}

