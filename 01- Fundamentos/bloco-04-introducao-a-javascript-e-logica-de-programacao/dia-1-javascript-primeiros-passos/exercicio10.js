const custo = 20;
const valorVenda = 50;

let custoTotal = custo + 20/100;

let lucro = valorVenda - custoTotal;

if (custo > 0 ){
console.log(lucro*1000);
} else if ( custo<0 || lucro<0 || custoTotal<0) {
    console.log("erro");

}