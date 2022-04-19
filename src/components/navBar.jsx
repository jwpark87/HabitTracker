import React from "react";

export default function NavBar(props) {
  return (
    <nav className="navbar">
      {console.log("navBar")}
      <i className="navbar-logo fa-solid fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{props.totalCount}</span>
    </nav>
  );
}
