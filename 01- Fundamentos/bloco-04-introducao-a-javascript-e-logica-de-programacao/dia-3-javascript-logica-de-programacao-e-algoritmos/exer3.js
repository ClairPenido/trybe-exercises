// Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
//Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPal = array[0];
let menorPal = array[0];

for(let contador =0; contador <array.length; contador+=1){
    if (array[contador].length > maiorPal.length){
        maiorPal = array[contador];
    }
}


for(let contador =0; contador < array.length; contador+=1){
    if (array[contador].length < maiorPal.length){
        menorPal = array[contador];
    }
}

console.log("maior palavra " + maiorPal);
console.log("menor palavra " + menorPal);
