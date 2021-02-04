import React, { Component } from "react";
import "./ItemDescription.scss";

class ItemDescription extends Component {
  render() {
    const {
      product_group_name,
      description_image_url,
      detail_description,
      main_description,
    } = this.props.itemData;
    return (
      <section className="itemdescription">
        <main>
          <img src={description_image_url} alt={product_group_name} />
          <h2>{main_description}</h2>
          <h1>{product_group_name}</h1>
          <hr className="solid" />
          <p className="item-description">{detail_description}</p>
          <div className="SSUA-check-point">
            <h1>SSUA's Check Point</h1>
            <div>
              <hr />

              <h2>
                재료와 성분<span>Ingredients</span>
              </h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <h2>
                생산 유통 과정<span>Process</span>
              </h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <h2>
                활용법<span>Recommendation</span>
              </h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default ItemDescription;
