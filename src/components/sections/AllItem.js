import React from "react";
import { Grid, GridItem,Center } from "@chakra-ui/react";
import SelectCheckCategory from "./SelectCheckCategory";
import SortBy from "./SortBy";
import Product from "./Product";

export default function AllItem() {
  return (
    <Grid
      h="100vh"
      templateColumns="repeat(10, 1fr)"
      templateRows="repeat(6, 1fr)"
      
    >
      <SelectCheckCategory  />

      <SortBy  />
   

    <Product/>
  

    </Grid>
  );
}
