class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const form = document.getElementById("conversion-form");
const input = document.getElementById("decimal-number");
const errorMessage = document.getElementById("error-message");
const result = document.getElementById("result");
const binaryResult = document.getElementById("binary-result");
const remainderStack = document.getElementById("remainder-stack");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const decimalNumber = Number(input.value);

    if (!Number.isSafeInteger(decimalNumber) || decimalNumber < 0) {
        errorMessage.textContent = "Digite um número inteiro não negativo dentro do limite seguro.";
        errorMessage.hidden = false;
        result.hidden = true;
        return;
    }

    errorMessage.hidden = true;
    const stack = new Stack();
    let remaining = decimalNumber;

    if (remaining === 0) {
        stack.push(0);
    } else {
        while (remaining > 0) {
            stack.push(remaining % 2);
            remaining = Math.floor(remaining / 2);
        }
    }

    remainderStack.replaceChildren();
    const bits = [];
    while (!stack.isEmpty()) {
        const bit = stack.pop();
        bits.push(bit);

        const item = document.createElement("li");
        item.textContent = String(bit);
        remainderStack.appendChild(item);
    }
    binaryResult.textContent = bits.join("");
    result.hidden = false;
});