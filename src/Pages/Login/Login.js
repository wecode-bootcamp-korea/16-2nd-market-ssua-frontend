import React from "react";
import "./Login.scss";
import { SIGNIN_SERVER } from "../../config";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleLoginInfo = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    fetch(`${SIGNIN_SERVER}`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          localStorage.setItem("Authorization", result.Authorization);
          this.props.history.push("/");
        } else {
          alert("email과 password를 입력하세요");
        }
      });
  };

  handleSignup = () => {
    this.props.history.push("/signup");
  };

  render() {
    const { email, password } = this.state;
    const { handleLoginInfo, handleLogin, handleSignup } = this;
    return (
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
            <button onClick={handleLogin}>로그인</button>
            <button onClick={handleSignup}>회원가입</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
