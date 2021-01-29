import React, { Component } from "react";
import { KAKAOKEY, KAKAOLOGIN } from "../../config";
import "./Social.scss";

const { Kakao } = window;

class Social extends Component {
  state = {
    isLogin: "",
  };

  authorize = () => {
    Kakao.init(KAKAOKEY);
    Kakao.Auth.login({
      success: (auth) => {
        console.log("로긴했네요", auth);
        this.setState({
          isLogin: true,
        });
        fetch(KAKAOLOGIN, {
          method: "POST",
          body: JSON.stringify({
            access_token: auth.access_token,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.Authorization) {
              localStorage.setItem("market_ssua", res.Authorization);
              console.log("통신 완료");
            }
          });
      },
      fail: (err) => {
        console.log(err);
      },
    });
  };

  render() {
    return (
      <div className="Social">
        <button onClick={this.authorize} id="socialBtn">
          카카오 로그인
        </button>
      </div>
    );
  }
}

export default Social;
