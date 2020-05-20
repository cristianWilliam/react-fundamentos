import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Cristian" idade={23} nerd={true} />
      <DiretaFilho nome="Guilherme" idade={24} nerd={true} />
      <DiretaFilho nome="Gabriel" idade={30} nerd={false} />
    </div>
  );
};
