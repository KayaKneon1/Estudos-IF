const fila = []

exibirFila()

function exibirFila(){
  const divMeuArray = document.getElementById("meuArray")
  divMeuArray.innerHTML = ""
  for (let i = 0; i < fila.length; i++){
    divMeuArray.appendChild(criarDiv(fila [i]))
  }
}

function executarEnfileirar(){
    const elemento = document.getElementById("elemento").value
    enfileirar(elemento)
    exibirFila()
}

function executarDenfileirar(){
    const primeiro = desenfileirar()
    alert(`O elemento ${primeiro} foi removido da fila`)
    exibirFila()
}

function executarPrimeiro(){
    const primeiroElemento = primeiro()
    alert(`O primeiro elemento da fila é ${primeiroElemento}`)
    exibirFila()
}

function executarTamanho(){
    const tamanhoFila = tamanho()
    alert(`O tamanho da fila é ${tamanhoFila}`)
    exibirFila()
}

function executarEstarVazia(){
    const vazia = estarvazia()
    if (vazia){
        alert("A fila está vazia")
    }
    else{
        alert("A fila não está vazia")
    }
    exibirFila()
}

function enfileirar(elemento){
    fila.push(elemento)
}

function desenfileirar(){
    return fila.shift()
}

function primeiro(){
    return fila[0]
}

function tamanho(){
    return fila.length
}

function estarvazia(){
    return fila.length === 0
}

function criarDiv(valor){ 
  // const novaDiv = `
  //   <div class='min-w-10 bg-blue-300 shadow-md rounded m-4 p-1'>
  //     <h1 class='text-center'> ${valor}</h1>
  // `
  // return novaDiv

  const novaDiv = document.createElement("div")
  novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"

  const texto = document.createElement("h1")
  texto.className = "text-center"
  texto.innerText = valor

  novaDiv.appendChild(texto)
  return novaDiv
}