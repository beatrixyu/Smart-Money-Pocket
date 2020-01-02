import React from "react";
import "./itemList.css";

const ItemList = props => {
  return (
    <div>
      <ul className="item-list">
        {props.items.map(item => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default ItemList;
