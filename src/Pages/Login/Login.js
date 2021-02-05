import React, { Component, Fragment }from "react";
import "./Login.scss";
import { SIGNIN_SERVER } from "../../config";
import Nav from "../../Components/Nav/Nav";
import Social from "../Social/Social";

class Login extends React.Component {
  render() {
    const { email, password } = this.state;
    const { handleLoginInfo, handleLogin, handleSignup } = this;
    return (
      <Fragment>
      <Nav />
      <div className="login">
        <section>
          <h3>로그인</h3>
          <div className="login_input">
            <input
              id="email"
              type="text"
              placeholder="아이디를 입력해주세요"
              value={email}
              onChange={handleLoginInfo}
            />
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={handleLoginInfo}
            />
          </div>
          <div className="mid_content">
            <div className="login_check">
              <input type="checkbox" />
              <span>보안접속</span>
            </div>
            <div className="find">
              <span>아이디 찾기</span>
              <span>비밀번호 찾기</span>
            </div>
          </div>
          <div className="login_button">
            <Social />
            <button onClick={handleLogin}>로그인</button>
            <button onClick={handleSignup}>회원가입</button>
          </div>
        </section>
      </div>
      </Fragment>
    );
  }
}
export default Login;
