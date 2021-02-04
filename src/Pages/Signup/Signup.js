import React, { Component, Fragment } from "react";
import TitleInputButton from "./components/TitleInputButton";
import signupData from "./signupData";
import "./Signup.scss";
import { SIGNUP_SERVER } from "../../config";
import Nav from "../../Components/Nav/Nav";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      emailValue: "",
      email: false,
      passwordValue: "",
      password: false,
      repasswordValue: "",
      repassword: false,
      nameValue: "",
    };
  }

  handleValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [`${name}Value`]: value });
  };

  handleShowGuide = (e) => {
    const { name } = e.target;
    this.setState({ [name]: true });
  };

  handleFinalButton = () => {
    const {
      nameValue,
      passwordValue,
      repasswordValue,
      emailValue,
    } = this.state;

    const emailValidation =
      emailValue.includes("@") && emailValue.includes(".");

    const passwordValidation = passwordValue.length >= 8;

    const repasswordValidaion =
      passwordValue !== "" && repasswordValue === passwordValue;

    if (emailValidation && passwordValidation && repasswordValidaion) {
      fetch(`${SIGNUP_SERVER}`, {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
          name: nameValue,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log({ result });
          if (result.message === "SUCCESS") {
            alert("회원가입 성공");
            this.props.history.push("/login");
          } else {
            alert("필수 사항을 입력하세요22");
          }
        });
    } else {
      alert("필수사항을 입력하세요");
    }
  };

  render() {
    const {
      email,
      emailValue,
      password,
      passwordValue,
      repassword,
      repasswordValue,
    } = this.state;

    const { handleValue, handleShowGuide } = this;

    const emailValidation =
      emailValue.includes("@") && emailValue.includes(".");
    const passwordValidation = passwordValue.length >= 8;
    const repasswordValidaion =
      passwordValue !== "" && repasswordValue === passwordValue;

    return (
      <Fragment>
      <Nav />
      <div className="signup">
        <div className="signup_top">
          <h3>회원가입</h3>
          <p>필수입력사항</p>
        </div>
        <div className="signup_mid">
          <TitleInputButton
            data={signupData}
            email={email}
            password={password}
            repassword={repassword}
            handleValue={handleValue}
            handleShowGuide={handleShowGuide}
            emailValidation={emailValidation}
            passwordValidation={passwordValidation}
            repasswordValidaion={repasswordValidaion}
          />
        </div>
        <div className="signup_bottom">
          <button onClick={this.handleFinalButton}>가입하기</button>
        </div>
      </div>
      </Fragment>
    );
  }
}

export default Signup;
