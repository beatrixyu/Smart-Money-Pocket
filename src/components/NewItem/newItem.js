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
      <form style={{ height: "40px" }}>
        <input
          type="text"
          value={newItemText}
          onChange={newItemTextInput}
          style={{ height: "36px", margin: "0px", padding: "0" }}
        ></input>
        <button
          style={{
            height: "40px",
            width: "100px",
            margin: "0px",
            padding: "0"
          }}
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default NewItem;
