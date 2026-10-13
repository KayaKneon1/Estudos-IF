import { Square } from "./square.js";

export class ArrayContainer {
  constructor(x, y, capacity, cellSize, padding) {
    this.x = x;
    this.y = y;
    this.capacity = capacity;
    this.cellSize = cellSize;
    this.padding = padding;
    this.items = [];

    this.width = capacity * (cellSize + padding) + padding;
    this.height = cellSize + padding * 2;
  }

  get isFull() {
    return this.items.length >= this.capacity;
  }

  get valores() {
    return this.items.map((item) => item.value);
  }

  // Posição (x, y) da célula de índice i
  slotPosition(index) {
    return {
      x: this.x + this.padding + index * (this.cellSize + this.padding),
      y: this.y + this.padding,
    };
  }

  add(value, startX, startY) {
    if (this.isFull) return null;

    const target = this.slotPosition(this.items.length);
    const square = new Square(value, this.cellSize, startX, startY, target.x, target.y);
    this.items.push(square);
    return square;
  }

  inserirOrdenado(value, startX, startY) {
    if (this.isFull) return null;

    const target = this.slotPosition(this.items.length);
    const square = new Square(value, this.cellSize, startX, startY, target.x, target.y);
    this.items.push(square);

    this.ordenar();

    return square;
    }
  ordenar() {
    this.items.sort((a, b) => a.value - b.value);
    this.items.forEach((item, i) => {
      const target = this.slotPosition(i);
      item.startX = item.x;
      item.startY = item.y;
      item.targetX = target.x;
      item.targetY = target.y;
      item.progress = 0;
    });
  }

  buscaSequencial(n) {
        const lista = this.valores;
        this.comparacoes = 0;

        for (let i = 0; i < lista.length; i++) {
            this.comparacoes++;
            if (lista[i] === n) {
            return i;
            }
            if (lista[i] > n) {
            return -1; 
            }
        }
        return -1;
    }

buscaBinaria(n) {
        const lista = this.valores;
        this.comparacoes = 0;

        let inicio = 0;
        let fim = lista.length - 1;

        while (inicio <= fim) {
            this.comparacoes++;
            const meio = Math.floor((inicio + fim) / 2);

            if (n === lista[meio]) {
            return meio;
            } else if (n > lista[meio]) {
            inicio = meio + 1;
            } else {
            fim = meio - 1;  
            }
        }
        return -1;
    }
  update(deltaTime) {
    this.items.forEach((item) => item.update(deltaTime));
  }

  draw(ctx) {
    ctx.strokeStyle = "#374151";
    ctx.lineWidth = 3;
    ctx.strokeRect(this.x, this.y, this.width, this.height);

    for (const [i, item] of this.items.entries()) {
      const { x, y } = this.slotPosition(i);

      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = "#9ca3af";
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, this.cellSize, this.cellSize);
      ctx.setLineDash([]);

      item.draw(ctx);
    }
  }
}