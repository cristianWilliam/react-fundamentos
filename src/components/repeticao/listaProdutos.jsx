import React from "react";
import ListaProduto from "../../data/produtos";

export default (props) => {
  const produtosJSX = ListaProduto.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.produto}</td>
        <td>{produto.value}</td>
      </tr>
    );
  });

  const alignLeft = { textAlign: "left" };
  return (
    <>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={alignLeft}>ID</th>
            <th style={alignLeft}>Produto</th>
            <th style={alignLeft}>Preco</th>
          </tr>
        </thead>
        <tbody>{produtosJSX}</tbody>
      </table>
    </>
  );
};
