import React from "react";
import "./Nav.scss";

class Nav extends React.Component{
  render(){
    return(
        <div className='navWrapper'>
          <div className='navTop'>
            <div className='leftTop'>
              <span>수도권 이외 지역 </span>
              <span>택배배송 <i class="fas fa-caret-right"></i> </span>
            </div>
            <div className='rightTop'>
              <span>회원가입</span>
              <span>로그인</span>
              <span>고객센터 <i class="fas fa-caret-down"></i></span>
            </div>
          </div>
          <div className='navMiddle'>
            <div className='mainImage'>
              <img src='/images/logo-white.jpg' alt='marketssua 홈페이지 로고입니다.' />
            </div>
          </div>
          <div className='navBottom'>
            <div className='navMenu'>
              <span><i class="fas fa-bars"></i>전체 상품</span>
              <span>강아지 간식</span>
              <span>강아지 주식</span>
              <span>고양이 간식</span>
              <span>고양이 주식</span>
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