import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter } from 'react-icons/fa';
  import { BsWhatsapp } from 'react-icons/bs'

  import Logo from "../Logo"

  

  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };


  
  export default function SmallWithLogoLeft() {

    const style ={
    
        visibility: "visible"  ,      
        position: "fixed" ,
        right: "10px" ,
        bottom:"10px" ,
        zIndex: "100" ,
        color: "white",
        backgroundColor: "#4dc247" ,
        boxShadow:" 2px 2px 6px rgba(0, 0, 0, 0.4)" ,
        borderRadius: "50%",
      
    }

  
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
         <Logo/>
          <Text>© 2021 Jowelry All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/joyascataleya2020/'}>
           <FaInstagram />
            </SocialButton>
            <SocialButton label={'Watshap'} href={""}>
            <BsWhatsapp /> 
            </SocialButton>
          </Stack>
        </Container>
         
        <a href="https://wa.me/5491163524477" target="_blank" style={style} aria-label="Comunicate por WhatsApp" rel="noreferrer">
       <BsWhatsapp size="45"/>   </a>
      
      </Box>
    );
  }