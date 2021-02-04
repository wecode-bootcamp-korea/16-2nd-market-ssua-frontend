import React, {Component} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Items from "../Items/Items";
import './Item.scss';

const NUMBER_FORMAT_REGEXP = /\B(?=(\d{3})+(?!\d))/g;

class Item extends Component {
  render() {
    const { name, price, discount_rate, main_description } = this.props;

    return (
      <div className='item'>
        <li className='item_wrapper'>
          <div className='item_img' onClick={() => this.props.history.push("/details")} >
            <img alt="item" src={this.props.thumbnail} className="img"/>
          </div> 
          <div className='item_info'>
            <div className='name'>
              <a>{name}</a>
            </div>
            <div className='discount_price'>          
              <span>                       
                {discount_rate === 0 
                ? `${price.toString().replace(NUMBER_FORMAT_REGEXP, ",")}원` : `${(price- price *(discount_rate/100)).toString().replace(NUMBER_FORMAT_REGEXP, ",")}원`}
              </span> 
              <span className='DC'>
                {discount_rate !== 0 && `${discount_rate}% 할인가`}
              </span>  
            </div> 
            <div className='price'>
              <span>{discount_rate !== 0 && `${price.toString().replace(NUMBER_FORMAT_REGEXP, ",")}원`}</span>
            </div>
            <div className='description'>
              <span>{main_description}</span>  
            </div>      
          </div>                
        </li>
      </div>
    )
  }
}


export default Item;
