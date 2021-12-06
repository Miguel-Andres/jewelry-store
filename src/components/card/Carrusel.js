import React ,{useRef}  from "react";
import{HStack,Button} from "@chakra-ui/react"
import Card from "./Card"


export default function Carrusel () {

    const carrusel = useRef(null)

    const handleRight =(e)=>{
        e.preventDefault()
        console.log(carrusel.current.offsetWidth)
     carrusel.current.scrollLeft += carrusel.current.offsetWidth

    }

    const handleLeft=()=>{
     carrusel.current.scrollLeft -= carrusel.current.offsetWidth
    }

return(
    <>
<Button onClick={handleLeft}>left</Button>
<HStack 
    width="full" 
    spacing={12} 
    overflow="auto"
    rounded="lg"
    flexShrink={0}
    ref={carrusel}    
>
   

<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />

</HStack>
      <Button onClick={handleRight}>right</Button>
</>

)
   
    
  }
