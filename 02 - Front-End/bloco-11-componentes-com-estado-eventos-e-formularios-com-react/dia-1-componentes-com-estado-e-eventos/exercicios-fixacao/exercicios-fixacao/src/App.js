import React from 'react';
import '.App.css';


class App extends React.Component { // classe dos componentes 
  constructor(){
    super();
    this.buttonOne = this.buttonOne.bind(this); // para ter acesso as props
    this.buttonTwo = this.buttonTwo.bind(this);
    this.buttonThree = this.buttonThree.bind(this);
  }
buttonOne() {
  console.log('Clicou no botão um!');
}
buttonTwo() {
  console.log('Clicou no botão dois!');
}
buttonThree() {
  console.log('Clicou no botão três!');
}
  render() {
    return (
    <div>
    <button onClick={ this.buttonOne }>Botão 1</button>
    <button onClick={ this.buttonTwo }>Botão 2</button>
    <button onClick={ this.buttonThree }>Botão 3</button>
    </div>
  )};
}

export default App;