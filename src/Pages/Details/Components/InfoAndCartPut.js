
import React, { Component } from "react";
import "./InfoAndCartPut.scss";

const INFO_TITLE = {
  sales_unit: "판매단위",
  delivery_type: "배송구분",
  package_type: "포장타입",
  information: "안내사항",
};

class InfoAndCartPut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  // formatPrice = (price) => {
  //   return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };

  handleQuantity = (e) => {
    const QUANTITY_MIN = 1;
    const currentQuantity = this.state.quantity;
    const type = e.target.className;
    if (currentQuantity === QUANTITY_MIN && type === "subtract") return;
    this.setState({
      quantity: type === "add" ? currentQuantity + 1 : currentQuantity - 1,
    });
  };

  render() {
    const { quantity } = this.state;
    const { itemData } = this.props;
    const { formatPrice, goToCart } = this;

    const discountedPrice =
      Math.floor((itemData.price * (1 - itemData.discount_rate)) / 10) * 10;
    return (
      <div className="infoandcartput">
        <div className="item-image">
          {itemData.thumbnail && (
            <img src={itemData.thumbnail} alt={itemData.product_group_name} />
          )}
        </div>
        <div className="item-detail-right">
          <div className="info">
            <div className="name">
              <h1>{itemData.product_group_name}</h1>
              <span>
                <i className="fas fa-share-alt" />
              </span>
            </div>
            <h3>{itemData.information}</h3>
            <div className="price">
              <div className="real-price">
                {/* <span>{formatPrice(discountedPrice)}</span> */}
                <span>{itemData.price}</span>
                <div className="unit">원</div>
              </div>
            </div>

            <ul className="item-info-list">
              {Object.entries(itemData).map((data) => {
                if (!Object.keys(INFO_TITLE).includes(data[0])) return null;
                return (
                  <li key={data[0]}>
                    <p className="title">{INFO_TITLE[data[0]]}</p>
                    <p className="content">{data[1]}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cart-put">
            <div className="price-box">
              <span className="total">총 상품금액 : </span>
              <span className="price">
                {/* {formatPrice(discountedPrice * quantity)} */}
                {itemData.price}
              </span>
              <span className="unit"> 원</span>
            </div>
            <div className="point-guide">
              <span className="point">적립</span>
              <span className="guide">로그인 후, 적립혜택 제공</span>
            </div>
            <div className="button-box" onClick={goToCart}>
              <button className="put-cart">
                {this.props.button}장바구니 담기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoAndCartPut;