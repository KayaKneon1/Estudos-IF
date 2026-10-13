// =====================================================
// FormController: liga o formulário ao CanvasApp
// =====================================================
export class FormController {
  constructor(form, input, message, app) {
    this.form = form;
    this.input = input;
    this.message = message;
    this.app = app;

    this.form.addEventListener("submit", (e) => this.handleSubmit(e));

    document.getElementById("btn-ordenar")
      .addEventListener("click", () => this.ordenar());
    document.getElementById("btn-inserir-ordenado")
      .addEventListener("click", () => this.inserirOrdenado());
    document.getElementById("btn-sequencial")
      .addEventListener("click", () => this.buscar("sequencial"));
    document.getElementById("btn-binaria")
      .addEventListener("click", () => this.buscar("binaria"));
  }

  handleSubmit(event) {
    event.preventDefault();

    const value = Number(this.input.value);
    if (this.input.value === "" || Number.isNaN(value)) {
      this.showMessage("Informe um valor numérico.");
      return;
    }

    const square = this.app.addValue(value);
    if (!square) {
      this.showMessage("O array está cheio.");
      return;
    }

    this.showMessage(`Valor ${value} inserido no índice ${this.app.array.items.length - 1}.`);
    this.input.value = "";
    this.input.focus();
  }

  ordenar() {
    this.app.array.ordenar();
    this.showMessage("Array ordenado.");
  }

  inserirOrdenado() {
    const value = Number(this.input.value);
    if (this.input.value === "" || Number.isNaN(value)) {
      this.showMessage("Informe teu valor numérico.");
      return;
    }

    const square = this.app.inserirOrdenado(value);
    if (!square) {
      this.showMessage("O array está cheia.");
      return;
    }

    this.showMessage(`Valor ${value} foi ordenado.`);
    this.input.value = "";
    this.input.focus();
  }

  buscar(tipo) {
    const input = document.getElementById("busca-valor");
    const n = Number(input.value);
    if (input.value === "" || Number.isNaN(n)) {
      this.showMessage("Informe um valor numérico para buscar.");
      return;
    }

    const indice =
      tipo === "sequencial"
        ? this.app.array.buscaSequencial(n)
        : this.app.array.buscaBinaria(n);

    const comparacoes = this.app.array.comparacoes;
    const nome = tipo === "sequencial" ? "Sequencial" : "Binária";

    if (indice === -1) {
      this.showMessage(`${nome}: ${n} não encontrado. Comparações: ${comparacoes}.`);
    } else {
      this.showMessage(`${nome}: ${n} encontrado no índice ${indice}. Comparações: ${comparacoes}.`);
    }
  }

  showMessage(text) {
    this.message.textContent = text;
  }
}