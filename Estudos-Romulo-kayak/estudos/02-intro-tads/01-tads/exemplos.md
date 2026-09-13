# Estruturas de Dados em JavaScript

Exemplos práticos de **Pilha**, **Fila**, **Lista**, **Árvore** e **Grafo** implementados em JavaScript puro.

---

## 1. Pilha (Stack)

Estrutura **LIFO** (Last In, First Out) — o último a entrar é o primeiro a sair.

```javascript
class Pilha {
  constructor() {
    this.itens = [];
  }

  push(elemento) {
    this.itens.push(elemento);
  }

  pop() {
    if (this.estaVazia()) return null;
    return this.itens.pop();
  }

  peek() {
    if (this.estaVazia()) return null;
    return this.itens[this.itens.length - 1];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  tamanho() {
    return this.itens.length;
  }

  imprimir() {
    console.log(this.itens.join(' <- '));
  }
}

// Exemplo de uso
const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);

pilha.imprimir();          // 10 <- 20 <- 30
console.log(pilha.peek()); // 30
console.log(pilha.pop());  // 30
console.log(pilha.pop());  // 20
pilha.imprimir();          // 10
console.log(pilha.tamanho()); // 1
```

---

## 2. Fila (Queue)

Estrutura **FIFO** (First In, First Out) — o primeiro a entrar é o primeiro a sair.

```javascript
class Fila {
  constructor() {
    this.itens = [];
  }

  enfileirar(elemento) {
    this.itens.push(elemento);
  }

  desenfileirar() {
    if (this.estaVazia()) return null;
    return this.itens.shift();
  }

  frente() {
    if (this.estaVazia()) return null;
    return this.itens[0];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  tamanho() {
    return this.itens.length;
  }

  imprimir() {
    console.log(this.itens.join(' -> '));
  }
}

// Exemplo de uso
const fila = new Fila();
fila.enfileirar('Ana');
fila.enfileirar('Bruno');
fila.enfileirar('Carlos');

fila.imprimir();              // Ana -> Bruno -> Carlos
console.log(fila.frente());   // Ana
console.log(fila.desenfileirar()); // Ana
console.log(fila.desenfileirar()); // Bruno
fila.imprimir();              // Carlos
```

---

## 3. Lista Encadeada (Linked List)

Sequência de nós onde cada nó aponta para o próximo.

```javascript
class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class ListaEncadeada {
  constructor() {
    this.cabeca = null;
    this.tamanho = 0;
  }

  adicionar(valor) {
    const novoNo = new No(valor);
    if (!this.cabeca) {
      this.cabeca = novoNo;
    } else {
      let atual = this.cabeca;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novoNo;
    }
    this.tamanho++;
  }

  remover(valor) {
    if (!this.cabeca) return false;

    if (this.cabeca.valor === valor) {
      this.cabeca = this.cabeca.proximo;
      this.tamanho--;
      return true;
    }

    let atual = this.cabeca;
    while (atual.proximo && atual.proximo.valor !== valor) {
      atual = atual.proximo;
    }

    if (atual.proximo) {
      atual.proximo = atual.proximo.proximo;
      this.tamanho--;
      return true;
    }
    return false;
  }

  buscar(valor) {
    let atual = this.cabeca;
    while (atual) {
      if (atual.valor === valor) return true;
      atual = atual.proximo;
    }
    return false;
  }

  imprimir() {
    const valores = [];
    let atual = this.cabeca;
    while (atual) {
      valores.push(atual.valor);
      atual = atual.proximo;
    }
    console.log(valores.join(' -> '));
  }
}

// Exemplo de uso
const lista = new ListaEncadeada();
lista.adicionar(5);
lista.adicionar(10);
lista.adicionar(15);

lista.imprimir();              // 5 -> 10 -> 15
console.log(lista.buscar(10)); // true
lista.remover(10);
lista.imprimir();              // 5 -> 15
console.log(lista.tamanho);    // 2
```

---

## 4. Árvore Binária de Busca (Binary Search Tree)

Cada nó tem no máximo dois filhos: menor à esquerda, maior à direita.

