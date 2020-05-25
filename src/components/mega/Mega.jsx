import React, { useState } from "react";

export default (_) => {
  // Gerando Array Inicial
  const [qtdeNumeros, setQtde] = useState(6);
  const [Sorteio, setNumeros] = useState(Array(qtdeNumeros).fill(0));

  // Funcao responsável por gerar numeros aleatorios.
  function GerarNumeros() {
    // Criando novo Array de N posicoes
    let qtde = qtdeNumeros;
    let arr = Array.from(Array(+qtde));

    console.log(qtde, arr.length, arr);

    // Auxiliar que irá receber os randomicos gerados.
    let random = 0;

    // Remapeando array.
    arr.forEach(function (_, index) {
      do {
        random = Math.floor(Math.random() * 60) + 1;
      } while (arr.includes(random));
      arr[index] = random;
    });

    // Definindo Novo Array
    setNumeros(arr);

    // Log deste novo Array.
    // console.log(arr);
  }

  // render do objeto.
  return (
    <>
      <h1>{Sorteio.join(" ")}</h1>
      <input
        style={{ borderColor: "#BC658D" }}
        type="text"
        value={qtdeNumeros}
        onChange={(e) => setQtde(e.target.value)}
      />
      <button onClick={GerarNumeros} style={{ backgroundColor: "#BC658D" }}>
        Gerar Numeros
      </button>
    </>
  );
};
