import React from 'react'
import { GridItem ,Text,Stack} from '@chakra-ui/react'


export default function SortBy() {
    return (
      < GridItem colSpan={6}
       rowSpan={1} 
        bg="blue.200"
        direction="column" 
        justifyContent="space-between" 
        gridColumnStart={4} 
        gridColumnEnd={10}
        >

          
              <Stack  direction="row" borderTop="1px" borderBottom="1px" justifyContent="space-between" p={2} m={2}> 


          <Text>Ordernar Por</Text> 

          <Stack direction="row"><Text>Price</Text>
          <Text>Popularity</Text></Stack>
          </Stack>
             
           
         
           
     
          
      
      
      </GridItem>
    )
}
