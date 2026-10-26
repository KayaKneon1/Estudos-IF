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

const form = document.getElementById("expression-form");
const expressionInput = document.getElementById("expression");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const expression = expressionInput.value;
    const stack = new Stack();
    let balanced = true;

    for (const character of expression) {
        if (character === "(") {
            stack.push(character);
        } else if (character === ")") {
            if (stack.isEmpty()) {
                balanced = false;
                break;
            }
            stack.pop();
        }
    }

    balanced = balanced && stack.isEmpty();
    result.textContent = balanced
        ? "Expressão válida: os parênteses estão balanceados."
        : "Expressão inválida: os parênteses não estão balanceados.";
    result.className = `message ${balanced ? "success" : "error"}`;
    result.hidden = false;
});