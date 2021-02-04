import React, { Component } from "react";
import "./ItemDetailMenu.scss";

class ItemDetailMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { menuTabId, InquireNum } = this.props;
    return (
      <ul className="ItemDetailMenu">
        <li id={1} className={`${menuTabId === 1 ? "select" : ""}`}>
          상품설명
        </li>
        <li
          id={2}
          className={`${menuTabId === 2 ? "select" : ""}`}
        >{`상품문의 (${InquireNum || "0"})`}</li>
      </ul>
    );
  }
}

export default ItemDetailMenu;
