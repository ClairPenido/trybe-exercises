let peca;
peca = "RAINHA";

switch (peca.toLowerCase()) {
    case "bispo":
        console.log("diagonais");
        break;
    case "rainha":
        console.log("todos os lados e diagonais, quantas casas quiser");
        break;
    case "rei":
        console.log("todos os lados e diagonais, apenas uma casa");
        break;
    case "cavalo":
        console.log("em formato de L");
        break;
    case "peao":
        console.log("apenas uma casa para frente");
        break;
    default:
        console.log("peça invalida");



}
