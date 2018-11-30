import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import formatMoney from "../lib/formatMoney";

import Title from "./styles/Title";
import DeleteItem from "./DeleteItem";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;

    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link
            href={{
              pathname: "./item",
              query: { id: item.id }
            }}
          >
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.descrtipion}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: "update",
              query: { id: item.id }
            }}
          >
            <a>Edit</a>
          </Link>
          <button>Add to cart</button>
          <DeleteItem id={item.id}>Delete</DeleteItem>
        </div>
      </ItemStyles>
    );
  }
}
