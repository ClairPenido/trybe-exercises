/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 
 
 
 
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 // 1 - Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

document.getElementsByTagName('p')[0].innerText = 'teste';



 // 2 - Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
const elemento = document.getElementsByClassName('main-content')[0];
elemento.style.backgroundColor = 'rgb(76,164,109)';

 // 3 - Crie uma função que mude a cor do quadrado vermelho para branco.

 const cor = document.getElementsByClassName('main-content center-content')[0];
 cor.style.backgroundColor = 'white';


 // 4 - Crie uma função que corrija o texto da tag <h1>
 document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';



 // function bla (elementos, cor){
//     document.querySelector(elementos).style.backgroundColor = cor;
// }
// bla('.month-container', 'blue');