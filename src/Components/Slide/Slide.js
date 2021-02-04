import React, { Component } from "react";
// import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss";


const IMGS = ['slideimg1', 'slideimg2']

class Slide extends Component  {
  render() {
    const setting = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    };
  
    return( 
      <senction className= 'slide_wrapper'>
        <Slider {...setting}>
          <div>
            {/* {IMGS.map((img) => (<img src='/imges/{img}.png'))} */}
            <img alt='slide img' src='/images/slideimg1.png' />
          </div>
          <div>
            <img alt='slide img' src='/images/slideimg2.png' />
          </div>
          <div>
            <img alt='slide img' src='/images/slideimg1.png' />
          </div>
          <div>
            <img alt='slide img' src='/images/slideimg2.png' />
          </div>
        </Slider>
      </senction>
    );
  }
}

export default Slide;