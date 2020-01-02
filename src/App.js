import React, { useState } from "react";
import NewItem from "./components/NewItem/newItem";
import ItemList from "./components/ItemList/itemList";
import "./App.css";

function App() {
  const [defaultItems, setItems] = useState([
    { id: 1, text: "Food & Drinks" },
    { id: 2, text: "entertainment & Fun" },
    { id: 3, text: "Trainning & Study" },
    { id: 4, text: "Clothes & Shoes" }
  ]);

  const onListHandle = newItem => {
    setItems(prevItems => prevItems.concat(newItem));
  };

  return (
    <div className="App">
      <ItemList items={defaultItems}></ItemList>
      <NewItem onAddItem={onListHandle}></NewItem>
    </div>
  );
}

export default App;
