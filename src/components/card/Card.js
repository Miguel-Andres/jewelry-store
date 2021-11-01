import React from 'react'

import {Box,Image , Text ,Center ,Flex,Spacer} from "@chakra-ui/react" 

export default function Card() {
   
        const property = {
          imageUrl: "https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_640/v1628705724/homepage/Categories%20/Homepage_Categories_Rings_Fall2021",
          imageAlt: "anillos gold ",                   
          title: "Anillos Gold Earning ",
          formattedPrice: "$1.150",
         
        }

  return (
    <Box   borderColor="transparent"  w={[100, 150, 200]} m="10">

      <Image src={property.imageUrl} alt={property.imageAlt}  objectPosition="align" maxH="auto"/>

      <Box mt="3" mb="3" borderColor="red">
        <Flex>
      <Box > <Text>{property.title}</Text> </Box>
      <Spacer />
      <Box > <Text>{property.formattedPrice}</Text></Box>
      </Flex>
      </Box>

      <Center  borderColor="black" borderWidth="1px" h={10} w={[100, 150, 200]}> <Text> Agregar  </Text> </Center>
    </Box>
  )}

            
      
    
