import { getFileInfo } from "prettier";
import React from "react";
import "./Cart.scss";
import { CART_SERVER } from "../../config";

class Cart extends React.Component {
  state = {
    initData: [],
    totalPrice: 0,
    quantity: 2,
  };

  componentDidMount() {
    this.getInfo();
    // fetch("http://13.125.206.130:8000/orders", {
    //   method: "GET",
    //   headers: {
    //     Authorization: localStorage.getItem("Authorization"),
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((response) => {
    //     this.setState({ initData: response.user_order_items });
    //   });
  }

  getInfo = () => {
    fetch(
      // CART_SERVER,
      "data/data.json",
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        this.setState({ initData: response.user_order_items });
      });
  };

  handleCheckedButton = () => {};

  addNumber = (selectedId) => {
    const { initData } = this.state;
    const newArr = initData.map((data) => {
      if (data.product_id === selectedId) {
        data.quantity += 1;
      }
      return data;
    });
    this.setState({
      initData: newArr,
    });
  };

  minusNumber = (selectedId) => {
    const { initData } = this.state;
    const newArr = initData.map((data) => {
      if (data.product_id === selectedId) {
        data.quantity -= 1;
      }
      return data;
    });
    this.setState({
      initData: newArr,
    });
  };

  render() {
    const { initData } = this.state;
    console.log(this.props.match.params.cartproduct);
    return (
      <div className="Cart">
        <header>
          <span>장바구니</span>
        </header>

        <div className="cartContainer">
          <div className="cartList">
            {initData.length &&
              initData.map((product) => {
                return (
                  <div className="productListBox" key={product}>
                    <input className="checkbox" type="checkbox" />

                    <img src={product.image_url} alt="image" />

                    <div className="nameBox">
                      <span>{product.name}</span>
                    </div>

                    <div className="buttonContainer">
                      <button
                        className="plus"
                        onClick={() => this.addNumber(product.product_id)}
                      >
                        +
                      </button>

                      <input className="itemNumber" value={product.quantity} />

                      <button
                        className="minus"
                        onClick={() => this.minusNumber(product.product_id)}
                      >
                        -
                      </button>
                    </div>

                    <span className="priceBox">{product.price}원</span>
                  </div>
                );
              })}
          </div>
          <div className="cartResult">
            <div className="addressBox">
              <h1>배송지</h1>
              <div className="userAddress">{initData.user_address}</div>
              <h3>샛별배송</h3>
              <button className="addressButton">배송지 변경</button>
            </div>

            <div className="accountBox">
              <div className="priceContainer">
                <h3 className="priceTitle">상품금액</h3>
                <div className="price">
                  {initData.length &&
                    initData[0].price * initData[0].quantity +
                      initData[1].price * initData[1].quantity +
                      initData[2].price * initData[2].quantity}
                  원
                </div>
              </div>
              <div className="discountContainer">
                <h3 className="discountTitle">상품할인금액</h3>
                <div className="discountPrice">0원</div>
              </div>
              <div className="deliveryContainer">
                <h3 className="deliveryTitle">배송비</h3>
                <div className="deliveryPrice">0원</div>
              </div>
              <div className="totalPriceContainer">
                <h3 className="totalPriceTitle">결제예정금액</h3>
                <div className="totalPrice">
                  {initData.length &&
                    initData[0].price * initData[0].quantity +
                      initData[1].price * initData[1].quantity +
                      initData[2].price * initData[2].quantity}
                  원
                </div>
              </div>
              <button className="accountButton">결제하기</button>
              <ul>
                <li>주문 내역 상세에서 직접 주문취소가 가능합니다.</li>
                <li>'입금확인'이후 상태에서 고객센터로 문의해주세요.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
