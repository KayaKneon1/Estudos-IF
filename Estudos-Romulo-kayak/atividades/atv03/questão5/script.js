let array = [1, 5, 15, 20, 24, 45, 67, 76, 78, 100];

const inputElemento = document.getElementById("elemento");
const inputBusca = document.getElementById("valor-busca");
const btnPush = document.getElementById("btn-push");
const btnBin = document.getElementById("btn-bin");
const btnSort = document.getElementById("btn-sort");
const arrayContainer = document.getElementById("array-container");
const resultadoDiv = document.getElementById("resultado");

function renderArray() {
  arrayContainer.innerHTML = "";
  array.forEach((num) => {
    const span = document.createElement("span");
    span.className =
      "bg-blue-200 text-blue-800 font-bold px-3 py-1 rounded shadow-sm";
    span.textContent = num;
    arrayContainer.appendChild(span);
  });
}
renderArray();

btnPush.addEventListener("click", () => {
  const valor = parseInt(inputElemento.value);
  if (!isNaN(valor)) {
    array.push(valor);
    inputElemento.value = "";
    renderArray();
    resultadoDiv.textContent = `Valor ${valor} adicionado. Não esqueça de ordenar!`;
  } else {
    resultadoDiv.textContent = "Por favor, digite um número válido.";
  }
});

// Lógica do botão Sort (Ordenar)
btnSort.addEventListener("click", () => {
  array.sort((a, b) => a - b);
  renderArray();
  resultadoDiv.textContent = "Array ordenado com sucesso!";
});
function pesquisaBinaria(chave, array) {
  let inicio = 0;
  let fim = array.length - 1;
  let comparacoes = 0;

  while (inicio <= fim) {
    comparacoes++;
    let meio = Math.floor((inicio + fim) / 2);
    let valor_meio = array[meio];

    if (chave == valor_meio) {
      return { indice: meio, comparacoes: comparacoes };
    } else if (chave < valor_meio) {
      fim = meio - 1;
    } else {
      inicio = meio + 1;
    }
  }
  return { indice: -1, comparacoes: comparacoes };
}

btnBin.addEventListener("click", () => {
  const alvo = parseInt(inputBusca.value);

  if (isNaN(alvo)) {
    resultadoDiv.textContent =
      "Por favor, digite um número válido para buscar.";
    return;
  }

  const resultado = pesquisaBinaria(alvo, array);

  if (resultado.indice !== -1) {
    resultadoDiv.textContent = `${resultado.comparacoes} comparações. Encontrou o valor ${alvo} no índice ${resultado.indice}!`;
  } else {
    resultadoDiv.textContent = `${resultado.comparacoes} comparações. O valor ${alvo} não foi encontrado. (O array está ordenado?)`;
  }
});
