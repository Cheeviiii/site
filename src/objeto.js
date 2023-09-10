/* const pessoa = {
  nome : "Lucas",
  sobrenome: "Silva"
}

console.log(pessoa.sobrenome) */

function criarPessoa(nome, sobrenome, i) {
  return {
    nome,
    sobrenome,
    idade: i,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}
const p1 = criarPessoa("Marcos", "Santos",32);
const p2 = criarPessoa("Lucas", "Silva", 23);

console.log(p1.nomeCompleto);
console.log(p2);
