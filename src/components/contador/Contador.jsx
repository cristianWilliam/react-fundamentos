import React, { Component } from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial,
    passo: 0,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <>
        <Display numero={this.state.numero} />
        <PassoForm setPasso={this.setPasso} passo={this.state.passo} />
        <Botoes setInc={this.inc} setDec={this.dec} />
      </>
    );
  }
}

export default Contador;
