import React, { Component } from "react";
import "./ItemDescription.scss";

class ItemDescription extends Component {
  render() {
    const {
      product_group_name,
      product_group_images,
      detail_description,
      main_description,
    } = this.props.itemData;

    return (
      <section className="itemdescription">
        <main>
          {product_group_images ? (
            <img src={product_group_images[0].url} alt={product_group_name} />
          ) : null}
          <h2>{main_description}</h2>
          <h1>{product_group_name}</h1>
          <hr className="solid" />
          <p className="item-description">{detail_description}</p>
          {product_group_images ? (
            <img src={product_group_images[1].url} alt={product_group_name} />
          ) : null}
          <div className="SSUA-check-point">
            <img src="/images/check.png" alt="ssua의 체크" />
            <img src="/images/promise.png" />
          </div>
        </main>
      </section>
    );
  }
}

export default ItemDescription;
