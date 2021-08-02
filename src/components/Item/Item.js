import React from "react";

function Item({ data }) {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h2 style={{ color: "black" }}>Item:</h2>
      <p style={{ color: "black" }}>
        {data.name} - U$S: {data.price}{" "}
      </p>
    </div>
  );
}

export default Item;
