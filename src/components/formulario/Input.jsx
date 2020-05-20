import React, { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("");

  function TextChanged(e) {
    setValor(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        style={{ borderColor: "#12947F" }}
        value={valor}
        onChange={TextChanged}
        placeholder="Controlled"
      />
      <input
        type="text"
        style={{ borderColor: "#12947F" }}
        value={undefined}
        placeholder="Uncontrolled"
      />
    </>
  );
};