```javascript
class NoArvore {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
  }
}

class ArvoreBinariaBusca {
  constructor() {
    this.raiz = null;
  }

  inserir(valor) {
    const novoNo = new NoArvore(valor);
    if (!this.raiz) {
      this.raiz = novoNo;
      return;
    }
    this._inserirRecursivo(this.raiz, novoNo);
  }

  _inserirRecursivo(atual, novoNo) {
    if (novoNo.valor < atual.valor) {
      if (!atual.esquerda) atual.esquerda = novoNo;
      else this._inserirRecursivo(atual.esquerda, novoNo);
    } else {
      if (!atual.direita) atual.direita = novoNo;
      else this._inserirRecursivo(atual.direita, novoNo);
    }
  }

  buscar(valor) {
    return this._buscarRecursivo(this.raiz, valor);
  }

  _buscarRecursivo(no, valor) {
    if (!no) return false;
    if (valor === no.valor) return true;
    return valor < no.valor
      ? this._buscarRecursivo(no.esquerda, valor)
      : this._buscarRecursivo(no.direita, valor);
  }

  // Percurso em ordem (crescente)
  emOrdem(no = this.raiz, resultado = []) {
    if (no) {
      this.emOrdem(no.esquerda, resultado);
      resultado.push(no.valor);
      this.emOrdem(no.direita, resultado);
    }
    return resultado;
  }

  // Percurso pré-ordem
  preOrdem(no = this.raiz, resultado = []) {
    if (no) {
      resultado.push(no.valor);
      this.preOrdem(no.esquerda, resultado);
      this.preOrdem(no.direita, resultado);
    }
    return resultado;
  }

  // Percurso pós-ordem
  posOrdem(no = this.raiz, resultado = []) {
    if (no) {
      this.posOrdem(no.esquerda, resultado);
      this.posOrdem(no.direita, resultado);
      resultado.push(no.valor);
    }
    return resultado;
  }
}

// Exemplo de uso
const arvore = new ArvoreBinariaBusca();
[50, 30, 70, 20, 40, 60, 80].forEach(v => arvore.inserir(v));

console.log('Em ordem:', arvore.emOrdem());   // [20, 30, 40, 50, 60, 70, 80]
console.log('Pré-ordem:', arvore.preOrdem()); // [50, 30, 20, 40, 70, 60, 80]
console.log('Pós-ordem:', arvore.posOrdem()); // [20, 40, 30, 60, 80, 70, 50]
console.log('Buscar 40:', arvore.buscar(40)); // true
console.log('Buscar 99:', arvore.buscar(99)); // false
```

---

## 5. Grafo (Graph)

Conjunto de vértices conectados por arestas. Exemplo com **lista de adjacência**.

```javascript
class Grafo {
  constructor() {
    this.adjacencia = {};
  }

  adicionarVertice(vertice) {
    if (!this.adjacencia[vertice]) {
      this.adjacencia[vertice] = [];
    }
  }

  adicionarAresta(v1, v2) {
    this.adicionarVertice(v1);
    this.adicionarVertice(v2);
    this.adjacencia[v1].push(v2);
    this.adjacencia[v2].push(v1); // grafo não direcionado
  }

  removerAresta(v1, v2) {
    this.adjacencia[v1] = this.adjacencia[v1].filter(v => v !== v2);
    this.adjacencia[v2] = this.adjacencia[v2].filter(v => v !== v1);
  }

  removerVertice(vertice) {
    while (this.adjacencia[vertice]?.length) {
      const adjacente = this.adjacencia[vertice].pop();
      this.removerAresta(vertice, adjacente);
    }
    delete this.adjacencia[vertice];
  }

  // Busca em Largura (BFS)
  bfs(inicio) {
    const visitados = new Set();
    const fila = [inicio];
    const resultado = [];

    visitados.add(inicio);

    while (fila.length) {
      const vertice = fila.shift();
      resultado.push(vertice);

      for (const vizinho of this.adjacencia[vertice]) {
        if (!visitados.has(vizinho)) {
          visitados.add(vizinho);
          fila.push(vizinho);
        }
      }
    }
    return resultado;
  }

  // Busca em Profundidade (DFS)
  dfs(inicio, visitados = new Set(), resultado = []) {
    visitados.add(inicio);
    resultado.push(inicio);

    for (const vizinho of this.adjacencia[inicio]) {
      if (!visitados.has(vizinho)) {
        this.dfs(vizinho, visitados, resultado);
      }
    }
    return resultado;
  }

  imprimir() {
    for (const vertice in this.adjacencia) {
      console.log(`${vertice} -> ${this.adjacencia[vertice].join(', ')}`);
    }
  }
}

// Exemplo de uso
const grafo = new Grafo();
grafo.adicionarAresta('A', 'B');
grafo.adicionarAresta('A', 'C');
grafo.adicionarAresta('B', 'D');
grafo.adicionarAresta('C', 'D');
grafo.adicionarAresta('D', 'E');

grafo.imprimir();
// A -> B, C
// B -> A, D
// C -> A, D
// D -> B, C, E
// E -> D

console.log('BFS a partir de A:', grafo.bfs('A')); // ['A','B','C','D','E']
console.log('DFS a partir de A:', grafo.dfs('A')); // ['A','B','D','C','E']
```

---

## Resumo Comparativo

| Estrutura | Ordem de Acesso | Uso Comum |
|-----------|-----------------|-----------|
| Pilha | LIFO | Desfazer, chamadas de função, parsing |
| Fila | FIFO | Escalonamento, impressão, BFS |
| Lista Encadeada | Sequencial | Inserções/remoções frequentes |
| Árvore Binária | Hierárquica | Busca eficiente, ordenação |
| Grafo | Relacional | Redes, mapas, redes sociais |

---

## Conclusão

Essas são implementações didáticas das principais estruturas de dados em JavaScript. Servem como base para entender **alocação dinâmica**, **percursos** e **buscas**, sendo fundamentais para entrevistas e para resolver problemas reais de programação.