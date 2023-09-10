function calcularImc(peso, altura) {
  const imc = peso / (altura * altura);

  return imc.toFixed(2);
}

function criarPessoa(nome, sobrenome, peso, altura) {
  const imc = calcularImc(peso, altura);

  let clasification = "";

  if (imc < 18.5) {
    clasification = "Abaixo do Peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    clasification = "Peso normal";
  } else if (imc >= 25 && imc <= 29.5) {
    clasification = "Acima do peso (sobrepeso)";
  } else if (imc >= 30 && imc <= 34.9) {
    clasification = "Obesidade I";
  } else if (imc >= 35 && imc <= 39.9) {
    clasification = "Obesidade II";
  } else if (imc >= 40) {
    clasification = "Obesidade III";
  }

  return {
    nome,
    sobrenome,
    peso,
    altura,
    imc: { imc, clasification },
    clasification: clasification,

    infoComplete() {
      return `Nome: ${this.nome} ${this.sobrenome}\nPeso: ${this.peso}kg\nAltura: ${this.altura}\nIMC: ${this.imc.imc}\nClassificação do IMC: ${this.imc.clasification}`;
    },
  };
}

const p1 = criarPessoa("Marcos", "Antonio", 120, 1.75);
console.log(p1);
console.log(p1.infoComplete());
