import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function Header(){
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header;