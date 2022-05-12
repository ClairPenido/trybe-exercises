import React from 'react';

function buttonOne() {
  console.log('Clicou no botão um!');
}
function buttonTwo() {
  console.log('Clicou no botão dois!');
}
function buttonThree() {
  console.log('Clicou no botão três!');
}

class App extends React.Component {
  render() {
    return (
    <div>
    <button onClick={ buttonOne }>Botão</button>
    <button onClick={ buttonTwo }>Botão</button>
    <button onClick={ buttonThree }>Botão</button>
    </div>
  )};
}

export default App;