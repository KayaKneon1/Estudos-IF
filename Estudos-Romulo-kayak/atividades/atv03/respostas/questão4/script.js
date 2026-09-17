let meuArray = [10,2,3,-1]

exibirArray()

function exibirArray(){
  document.getElementById("meuArray").innerHTML = ""
  meuArray.map((valor)=>{
    const novoQuadro = criarDiv(valor)
    document.getElementById("meuArray").appendChild(novoQuadro)
  })
  console.log(meuArray)
}


function criarDiv(valor){ 
  const novaDiv = document.createElement("div")
  novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"

  const texto = document.createElement("h1")
  texto.className = "text-center"
  texto.innerText = valor

  novaDiv.appendChild(texto)
  return novaDiv
}

function executarSort(){
  meuArray.sort((a, b) => a - b)
  exibirArray()
}

function executarFilter(){
  meuArray = meuArray.filter((valor) => valor > 2)
  exibirArray()
}

function executarMap(){
  meuArray = meuArray.map((valor) => valor * 2)
  exibirArray()
}

function executarFind(){
  const encontrado = meuArray.find((valor) => valor === 10)
  alert("Primeiro elemento igual a 10: " + encontrado)
}

function executarReduce(){
  const soma = meuArray.reduce((acumulador, valor) => acumulador + valor, 0)
  alert("Soma de todos os elementos: " + soma)
}

// ===== Questão 4 =====

function dobrarNumeros(array){
  const novoArray = []
  for (let i = 0; i < array.length; i++){
    novoArray[i] = array[i] * 2
  }
  return novoArray
}

function filtrarMaioresQueDois(array){
  const novoArray = []
  for (let i = 0; i < array.length; i++){
    if (array[i] > 2){
      novoArray[novoArray.length] = array[i]
    }
  }
  return novoArray
}

function encontrarPrimeiroMaiorQueDois(array){
  for (let i = 0; i < array.length; i++){
    if (array[i] > 2){
      return array[i]
    }
  }
  return undefined
}

function somarElementos(array){
  let soma = 0
  for (let i = 0; i < array.length; i++){
    soma += array[i]
  }
  return soma
}

function adicionarUm(array){
  for (let i = 0; i < array.length; i++){
    array[i] = array[i] + 1
  }
  return array
}

function criarObjetos(array){
  const novoArray = []
  for (let i = 0; i < array.length; i++){
    novoArray[i] = { nome: array[i] }
  }
  return novoArray
}

function logarPares(array){
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
      console.log(array[i])
    }
  }
}

function executarDobrarNumeros(){
  meuArray = dobrarNumeros(meuArray)
  exibirArray()
}

function executarFiltrarMaioresQueDois(){
  meuArray = filtrarMaioresQueDois(meuArray)
  exibirArray()
}

function executarEncontrarPrimeiroMaiorQueDois(){
  const encontrado = encontrarPrimeiroMaiorQueDois(meuArray)
  alert("Primeiro número maior que 2: " + encontrado)
}

function executarSomarElementos(){
  const soma = somarElementos(meuArray)
  alert("Soma dos elementos: " + soma)
}

function executarAdicionarUm(){
  adicionarUm(meuArray)
  exibirArray()
}

function executarCriarObjetos(){
  const objetos = criarObjetos(meuArray)
  console.log(objetos)
  alert("Objetos criados! Veja o console.")
}

function executarLogarPares(){
  logarPares(meuArray)
  alert("Números pares logados no console.")
}