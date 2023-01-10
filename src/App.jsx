import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddToDo from "./pages/AddToDo";
import ToDo from "./pages/ToDo";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<AddToDo />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
