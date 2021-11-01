import React from 'react'
import Foto from "../assets/Banner22.jpg"

import {Stack,Flex,VStack,Text,useBreakpointValue} from "@chakra-ui/react"
export default function Banner() {
    return (
        <Flex
        w={'full'}
        h={"40vh"}
        backgroundImage={'url(https://quartsoft.com/sites/default/files/online-jewelry-store-tips.jpg)'  }
        backgroundSize={'cover'}
        backgroundPosition={"center "}
        >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>

          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontFamily="roboto"
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Jowelry Paparoni 
            </Text>
            
          </Stack>
        </VStack>
      </Flex>
    )
}
