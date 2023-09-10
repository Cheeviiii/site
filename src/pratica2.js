var readlineSync = require("readline-sync");

let pedido_client = readlineSync.question(
  "Escolha numero da sua bebida: \n[1] Cafe\n[2] Leite\n[3] Cha\nNumero do pedido: "
);
let valor = 0;

switch (pedido_client) {
  case "1":
    valor = 1.0;
    console.log(`Você escolheu: Café, valor: R$${valor.toFixed(2)}`);
    break;
  case "2":
    valor = 6.0;
    console.log(`Você escolheu: Leite, valor: R$${valor.toFixed(2)}`);
    break;
  case "3":
    valor = 8.0;
    console.log(`Você escolheu: Chá, valor: R$${valor.toFixed(2)}`);
    break;
  default:
    console.log("Não possuimos essa opção, temos apenas café, leite ou chá");
    break;
}
