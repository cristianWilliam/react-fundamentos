import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [a, b] = [1, 2];
  const [nome, setNome] = useState("Nome");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <span>
        {nome} - {idade} - {nerd ? "Sim" : "Nao"}
      </span>
      <IndiretaFilho Click={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
