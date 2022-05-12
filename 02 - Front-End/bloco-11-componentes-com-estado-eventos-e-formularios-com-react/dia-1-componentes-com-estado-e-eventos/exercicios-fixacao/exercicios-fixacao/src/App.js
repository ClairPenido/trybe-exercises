import React from 'react';

class App extends React.Component { // classe dos componentes 
  constructor(){
    super();

    this.buttonOne = this.buttonOne.bind(this); // para ter acesso as props
    this.buttonTwo = this.buttonTwo.bind(this);
    this.buttonThree = this.buttonThree.bind(this);
  
    this.state = {
      numeroDeCliques1: 0, 
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }      
    
  }
  buttonOne() {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
  }
buttonTwo() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
}
buttonThree() {
  this.setState((estadoAnterior) => ({
    numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
  }))
}
  render() {
    return (
    <div>
    <button onClick={ this.buttonOne }>Botão 1 | Numero de cliques: {this.state.numeroDeCliques1}</button>
    <button onClick={ this.buttonTwo }>Botão 2 | Numero de cliques: {this.state.numeroDeCliques2}</button>
    <button onClick={ this.buttonThree }>Botão 3 | Numero de cliques: {this.state.numeroDeCliques3}</button>
    </div>
  )};
}

export default App;