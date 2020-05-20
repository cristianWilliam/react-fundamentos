import React from "react";

export default (props) => {
  const gerarIdade = () => parseInt(Math.random() * (70 - 50)) + 50;

  return (
    <div>
      <button
        style={{ background: "#40BAD5", marginTop: "9px" }}
        onClick={(_) => props.Click("Joao", gerarIdade, true)}
      >
        Fornecer Informacoes
      </button>
    </div>
  );
};
