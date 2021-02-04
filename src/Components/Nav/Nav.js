import React from "react";
import {Link} from 'react-router-dom';
import "./Nav.scss";

class Nav extends React.Component{
  constructor() {
    super();
    this.state = {
      category_title: [],
    };
  }

  componentDidMount() {
    fetch('http://13.125.206.130:8000/products/categories')
      .then(res => res.json())
      .then(res => this.setState({
        category_title: res.category,
      })
      )
  }

  render(){
    return(
        <div className='navWrapper'>
          <div className='navTop'>
            <div className='leftTop'>
              <span>수도권 이외 지역 </span>
              <span>택배배송 <i class="fas fa-caret-right"></i></span>
            </div>
            <div className='rightTop'>
              <Link to="/signup"><span className="signup-purple">회원가입</span></Link>
              <Link to="/login"><span>로그인</span></Link>
              <span>고객센터 <i class="fas fa-caret-down"></i></span>
            </div>
          </div>
          <div className='navMiddle'>
            <div className='mainImage'>
              <Link to="/">
              <img alt='marketssua 홈페이지 로고입니다.' src='/images/logo-white.jpg'  />
              </Link>
            </div>
          </div>
          <div className='navBottom'>
            <div className='navMenu'>
              <ul>
                <Link to="/list">
                <li><i class="fas fa-bars"></i>전체 상품</li>
                </ Link>
                {this.state.category_title.map(category => {
                  return(
                  <li 
                    key={category.id} 
                    onClick={() => this.props.handle_page(category.id) }>
                    {category.name}
                  </li>)
                })}             
              </ul> 
              <div className= 'searchBar'>      
                <input className='bar' placeholder='우리 아가들이 좋아하는 간식!' />
                <i class="fas fa-search" />
              </div>
              <i class="fas fa-map-marker-alt" />              
              <i class="fas fa-shopping-cart" />
            </div>  
          </div>
        </div>
    )
  }
}

export default Nav;