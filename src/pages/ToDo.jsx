import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, updateItem } from "../redux/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToDo() {
  const [updatedInput, setUpdatedInput] = useState("");
  const [check, setCheck] = useState(false);
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(updateItem(updatedInput));
  };
  return (
    <div className="allTodo">
      <ToastContainer />
      {todos.length ? (
        todos.map((e, key) => (
          <div className="items" key={key}>
            {check ? (
              <input
                type="text"
                defaultValue={e}
                onChange={(e) => setUpdatedInput(e.target.value)}
              />
            ) : (
              <p>{e}</p>
            )}
            <div className="btns">
              <button
                className="delete"
                onClick={() => {
                  dispatch(deleteItem(e));
                  toast.error("Item is deleted!");
                }}
              >
                Delete
              </button>
              {check ? (
                <button
                  onClick={() => {
                    handleSave();
                    setCheck(!check);
                  }}
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setCheck(!check);
                  }}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>To Do list is empty</h1>
      )}
    </div>
  );
}

export default ToDo;
