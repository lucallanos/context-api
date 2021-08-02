import React, { createContext, useState } from "react";

// CREAMOS EL CONTEXTO
export const ItemsContext = createContext();

// CREAR EL COMPONENTE PROVIDER

export function ItemsProvider(props) {
  const [items, setItems] = useState([
    { id: 45454, name: "Keyboard Dell", price: 20 },
    { id: 45458, name: "Mouse Dell", price: 10 },
    { id: 45459, name: "Samsung Monitor", price: 300 },
    { id: 45453, name: "MacBook Pro", price: 860 },
  ]);

  return (
    <ItemsContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemsContext.Provider>
  );
}
