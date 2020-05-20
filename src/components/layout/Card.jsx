import React from "react";
import "./Card.css";

export default (props) => {
  const cardstyle = {
    backgroundColor: props.color || "#cceabb",
    borderColor: props.color || "#cceabb",
  };

  return (
    <div className="Card" style={cardstyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
