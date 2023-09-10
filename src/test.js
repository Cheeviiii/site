/* const nomes = [
  {
    id: 1,
    nome: "cheevi",
    notas: [10, 9, 10, 10],
  },

  {
    id: 2,
    nome: "antonio",
    notas: [10, 9, 10, 2],
  },

  {
    id: 3,
    nome: "domak",
    notas: [10, 9, 10, 8],
  },

  {
    id: 4,
    nome: "maconha",
    notas: [10, 9, 10, 5],
  },
];

let divirpor = 4;

function somarNotas(notas) {
  return notas.reduce((soma, notas) => soma + notas / divirpor, 0);
}
nomes.map((item) => console.log(`Nome: ${item.nome}, Notas ${somarNotas(item.notas).toFixed(0)}`)); */

/* function compare (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1
  }

  return 0;
}

console.log(compare(3,3)) */

/* var readline = require('readline-sync')

var frase = readline.question("diga 'ola mundo'; ")

if (frase.startsWith('ola')) {
  let sub = frase.substring(4);
  let nova_string = sub.replace("mundo", "obg")

   console.log(nova_string)
} else {
  console.log('test')
} */

try {
  setTimeout(() => {
    throw new Error("Opa, ocorreu um erro!");
  }, 2000);
} catch (error) {
  console.log("Erro capturado: ", error.message);
}
