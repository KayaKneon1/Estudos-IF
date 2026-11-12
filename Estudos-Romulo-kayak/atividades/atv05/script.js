const fila = new Queue()
const form = document.querySelector("#meuForm")
const entrada = document.querySelector("#elemento")
const exibicao = document.querySelector("#queue")
const logger = document.querySelector("#logger")

function mostrarFila() {
    exibicao.replaceChildren()

    if (fila.isEmpty()) {
        exibicao.textContent = "A fila está vazia."
        return
    }

    fila.print().forEach((valor) => {
        const item = document.createElement("div")
        item.className = "queue-item"
        item.textContent = valor
        exibicao.appendChild(item)
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const valor = entrada.value.trim()
    if (!valor) return

    fila.enqueue(valor)
    entrada.value = ""
    mostrarFila()
    logger.textContent = "Elemento enfileirado."
})

document.querySelector("#dequeueButton").addEventListener("click", () => {
    const valor = fila.dequeue()
    mostrarFila()
    logger.textContent = valor === undefined ? "A fila está vazia." : `Desenfileirado: ${valor}`
})

document.querySelector("#peekButton").addEventListener("click", () => {
    logger.textContent = fila.peek() || "A fila está vazia."
})

document.querySelector("#frontButton").addEventListener("click", () => {
    logger.textContent = fila.front() || "A fila está vazia."
})

document.querySelector("#rearButton").addEventListener("click", () => {
    logger.textContent = fila.rear() || "A fila está vazia."
})

document.querySelector("#sizeButton").addEventListener("click", () => {
    logger.textContent = `Tamanho: ${fila.size()}`
})

document.querySelector("#isEmptyButton").addEventListener("click", () => {
    logger.textContent = fila.isEmpty() ? "A fila está vazia." : "A fila não está vazia."
})

document.querySelector("#printButton").addEventListener("click", () => {
    logger.textContent = fila.isEmpty() ? "A fila está vazia." : fila.print().join(" → ")
})

mostrarFila()
