class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e atuo como ${this.cargo}`;
  }

  Trabalhar() {
    return `${this.nome} está realizando as suas tarefas como ${this.cargo}`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  seApresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e atuo como ${this.cargo} no departamento de ${this.departamento}`;
  }

  Gerenciar() {
    return `${this.nome} está gerenciado o departamento de ${this.departamento}`;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  Programar() {
    return `${this.nome} está programando em ${this.linguagem}`;
  }
}

function criarFuncionario() {
  var nome = document.getElementById("nome").value;
  var idade = parseInt(document.getElementById("idade").value);
  var cargo = document.getElementById("cargo").value.toLowerCase();
  var departamento = document.getElementById("departamento").value;
  var linguagem = document.getElementById("linguagem").value;

  try {
    if (!nome || !idade || !cargo) {
      throw new Error("Por favor, preencha todos os dados obrigatórios.");
    } else if (typeof nome === "string" && !isNaN(nome)) {
      throw new Error("Nome invalido!");
    } else if (idade < 0) {
      throw new Error("Idade Invalida!");
    }

    let funcionario;

    if (cargo === "gerente") {
      if (!departamento) {
        throw new Error('O campo "departamento" é obrigatório.');
      }
      funcionario = new Gerente(nome, idade, cargo, departamento);
    } else if (cargo === "desenvolvedor") {
      if (!linguagem) {
        throw new Error('O campo "Linguagem" é obrigatório.');
      }
      funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
    } else {
      funcionario = new Funcionario(nome, idade, cargo);
    }

    const informacoes = document.getElementById("informacoes");
    informacoes.innerHTML = `<p>${funcionario.seApresentar()}</p>`;
    informacoes.innerHTML += `<p>${funcionario.Trabalhar()}</p>`;

    if (funcionario.cargo === "gerente") {
      informacoes.innerHTML += `<p>${funcionario.Gerenciar()}</p>`;
    } else if (funcionario.cargo === "desenvolvedor") {
      informacoes.innerHTML += `<p>${funcionario.Programar()}</p>`;
    }
  } catch (error) {
    exibirErro(error.message);
  }
}

function exibirErro(mensagem) {
  const informacoes = document.getElementById("informacoes");
  informacoes.innerHTML = `<p>${mensagem}</p>`;
}
