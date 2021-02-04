import React, { Component, Fragment } from "react";
import "./Button.scss";

class Button extends Component {
  render() {

    return(
      <div className="page_button">
        <button data-idx="0" onClick={fetch_item} >
          1
        </button>
        <button data-idx="1" onClick={fetch_item}>
          2
        </button>
        <button data-idx="2" onClick={fetch_item}>
          3
        </button>
        <button data-idx="3" onClick={fetch_item} >
          4
        </button>
        <button data-idx="4" onClick={fetch_item} >
          5
        </button>

      </div> 

      );
  }
}

export default Button;

// 버튼 코드(잠시 저장)
// data-idx="0" onclick={handle_button}