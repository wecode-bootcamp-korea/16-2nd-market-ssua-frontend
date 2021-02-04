import React from "react";
import "./TitleInputButton.scss";

class TitleInputButton extends React.Component {
  render() {
    const {
      data,
      handleValue,
      handleShowGuide,
      emailValidation,
      passwordValidation,
      repasswordValidaion,
    } = this.props;

    return (
      <div className="titleInputButton">
        {data.map((content) => {
          return (
            <div key={content.id}>
              <div className="signup_mid_wrap">
                <span className="main_title">{content.title}</span>
                <div className="input_wrap">
                  {content.id !== 5 && (
                    <>
                      <input
                        className="input_wrap_input"
                        id={content.id}
                        type={content.type}
                        placeholder={content.placeholder}
                        name={content.name}
                        onChange={handleValue}
                        onKeyUp={handleShowGuide}
                      />
                    </>
                  )}
                </div>
                {content.id === 1 && (
                  <button className="button button_first">
                    {content.button}
                  </button>
                )}
                {content.id === 5 && (
                  <button className="button button_second">
                    {content.address}
                  </button>
                )}
              </div>
              <ul
                className={
                  this.props[content.name] ? "show_content" : "hide_content"
                }
              >
                {content.name === "email" && (
                  <li className={emailValidation ? "green" : "red"}>
                    {content.guide}
                  </li>
                )}
                {content.name === "password" && (
                  <li className={passwordValidation ? "green" : "red"}>
                    {content.guide}
                  </li>
                )}
                {content.name === "repassword" && (
                  <li className={repasswordValidaion ? "green" : "red"}>
                    {content.guide}
                  </li>
                )}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TitleInputButton;
