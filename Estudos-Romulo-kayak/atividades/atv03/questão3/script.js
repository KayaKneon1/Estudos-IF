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