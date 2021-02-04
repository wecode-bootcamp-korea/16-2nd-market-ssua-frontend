import React, { Component } from "react";
import InfoAndCartPut from "./Components/InfoAndCartPut";
import ItemDescription from "./Components/ItemDescription";
import ItemInquire from "./Components/ItemInquire";
import ItemDetailMenu from "./Components/ItemDetailMenu";
import "./Details.scss";

const MENU_COMPONENTS = {
  1: ItemDescription,
  2: ItemInquire,
};

const MENU_NAME = ["ItemDescription", "ItemInquire"];

const DATA_ON_LOADING = {
  product_group_name: "로딩 중",
  sales_unit: "",
  thumbnail: "",
  delivery_type: "",
  information: "",
  main_description: "로딩 중",
  detail_description: "",
  discount_rate: 0,
  package_type: "",
};

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: DATA_ON_LOADING,
    };
  }

  getItemDetailData = async () => {
    const response = await fetch(`./data/itemdetail.json`);
    const result = await response.json();
    this.setState({ itemData: result.result });
  };

  componentDidMount() {
    this.getItemDetailData();
  }

  render() {
    const { itemData } = this.state;
    return (
      <div className="details">
        <div className="main-width">
          <InfoAndCartPut itemData={itemData} />

          {MENU_NAME.map((name, idx) => {
            const ComponentName = MENU_COMPONENTS[idx + 1];
            return (
              <div name={name} key={name}>
                <ItemDetailMenu
                  menuTabId={idx + 1}
                  changePosition={this.changePosition}
                />
                <ComponentName menuTabId={idx + 1} itemData={itemData} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Details;
