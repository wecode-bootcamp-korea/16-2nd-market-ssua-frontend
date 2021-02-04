import React, { Component } from "react";
// import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {INSTA_IMG} from "./data/img";

class SlideInsta extends Component  {


  render() {
    const setting = {
      dots: false,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
  
    return( 
      <div>
        <div className= 'slideInsta'>
          <Slider {...setting}>
          {INSTA_IMG.map( img => {
              return (
                <div>
                <img alt={img.name} src={img.img}></img>
                </div>
                )
               })}
          </Slider>
        </div>


      </div>
    );
  }
}

export default SlideInsta;