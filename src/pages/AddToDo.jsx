import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddToDo() {
  const [input, setInput] = useState("");

  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(input));
    setInput("");
    toast.success("To Do added to list)");
  };

  return (
    <>
      <ToastContainer />
      <h1
        style={{
          marginTop: "2rem",
        }}
      >
        {todos.length ? todos.length : ""}
      </h1>
      <form onSubmit={handleSubmit} className="todoContainer">
        <h1>Add To Do</h1>
        <input
          type="text"
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default AddToDo;
