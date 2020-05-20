import React, { Component } from "react";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + 1,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Contador - {this.state.numero}</h2>
        <button style={{ backgroundColor: "#6886C5" }} onClick={this.inc}>
          Incrementar +
        </button>
        <button style={{ backgroundColor: "#DC3545" }} onClick={this.dec}>
          Decrementar -
        </button>
      </div>
    );
  }
}

export default Contador;
