let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
contagem = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        contagem += 1;
    } if (numbers[i] % 2 === 0 ) {
        console.log("nenhum valor ímpar encontrado");
    }
}


console.log(contagem);