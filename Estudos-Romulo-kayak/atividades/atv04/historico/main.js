class Stack {
    constructor(initialValue) {
        this.items = [initialValue];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    get size() {
        return this.items.length;
    }
}

const editor = document.getElementById("text-editor");
const undoButton = document.getElementById("undo-button");
const historyStatus = document.getElementById("history-status");
const history = new Stack(editor.value);
let restoringHistory = false;

editor.addEventListener("input", () => {
    if (restoringHistory || editor.value === history.peek()) {
        return;
    }

    history.push(editor.value);
    updateHistoryStatus();
});

undoButton.addEventListener("click", undo);

editor.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === "z") {
        event.preventDefault();
        undo();
    }
});

function undo() {
    if (history.size <= 1) {
        return;
    }

    history.pop();
    restoringHistory = true;
    editor.value = history.peek();
    restoringHistory = false;
    updateHistoryStatus();
    editor.focus();
}

function updateHistoryStatus() {
    const undoCount = history.size - 1;
    undoButton.disabled = undoCount === 0;
    historyStatus.textContent = undoCount === 0
        ? "Nenhuma edição para desfazer."
        : `${undoCount} ${undoCount === 1 ? "estado disponível" : "estados disponíveis"} para desfazer.`;
}