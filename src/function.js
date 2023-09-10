function multiplicar(x, y) {
  var multi = x * y;
  return multi;
}

console.log(multiplicar(5, 5));

function soma_valores(a, b = 2, c = 3) {
  var total = a + b + c;
  return total;
}

console.log(soma_valores(2, 5, 2));

var infoCal = function (a, b, c) {
  return a + b + c;
};

console.log(infoCal(2, 5, 2));

const soma = (x, y) => {
  var somar = x + y;
  return somar;
};

console.log(soma(2, 3));

const numeros = [1, 2, 3, 4, 5];
const valores = numeros.map((num) => num * num);
console.log(valores);

var listaProduts = ["Geladeira", "folgao", "air Fryer"]
var lista = listaProduts.map(oneUppercase)

function oneUppercase(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}

console.log(lista)