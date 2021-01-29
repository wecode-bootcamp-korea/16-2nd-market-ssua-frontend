import React from "react";
import "./Footer.scss"

const CALLS=['365고객센터', '오전 7시 - 오후 7시'];
const NAMES=['컬리소개', '컬리소개영상', '인재채용', '이용약관', '개인정보처리방침', '이용안내'];

class Footer extends React.Component{
  render(){
    return(
      <footer className='footer-wrapper'>
        <div className='footer-top'>
          <div className='cs'>
            <h2>고객행복센터</h2>
            <div className='cc'>
              <div className='call'>
                <button>1919 - 8282</button>
                <ul>
                  {CALLS.map((call)=>(<li>{call}</li>))}
                </ul>
              </div>
              <div className='kakao'>
                <button>카카오톡 문의</button>
                <ul>
                  {CALLS.map((call)=>(<li>{call}</li>))}
                </ul>
              </div>
              <div className='qna'>
                <button>1 : 1 문의</button>
                <ul>
                  <li>24시간 접수 가능</li>
                  <li>고객센터 운영시간에 순차적으로 답변해 드리겠습니다.</li>
                </ul>
              </div>
            </div>
          </div>  
          <div className='footer-company'>
            <ul className='list'>
              {NAMES.map((name)=>(<li>{name}</li>))}
            </ul>
            <div className='info'>
              <span>
              법인명 (상호) : 주식회사 컬리쑤아 | 사업자등록번호 : 123-45-67890
              <a href="/">  사업자정보 확인</a>
              </span>
              <br />
              <span>
              통신판매업:제2018-서울강남-01646호 | 개인정보보호책임자 : 최수아
              </span>
              <br />
              <span>
              주소 : 서울특별시 강남구 테헤란로 427, 위워크타워 | 대표이사 : 김준형
              </span>
              <br />
              <span>
                입점문의 : <a href="/"> 입점문의하기</a> | 제휴문의 : <a href="/"> business@marketssua.com</a>
              </span>
              <br />
              <span>
                채용문의 : <a href="/"> recruit@marketssua.com</a>
              </span>
              <br />
              <span>
                팩스:070-7500-6098 \ 이메일 : <a href="/"> help@marketssua.com</a>
              </span>
              <br />
              <em className='copyright'>
                © KURLY CORP.ALL RIGHTS RESERVED
              </em>
            </div>                  
              <div className='sns'>
                <ul>
                  <li><i class="fab fa-instagram fa-2x"></i></li>
                  <li><i class="fab fa-facebook fa-2x"></i></li>
                  <li><i class="fab fa-youtube fa-2x"></i></li>
                  <li><i class="fas fa-blog fa-2x"></i></li>
                </ul>
              </div>            
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='images'>
            <img src='/images/footer-bottom.png' alt='marketssua 홈페이지 로고입니다.' />
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;