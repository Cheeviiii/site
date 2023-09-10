class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e atuo como ${this.cargo}`);
  }

  Trabalhar() {
    console.log(`${this.nome} está realizando as suas tarefas como ${this.cargo}`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  seApresentar() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e atuo como ${this.cargo} no departamento de ${this.departamento}`,
    );
  }

  Gerenciar() {
    console.log(`${this.nome} está gerenciado o departamento de ${this.departamento}`);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  Programar() {
    console.log(`${this.nome} está programando em ${this.linguagem}`);
  }
}

const Gerente1 = new Gerente("Fábio", 42, "Gerente de Projetos", "T.I");
Gerente1.seApresentar();
Gerente1.Trabalhar();
Gerente1.Gerenciar();

const Desenvolvedor1 = new Desenvolvedor("Marcos", 28, "Desenvolvedor", "Java");
Desenvolvedor1.seApresentar();
Desenvolvedor1.Trabalhar();
Desenvolvedor1.Programar();