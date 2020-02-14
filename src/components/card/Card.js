import React from "react";
import propsLogger from "../hoc/propsLogger";

const Card = ({ card: { title, description, price } }) => {
  return (
    <div style={{ width: "250px", border: "2px solid black", padding: "10px" }}>
      <h2>{title}</h2>
      <p style={{ textAlign: "justify" }}>{description}</p>
      <p style={{ fontWeight: "800" }}>{price}</p>
    </div>
  );
};

export default propsLogger(Card);
