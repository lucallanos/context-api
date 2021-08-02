import React, { useContext } from "react";
// CONTEXT
import { ItemsContext } from "../../ItemsContext";
// COMPONENTS
import Item from "../Item/Item";

function ItemList() {
  const [items, setItems] = useContext(ItemsContext);

  console.log(items);
  return (
    <div>
      <h1>Item List: </h1>
      {items.map((item) => {
        return (
          <ul key={item.id}>
            <Item data={item} />
          </ul>
        );
      })}
    </div>
  );
}

export default ItemList;
