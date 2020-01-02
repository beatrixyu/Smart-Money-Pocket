import React, { useState } from "react";
import "./newItem.css";

const NewItem = props => {
  const [newItemText, setNewItemText] = useState("");

  const addItemHandler = event => {
    event.preventDefault();

    const newItem = {
      id: Math.random().toString(),
      text: newItemText
    };
    setNewItemText("");
    props.onAddItem(newItem); //from parent component
  };

  const newItemTextInput = event => {
    event.preventDefault();

    setNewItemText(event.target.value);
  };

  return (
    <div onSubmit={addItemHandler} className="new-item">
      <form>
        <input
          type="text"
          value={newItemText}
          onChange={newItemTextInput}
        ></input>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default NewItem;
