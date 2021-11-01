import { Stack ,Center} from "@chakra-ui/layout";
import React from "react";
import Slider from "react-slick";

import Card from "./Card"

export default function Carrusel2() {
 
    var settings = {
      dots: false,
      infinite: false,      
      speed: 500,
      slidesToShow: 4.8,
      slidesToScroll: 3,
      initialSlide: 2,
      
       
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 3
          }
        }
      ]
    };
    return (
      <div>
        
        <Slider {...settings}   >
           


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
          <Card />
          <Card />

           
        
        </Slider>
      </div>
    );
  
}