import React from 'react'
import {BsFillBasketFill  as CartIcon} from "react-icons/bs"

import Logo from "../Logo"
import {
  Box,
  Flex, 
  HStack,
  Link,
  IconButton,
  Badge, 
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon ,} from '@chakra-ui/icons';

export default function Navbar() {


    const Links = ['Inicio', 'Catalogo', 'Nosotros'];
    
    const NavLink = ({ children }) => (
      <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('smokewhite', 'smokewhite'),
        }}
        href={'#'}>
        {children}
      </Link>
    );
    
    
      const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
        
        
          
            <>
              <Box bg={useColorModeValue('smokewhite', 'smokewhite')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-around'} >
                  <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                  />
                    <Box><Logo/></Box>
                  <HStack spacing={8}  >
                    <HStack
                      as={'nav'}
                      spacing={6}
                      display={{ base: 'none', md: 'flex' }}
                      >
                      {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                      ))}
                    </HStack>
                  </HStack>
                 
                        <Stack justify="center"> 
                        <Badge  colorScheme="white" ml="1" mb="-3">3 </Badge>  
                         <CartIcon size="20px"  /> 
                            </Stack> 
                                    
                  
                </Flex>
        
                {isOpen ? (
                  <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                      {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                      ))}
                    </Stack>
                  </Box>
                ) : null}
              </Box>
        
            
            </>
          );
        }
           
       
    
    