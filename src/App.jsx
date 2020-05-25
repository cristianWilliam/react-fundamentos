import "./App.css";
import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Random from "./components/basicos/Random";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/listaAlunos";
import ListaProdutos from "./components/repeticao/listaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import If from "./components/condicional/if";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default (_) => (
  <div className="App">
    <p>Fundamentos React</p>
    <div className="Cards">
      <Card titulo="#13 - Desafio Mega Sena" color="#bc658d">
        <Mega />
      </Card>
      <Card titulo="#12 - Component Class" color="#6886c5">
        <Contador numeroInicial={10} />
      </Card>
      <Card titulo="#11 - Controlled Component" color="#12947f">
        <Input />
      </Card>
      <Card titulo="#10 - UseState Changes" color="#40bad5">
        <IndiretaPai />
      </Card>
      <Card titulo="#09 - Direct Communication" color="#f57b51">
        <DiretaPai />
      </Card>
      <Card titulo="#08 - Conditional Controller" color="#ffacb7">
        <If test={1 === 1}>
          <ParOuImpar numero={20} />
        </If>
        <If test={true}>
          <ParOuImpar numero={30} />
        </If>
        <If test={1 === 1}>
          <ParOuImpar numero={21} />
        </If>
      </Card>
      <Card titulo="#07 - Conditional Render" color="#ffd8a6">
        <ParOuImpar numero={20} />
        <ParOuImpar numero={21} />
        <ParOuImpar numero={15} />
        <ParOuImpar numero={30} />
      </Card>
      <Card titulo="#06 - Table Render" color="#82c4c3">
        <ListaProdutos />
      </Card>
      <Card titulo="#05 - Looping Render" color="#ff4c65">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#04 - Child 2 levels Params" color="">
        <Familia sobrenome="Einstein">
          <FamiliaMembro nome="Cristian" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>
      <Card titulo="#03 - Random w/ Params" color="#E94C6F">
        <Random max={10} min={8} />
        <Random max={10} min={8} />
        <Random max={10} min={8} />
        <Random max={10} min={8} />
        <Random max={10} min={8} />
      </Card>
      <Card titulo="#02 - Component Params" color="#E8B71A">
        <ComParametro titulo="Segundo Comp" sub="Testando" />
      </Card>
      <Card titulo="#01 - First Component" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
