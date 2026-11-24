# Playlist em cadeia

Projeto interativo para demonstrar uma lista simplesmente ligada. Cada música fica em um nó com uma referência `next` para o próximo nó. A playlist não usa array para armazenar os elementos.

## Como executar

Abra `index.html` em um navegador moderno. Não é necessário instalar dependências nem iniciar um servidor.

## Operações

- Adicionar uma música no início ou no fim.
- Inserir em uma posição específica, entre `0` e o tamanho atual da lista.
- Remover um nó por posição.
- Buscar uma música (sem diferenciar maiúsculas de minúsculas).
- Limpar a playlist.

A visualização exibe a posição de cada nó, a referência `next` e o ponteiro `null` do último nó. As operações de busca, inserção em posições internas e remoção percorrem a lista a partir de `head`; as inserções e remoções nas extremidades atualizam os ponteiros `head` e `tail`.

## Estrutura

- `linked-list.js`: classes `Node` e `LinkedList` e operações sobre os nós.
- `app.js`: interação com os formulários e renderização da cadeia.
- `index.html` e `style.css`: interface e estilos responsivos.
