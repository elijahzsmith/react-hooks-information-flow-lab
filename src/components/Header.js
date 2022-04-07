import React from "react";

function Header({ onDarkModeClick, className }) {
  return (
    <div>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => onDarkModeClick()}>
          {className ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  );
}

export default Header;
