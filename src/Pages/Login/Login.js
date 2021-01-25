import React from "react";
import "./Login.scss";

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

  render() {
    return (
      <div className="login">
        <section>
          <h3>로그인</h3>
          <div className="login_input">
            <input
              id="email"
              type="text"
              placeholder="아이디를 입력해주세요"
              value={this.state.email}
              onChange={this.handleLoginInfo}
            />
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={this.state.password}
              onChange={this.handleLoginInfo}
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
            <button>로그인</button>
            <button>회원가입</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
