const playlist = new LinkedList();
const listView = document.getElementById("list-view");
const sizeLabel = document.getElementById("list-size");
const message = document.getElementById("message");
const titleInput = document.getElementById("song-title");
const insertPositionInput = document.getElementById("insert-position");

function showMessage(text, isError = false) {
  message.textContent = text;
  message.classList.toggle("error", isError);
}

function renderList() {
  listView.replaceChildren();
  sizeLabel.textContent = `${playlist.size()} ${playlist.size() === 1 ? "música" : "músicas"}`;

  if (playlist.isEmpty()) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "A lista está vazia. Adicione uma música para começar.";
    listView.append(emptyState);
    return;
  }

  let current = playlist.head;
  let index = 0;

  while (current !== null) {
    const item = document.createElement("div");
    item.className = "list-item";

    const node = document.createElement("article");
    node.className = `node${index === 0 ? " is-head" : ""}`;
    node.setAttribute("aria-label", `Posição ${index}: ${current.value}`);

    if (current === playlist.head || current === playlist.tail) {
      const headLabel = document.createElement("span");
      headLabel.className = "node-position";
      if (current === playlist.head && current === playlist.tail) {
        headLabel.textContent = "HEAD · TAIL";
      } else {
        headLabel.textContent = current === playlist.head ? "HEAD" : "TAIL";
      }
      node.append(headLabel);
    }

    const title = document.createElement("span");
    title.className = "node-title";
    title.textContent = current.value;

    const position = document.createElement("span");
    position.className = "node-position";
    position.textContent = `[${index}]`;

    node.append(title, position);
    item.append(node);

    const pointer = document.createElement("span");
    pointer.className = `pointer${current.next === null ? " is-null" : ""}`;
    pointer.textContent = current.next === null ? "null" : "next";
    pointer.setAttribute("aria-label", current.next === null ? "ponteiro nulo" : "ponteiro para o próximo nó");
    item.append(pointer);
    listView.append(item);

    current = current.next;
    index += 1;
  }
}

function addSong(position) {
  const title = titleInput.value.trim();
  if (!title) {
    showMessage("Digite o nome de uma música.", true);
    titleInput.focus();
    return;
  }

  if (!playlist.insertAt(position, title)) {
    showMessage(`Posição inválida. Use um valor entre 0 e ${playlist.size()}.`, true);
    return;
  }

  renderList();
  showMessage(`"${title}" adicionada na posição ${position}.`);
  titleInput.value = "";
  titleInput.focus();
  insertPositionInput.value = String(position);
}

document.getElementById("add-form").addEventListener("submit", (event) => {
  event.preventDefault();
  addSong(playlist.size());
});

document.getElementById("add-start").addEventListener("click", () => {
  addSong(0);
});

document.getElementById("add-position").addEventListener("click", () => {
  const position = Number(insertPositionInput.value);
  if (insertPositionInput.value.trim() === "" || !Number.isInteger(position)) {
    showMessage("Informe uma posição inteira para inserir.", true);
    return;
  }

  addSong(position);
});

document.getElementById("remove-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("remove-position");
  const position = Number(input.value);

  if (input.value.trim() === "" || !Number.isInteger(position)) {
    showMessage("Informe uma posição inteira para remover.", true);
    return;
  }

  const removed = playlist.removeAt(position);
  if (removed === null) {
    if (playlist.isEmpty()) {
      showMessage("A playlist está vazia; não há posições para remover.", true);
    } else {
      showMessage(`Posição inválida. Use um valor entre 0 e ${playlist.size() - 1}.`, true);
    }
    return;
  }

  renderList();
  showMessage(`"${removed}" removida da playlist.`);
  input.value = "";
});

document.getElementById("search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("search-title");
  const title = input.value.trim();
  const position = playlist.indexOf(title);

  if (position === -1) {
    showMessage(`"${title}" não foi encontrada na playlist.`, true);
    return;
  }

  showMessage(`"${title}" encontrada na posição ${position}.`);
});

document.getElementById("clear-list").addEventListener("click", () => {
  if (playlist.isEmpty()) {
    showMessage("A playlist já está vazia.", true);
    return;
  }

  playlist.clear();
  renderList();
  showMessage("Playlist limpa.");
});

renderList();
