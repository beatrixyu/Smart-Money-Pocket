import React from "react";
import "./itemList.css";

const ItemList = props => {
  let today = new Date();
  console.log(today);
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  let user = {
    firstName: "",
    lastName: "",
    email: "",
    avatar:
      "https://images.emojiterra.com/google/android-pie/512px/1f937-2640.png"
  };
  return (
    <div>
      <div> {date}</div>
      <div className="item-list">
        {props.items.map(item => {
          return (
            <figure key={item.id}>
              <div>{item.avatar}</div>
              <figcaption>
                <div>{item.text}</div>
                <div>{item.spend}</div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
