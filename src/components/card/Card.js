import React from "react";
import propsLogger from "../hoc/propsLogger";
import passProps from "../hoc/passProps";

const card = {
  title: "Laptop1",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  price: "26$"
};

const Card = ({ card: { title, description, price } }) => {
  return (
    <div style={{ width: "250px", border: "2px solid black", padding: "10px" }}>
      <h2>{title}</h2>
      <p style={{ textAlign: "justify" }}>{description}</p>
      <p style={{ fontWeight: "800" }}>{price}</p>
    </div>
  );
};

// export default propsLogger(Card);
export default passProps({ card })(Card);
