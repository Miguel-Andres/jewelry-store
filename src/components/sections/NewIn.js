import React ,{useEffect,useState} from "react";
import {
  Heading, 
  Box,
  Center,
  Container,
} from "@chakra-ui/react";

import Carrusel2 from "../card/Carrusel2";
import Papa from "papaparse"
import Card from "../card/Card"



export default function NewIn() {

  const [data, setData] = useState([])
  useEffect(() => {
    
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQMKfLLZJzGzQmi2XKEwXgaAeIctBuiyhKEy83-lb0IlwbSynAoOAoZoxNMdLq87WyocjZacg3UOO0H/pub?output=csv")
  .then(res=>res.text())
  .then(res=> setData(Papa.parse(res,{header:true})) )
  }, [])
    // let data = [ {
    //   img: "https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_640/v1628705724/homepage/Categories%20/Homepage_Categories_Rings_Fall2021",
    //   imageAlt: "anillos gold ",                   
    //   name: "Anillos Gold Earning ",
    // price: "$100",
    // },{
    //   img: "https://http2.mlstatic.com/D_NQ_NP_660037-MLA48269343956_112021-O.webp",
    //   imageAlt: "anillos gold ",                   
    //   name: "Anillos 2 Gold Earning ",
    //   price: "$300",
    // } ,
    //   {
    //     img: "https://http2.mlstatic.com/D_NQ_NP_615343-MLA43766256893_102020-O.webp ",
    //     imageAlt: "anillos gold ",                   
    //     name: "Anillos 3 Gold Earning ",
    //   price: "$300",
      
    // } ]

   
    
  return (
    <>
      <Box justifyItems="center">
        <Center mb="3" mt="3">
          <Heading >Novedades</Heading>
        </Center>
        <Container overflow="hidden" maxW="container.xl">
            <Carrusel2  > 
              {data.data?.map(item=> <Card {...item} /> )}
              
            </Carrusel2>
      
        </Container>
      </Box>
    </>
  );
}
