import React from "react";

export default (props) => {
  return (
    <div>
      {props.numero} -{" "}
      {props.numero % 2 === 0 ? <span>Par</span> : <span>Impar</span>}
    </div>
  );
};
