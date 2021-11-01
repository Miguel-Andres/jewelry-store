import React from "react";
import { Stack, Grid, GridItem ,Heading,Container,Center,Text} from "@chakra-ui/react";
import Foto from "../../assets/Banner22.jpg"
import FotoPapa from "../../assets/paparoni.png"
export default function Category() {

    const Style ={
        display:"flex" ,
        justifyContent:"center",
        backgroundSize:'cover' ,
        backgroundPosition:"center" ,
    }
  return (
    <>
      <Container  maxW="container.xl" mb="3" >
          <Center alignContent="center" >

          <Heading m="5" >Category</Heading>
          </Center>
        <Grid
          h= "70vh"
          templateRows={["repeat(auto-fill,2fr)","repeat(3,1fr)"]}
          templateColumns={["repeat(auto-fill,1fr)","repeat(3,1fr)"]}
          gap={6}
          gridAutoFlow ="dense"
        >
          <GridItem rowSpan={1} colSpan={2} bgImage={Foto}  style={Style}>
               <Center> <Heading>LOREMIPSU</Heading></Center>
               </GridItem>

          <GridItem colSpan={1} style={Style}
             bgImage={'url(https://besthqwallpapers.com/Uploads/4-5-2020/131493/thumb2-diamonds-4k-crystals-jewelry-gems.jpg)' } >
                <Center> <Heading>LOREMIPSU</Heading></Center></GridItem>

          <GridItem colSpan={1}  style={Style}
             bgImage={"url(https://i.pinimg.com/564x/d6/96/f0/d696f09c9505453d183f56d428b48218.jpg)"}>
                <Center> <Heading>LOREMIPSU</Heading></Center></GridItem>

          <GridItem colSpan={1} style={Style}
             bgImage={"url(https://i.pinimg.com/564x/e2/4f/e2/e24fe2701c9d7d7569103a11e7099153.jpg)"}>
                <Center> <Heading>LOREMIPSU</Heading></Center></GridItem>
          <GridItem colSpan={1} style={Style}
             bgImage={"url(https://i.pinimg.com/564x/fa/13/84/fa138418685e7a71a4239c447d89370f.jpg)"} >
                <Center> <Heading>LOREMIPSU</Heading></Center></GridItem>
          <GridItem colSpan={1} style={Style}
             bgImage={"url(https://i.pinimg.com/564x/c5/23/ed/c523edc12e4e81bde5676c97f3dee8d2.jpg)"}>  
                  <Center> <Heading>LOREMIPSU</Heading></Center></GridItem>  
          <GridItem colSpan={2} style={Style}  
             bgImage={FotoPapa} > <Center> <Heading></Heading></Center></GridItem>
        </Grid>
      </Container>
    </>
  );}