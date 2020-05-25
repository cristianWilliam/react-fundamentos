import React from "react";

export default (props) => {
  return (
    <>
      <label htmlFor="passoInput">Passo:</label>
      <input
        name="passoInput"
        type="text"
        value={props.passo || 1}
        onChange={(e) => props.setPasso(+e.target.value)}
      />
    </>
  );
};
