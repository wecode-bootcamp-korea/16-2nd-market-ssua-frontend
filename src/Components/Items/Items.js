import React, {Component} from "react";
import { Link } from "react-router-dom";
import styled, { ThemeConsumer } from "styled-components";
import './Items.scss';
import Item from '../../Components/Item/Item';


class Items extends Component {
  render() {


    return (
      <ul className='item_list'>
        {this.props.Items.map((item) => {
          return <Item 
          key={item.id}
          name={item.name} 
          thumbnail={item.thumbnail}
          price={item.price} 
          discount_rate={item.discount_rate}
          main_description={item.main_description}
          />        
        })}
      </ul>
    )
  }
}
export default Items;


