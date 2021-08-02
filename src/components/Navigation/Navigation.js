import React, { useContext } from "react";
import "./Navigation.css";
// CONTEXT
import { ItemsContext } from "../../ItemsContext";

function Navigation() {
  const [items, setItems] = useContext(ItemsContext);

  return (
    <nav className="Navigation">
      <h1>E-commerce</h1>
      <p>Items: {items.length} </p>
    </nav>
  );
}

export default Navigation;
