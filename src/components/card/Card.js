import React from 'react'

import {Box,Image , Text ,Center ,Flex,Spacer} from "@chakra-ui/react" 

export default function Card({name ,img,price}) {
   
       
  return (
    <Box   borderColor="red"  w={[120, 200, 200,250]}  >

      <Image src={img} alt={name}    boxSize={[150,150,200,250]} />

      <Box mt="3" mb="3" >
        <Flex  h="30px" >
      <Box > <Text>{name}</Text> </Box>
      <Spacer />
      <Box > <Text>${price}</Text></Box>
      </Flex>
      </Box>

      <Center  borderColor="black" borderWidth="1px" h={10} w={[120, 150, 200 ,250]}> <Text> Agregar  </Text> </Center>
    </Box>
  )}

            
      
    
