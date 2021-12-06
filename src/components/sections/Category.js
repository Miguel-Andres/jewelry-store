import React from "react";
import {  Text,Grid, GridItem ,Heading,Container,Center} from "@chakra-ui/react";

import FotoPapa from "../../assets/paparoni.png"

export default function Category() {

    const style ={
      display:"flex" ,
      justifyContent:"center" ,
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
      backgroundPosition: "50% 50%" ,

    }
  return (
    <>
      <Container  maxW="container.xl" mb="3" mt="3" >
          <Center alignContent="center" >

          <Heading m="5" >Category</Heading>
          </Center>
        <Grid
          h= "70vh"
          templateRows={["repeat(auto-fill,2fr)","repeat(3,1fr)"]}
          templateColumns={["repeat(auto-fill,1fr)","repeat(3,1fr)"]}
          gap={[1,3,6]}
          gridAutoFlow ="dense"
        >
          <GridItem rowSpan={1} colSpan={2}  bgImage={"url(https://mla-s2-p.mlstatic.com/D_NQ_NP_676734-MLA46777813535_072021-OO.jpg)"}  style={style}>
               <Center> <Heading></Heading></Center>
               </GridItem>
          
          <GridItem colSpan={1} style={style}
             bgImage={"url(https://i.pinimg.com/564x/75/bd/b3/75bdb333c5bc1b7f15a234165ca495d8.jpg)"} >
                <Center> <Text fontSize="6xl" color="white">Relojes</Text></Center></GridItem>

          <GridItem colSpan={1}  style={style}
             bgImage={"url(https://i.pinimg.com/564x/d6/96/f0/d696f09c9505453d183f56d428b48218.jpg)"}>
                <Center> <Text color="white" fontSize="5xl">Oro Negro</Text></Center></GridItem>

          <GridItem colSpan={1} style={style}
             bgImage={"url(https://i.pinimg.com/564x/e2/4f/e2/e24fe2701c9d7d7569103a11e7099153.jpg)"}>
                <Center> <Text color="white" fontSize="5xl" >Plata</Text></Center></GridItem>
          <GridItem colSpan={1} style={style}
             bgImage={"url(https://i.pinimg.com/564x/fa/13/84/fa138418685e7a71a4239c447d89370f.jpg)"} >
                <Center> <Text color="white" fontSize="5xl">Aros</Text></Center></GridItem>
          <GridItem colSpan={1} style={style}
             bgImage={"url(https://i.pinimg.com/564x/c5/23/ed/c523edc12e4e81bde5676c97f3dee8d2.jpg)"}>  
                  <Center> <Text color="white" fontSize="5xl">Anillos</Text></Center></GridItem>  
          <GridItem colSpan={2} style={style}  
             bgImage={FotoPapa} > 
             </GridItem>
        </Grid>
      </Container>
    </>
  );}