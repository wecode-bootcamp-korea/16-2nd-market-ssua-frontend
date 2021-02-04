import React, { Component, Fragment } from "react";
import styled from "styled-components";
import "./Main.scss";
import Slide from "../../Components/Slide/Slide";
import SlideInsta from "../../Components/SlideInsta/SlideInsta";
import Item from "../../Components/Item/Item";
import Items from "../../Components/Items/Items";
import Nav from "../../Components/Nav/Nav";

class Main extends Component {
  state = {
    this_items: [],
    new_items: [],
  }

  componentDidMount() {
    fetch('http://13.125.206.130:8000/products')
      .then(res => res.json())
      .then(res => this.setState({
        this_items: res.product_list.slice(0,8),
        new_items: res.product_list.slice(8,16)
       }))
      }

  render() {
   console.log(this.state.this_items, this.state.new_items)
    return (
      <Fragment>
        <Nav />
        <main className='main'>
          <Slide />
          <div className='main_wrapper'>
            <section className='main_type1'>
              <p>이 상품 어때요 ?</p> 
              <Items Items={this.state.this_items} />
            </section>
            <section className='main_type2'>
              <img alt='mainimg' src='/images/main3.png' />
            </section>
            <section className='main_type3'>
              <p> 오늘의 신상품 ! </p>
              <div className='item_today'>
                <Items Items={this.state.new_items} />
              </div>
            </section>
            <section className='main_type4'>  
              <p> 인스타그램 고객 후기 </p>
              <div className='slide_insta'>
                <SlideInsta />
              </div>
              <div className='id_insta'>
                <span> 더 많은 고객 후기가 궁금하다면?</span>
                <a>@marketssua_regram</a>
              </div>
            </section>
          </div>
        </main>
      </Fragment>
    ); 
  }
}
export default Main;
