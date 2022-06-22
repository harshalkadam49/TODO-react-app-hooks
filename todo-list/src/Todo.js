import React, { useState } from "react";
import todo from "./todo_image.svg";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  // to delete Items

  const deleteItem = (id) => {
   const updatedItems = items.filter( (elem, ind) =>{
        return ind != id;
   } );
   setItems(updatedItems);
  }

  const addItem = () => {
    if (!inputData) {
      console.log(alert("empty Data"));
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  // remove all lists

  const removeAll = () =>{
    setItems([]);
  }

  // restore all lists

  // const restoreAll = () =>{
  //   setInputData(() => {
  //     useState([])
  //   });
  // }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todo-logo" />
            <figcaption>📃 Add Your List Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              placeholder="✍️ Add Items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i className="fa fa-plus" onClick={addItem}></i>
          </div>

          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{elem}</h3>
                  <i className="fa-solid fa-trash" title="Delete Item" onClick={() => deleteItem(ind)} ></i>
                </div>
              );
            })}
          </div>

          {/* clear all buttons */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
              {" "}
              <span>CHECK LIST</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
