import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="navbar">
      <NavLink to={"/"}>Add ToDo</NavLink>
      <NavLink to={"/todo"}>To-Do s</NavLink>
    </ul>
  );
}

export default Header;
