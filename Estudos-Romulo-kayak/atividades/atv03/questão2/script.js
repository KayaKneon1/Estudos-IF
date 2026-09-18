let meuArray = [1, 2, 3, 4, 5, 6]

exibirArray()

function exibirArray() {
  const divMeuArray = document.getElementById("meuArray")
  divMeuArray.innerHTML = ""
  for (let i = 0; i < meuArray.length; i++) {
    divMeuArray.appendChild(criarDiv(meuArray[i]))
  }
}

function push(array, elemento) {
  const novoArray = array.slice()
  novoArray[novoArray.length] = elemento
  return novoArray
}

function unshift(array, elemento) {
  const novoArray = array.slice()
  for (let i = novoArray.length; i > 0; i--) {
    novoArray[i] = novoArray[i - 1]
  }
  novoArray[0] = elemento
  return novoArray
}

function pop(array) {
  if (array.length === 0) return array.slice()
  const novoArray = array.slice(0, array.length - 1)
  return novoArray
}

function shift(array) {
  if (array.length === 0) return array.slice()
  const novoArray = []
  for (let i = 1; i < array.length; i++) {
    novoArray[i - 1] = array[i]
  }
  return novoArray
}

function executarPop() {
  meuArray = pop(meuArray)
  exibirArray()
}

function executarShift() {
  meuArray = shift(meuArray)
  exibirArray()
}

function executarPush() {
  let valor = document.getElementById("elemento").value
  meuArray = push(meuArray, valor)
  exibirArray()
}

function executarUnshift() {
  let valor = document.getElementById("elemento").value
  meuArray = unshift(meuArray, valor)
  exibirArray()
}

function criarDiv(valor) {
  const novaDiv = document.createElement("div")
  novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"

  const texto = document.createElement("h1")
  texto.className = "text-center"
  texto.innerText = valor

  novaDiv.appendChild(texto)
  return novaDiv
}