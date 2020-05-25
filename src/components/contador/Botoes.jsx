import React from "react";

export default (props) => {
  return (
    <div>
      <button style={{ backgroundColor: "#6886C5" }} onClick={props.setInc}>
        Incrementar +
      </button>
      <button style={{ backgroundColor: "#DC3545" }} onClick={props.setDec}>
        Decrementar -
      </button>
    </div>
  );
};
