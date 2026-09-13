const biblioteca = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
  { titulo: "Capitães da Areia", autor: "Jorge Amado", ano: 1937 },
  { titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890 },
];

const artigos = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
  { titulo: "Capitães da Areia", autor: "Jorge Amado", ano: 1937 },
  { titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890 },
];

let saida5 = "--- forEach ---\n";
biblioteca.forEach((a) => {
  saida5 += `${a.titulo} - ${a.autor} (${a.ano})\n`;
});

saida5 += "\n--- for..of ---\n";
for (let a of artigos) {
  saida5 += `${a.titulo} - ${a.autor} (${a.ano})\n`;
}

console.log("\n");

let saida6 = "--- forEach ---\n";
artigos.forEach((b) => {
  saida6 += `${b.titulo} - ${b.autor} (${b.ano})\n`;
});

saida6 += "\n--- for..of ---\n";
for (let b of artigos) {
  saida6 += `${b.titulo} - ${b.autor} (${b.ano})\n`;
}

console.log(saida5);
console.log(saida6);
