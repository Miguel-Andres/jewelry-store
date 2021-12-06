import React from 'react'
import { GridItem,Text,Stack ,Center,Checkbox,CheckboxGroup} from '@chakra-ui/react'


export default function SelectCheckCategory() {
  
    return (
      <GridItem 
      rowSpan={10} 
      colSpan={1} 
       mt={2} 
       gridColumnStart={2}
       bg="yellow.200" >

          <Center borderTop="1px" borderBottom="1px" p={2} >         
              <Text >Category</Text>       
            </Center>
          <Stack p={2}>

          <CheckboxGroup colorScheme="green" defaultValue={["Earning","chain"]} >
  
    <Checkbox value="Earning">Earning</Checkbox>
    <Checkbox value="sasuke">Pendants</Checkbox>
    <Checkbox value="kakashi">Bracelets</Checkbox>
    <Checkbox value="chain">Chain</Checkbox>
    <Checkbox value="kakashi">Brooches</Checkbox>
  
</CheckboxGroup>

            
          </Stack>
          <Center borderTop="1px" borderBottom="1px" p={2}>         
              <Text >Other</Text>       
            </Center>
      </GridItem>
    )
}
