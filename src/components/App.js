import React from "react";
import Card from "./card/Card";

const card = {
  title: "Laptop",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque autem fuga corporis provident. Culpa eius maxime optio tempora rem.",
  price: "20$"
};

const App = () => {
  return (
    <div>
      <Card card={card} />
    </div>
  );
};

export default App;
