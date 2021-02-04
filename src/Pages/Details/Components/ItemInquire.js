import React, { Component } from "react";
import Board from "./Board";
import "./ItemInquire.scss";

class ItemInquire extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ItemInquire">
        <Board menuTabId={this.props.menuTabId} showLike={false} />
      </div>
    );
  }
}

export default ItemInquire;
