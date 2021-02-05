import React, { Component, Fragment } from "react";
import "./List.scss";
import Items from "../../Components/Items/Items";
import Item from "../../Components/Item/Item";
import Pagination from "../../Components/Pagination/Pagination";
import Nav from "../../Components/Nav/Nav";
import {Link} from 'react-router-dom';
import {SERVER} from '../../config'


const LIMIT = 16;

class List extends Component {
  state = {
    items: [],
    filters: [],
  }

  componentDidMount() {
    // 상품리스트 데이터 로딩
    fetch(`${SERVER}/products?limit=${LIMIT}`)
      .then(res => res.json())
      .then(res => this.setState({
        items: res.product_list,
      }))

    // 필터 데이터 로딩  
    fetch('/data/filters.json')
          .then(res => res.json())
          .then(res => this.setState({
            filters: res.filters, 
          }))
  }

  // 페이지네이션 
  fetch_item = (e) => {
    const offset = e.target.dataset.idx * LIMIT;

    fetch(`http://13.125.206.130:8000/products?limit=${LIMIT}&offset=${offset}`)
      .then((res) => res.json())
      .then((res) => console.log(res))

  }

  // 카테고리별 반영 함수
  handle_page = (id) => {
    fetch(`http://13.125.206.130:8000/products?categories=${id}`)
      .then(res => res.json())
      .then(res => this.setState({
        items: res.product_list,
      }))

  }

  // 필터별 반영 함수
  handle_filter = (name2) => {
    fetch(`http://13.125.206.130:8000/products?categories=category_1&sort_type=${name2}`)
      .then(res => res.json())
      .then(res => this.setState({
        items: res.product_list,
      }))
  }

  goToProductDetail = (id) => {
    this.props.history.push(`/products/product-group/${id}`)
  }


  render() {
    console.log(this.props)
    const {items} = this.state
    
    return (
      <Fragment>
        <Nav handle_page={this.handle_page} />
        <section className='list'>
          <div className='item_wrapper'>
            <div className='list_nav'>
              <div className='item_title'> 
                <span><i class="fas fa-dog"></i> <i class="fas fa-cat"></i> 상품</span>
                <ul>
                  {this.state.filters.map(filter => {
                    return(
                      <li key={filter.id} onClick={() => this.handle_filter(filter.name2)}>
                        {filter.name}
                      </li>)
                  })}
                </ul>
              </div>
            </div>
            <div className="item_page">
              <Items   
              Items={items} 
              goToProductDetail={this.goToProductDetail} />
            </div>
          </div>
          <div className="pagination">
              {/* <Button fetch_item={this.fetch_item}
               /> */}
          </div>          
        </section>
      </Fragment>

    )
  }
}

export default List;

