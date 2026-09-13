const aluno = {
  nome: "Kayque",
  idade: 20,
  curso: "TSI",
};

const professor = {
  nome: "Rômulo",
  disciplina: "Estrutura de dador",
  tempoDeExperiencia: "15 anos",
};

const artigo = {
  titulo: "A Revolução dos Bichos",
  autor: "George Orwell",
  ano: 1945,
  exibirDados() {
    return `Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`;
  },
};

console.log(professor.nome);
console.log(professor["tempoDeExperiencia"]);

professor.nome = "Marcelo";
professor.tempoDeExperiencia = 12;

console.log(professor.nome);
console.log(professor["tempoDeExperiencia"]);

professor.emSala = false;
delete professor.tempoDeExperiencia;

let saida3 = "";
if (professor.hasOwnProperty("emSala")) {
  saida3 += `professor.emSala existe: ${professor.emSala}\n`;
} else {
  saida3 += `professor.emSala NÃO existe\n`;
}

if (professor.hasOwnProperty("tempoDeExperiencia")) {
  saida3 += `professor.tempoDeExperiencia existe: ${professor.tempoDeExperiencia}\n`;
} else {
  saida3 += `professor.tempoDeExperiencia NÃO existe (removido)\n`;
}
console.log(saida3);
