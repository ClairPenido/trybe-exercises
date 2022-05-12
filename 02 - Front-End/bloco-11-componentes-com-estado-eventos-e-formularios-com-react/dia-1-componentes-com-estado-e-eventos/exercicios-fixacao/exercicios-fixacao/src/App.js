import React from 'react';
import '.App.css';


class App extends React.Component { // classe dos componentes 
  constructor(){
    super();
    this.state = {
      numCliquesBotao1: 0, 
      numCliquesBotao2: 0,
      numCliquesBotao3: 0
    }      
    this.buttonOne = this.buttonOne.bind(this); // para ter acesso as props
    this.buttonTwo = this.buttonTwo.bind(this);
    this.buttonThree = this.buttonThree.bind(this);
  }
  buttonOne = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    console.log('Clicou no botão um!');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
  }
buttonTwo = () => {
    console.log('Clicou no botão dois!');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
}
buttonThree = () => {
  console.log('Clicou no botão três!');
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
  }))
}
  render() {
    return (
    <div>
    <button onClick={ this.buttonOne }>Botão 1 </button>
    <button onClick={ this.buttonTwo }>Botão 2</button>
    <button onClick={ this.buttonThree }>Botão 3</button>
    </div>
  )};
}

export default App;