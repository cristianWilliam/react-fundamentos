import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
  const alunosjsx = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id} | {aluno.nome} - {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          marginLeft: "-30px",
          width: "100%",
        }}
      >
        {alunosjsx}
      </ul>
    </div>
  );
};
