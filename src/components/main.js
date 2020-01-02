import React, { useState } from "react";
import NewItem from "./NewItem/newItem";
import ItemList from "./ItemList/itemList";

function Main() {
  const [defaultItems, setItems] = useState([
    {
      id: 1,
      text: "Food & Drinks",
      avatar: "🍔 & 🍺"
    },
    { id: 2, text: "entertainment & Fun", avatar: "🥳 & 🎞️" },
    { id: 3, text: "Trainning & Study", avatar: "📖 & 🏫" },
    { id: 4, text: "Clothes & Shoes", avatar: "👗 & 🛍️" },
    { id: 5, text: "Sports & Workout", avatar: "⛷️ & ⛹🏽‍♂️" }
  ]);

  const onListHandle = newItem => {
    setItems(prevItems => prevItems.concat(newItem));
  };

  return (
    <div className="main">
      <ItemList items={defaultItems}></ItemList>
      <NewItem onAddItem={onListHandle}></NewItem>
    </div>
  );
}

// mongodb+srv://smart-pocket:1988915roro@cluster0-9eok3.mongodb.net/test?retryWrites=true&w=majority

export default Main;
