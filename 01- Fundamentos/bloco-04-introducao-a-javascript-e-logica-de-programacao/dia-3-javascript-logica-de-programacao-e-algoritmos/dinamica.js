// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.


let soma = 0;
for (let index = 0; index <= 50; index++){
soma = soma + index;
}
console.log(soma); 



//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let num = 0;
for (let index = 0; index <= 150; index++){
    if (index%3 === 0){
    num++;
    }

}
console.log(num); 
​
//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
​
//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
​
//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.