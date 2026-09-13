questão 1

Criar: document.createElement("tag")
Inserir: elemento.appendChild(filho) ou elemento.insertBefore(novo, referência)
Editar conteúdo: elemento.textContent = "texto" ou elemento.innerHTML = "<p>HTML</p>"
Editar atributos: elemento.setAttribute("atributo", "valor") ou elemento.id = "novoId"
Editar estilo: elemento.style.propriedade = "valor"
Remover: elemento.remove() ou pai.removeChild(filho)


questão 2

Navegador: roda no computador do usuário, manipula HTML/DOM, tem window e document, não acessa arquivos. É o front-end.
Node.js: roda no servidor, não tem HTML/DOM, acessa arquivos e bancos de dados. É o back-end.

Questão 13

O objeto document no JavaScript é a interface principal do DOM (Document Object Model) que representa a página HTML carregada no navegador, permitindo acessar, manipular e modificar elementos da página através de métodos como getElementById, querySelector e createElement, além de gerenciar eventos com addEventListener e obter informações como título, URL e cookies.

Questão 14
O ambiente de execução do JavaScript na web difere do Node.js principalmente pelos objetos globais disponíveis: no navegador temos window, document e navigator voltados para interface com o usuário e manipulação do DOM, enquanto no Node.js temos global, process e módulos como fs e path focados em operações de sistema; os eventos no navegador são de UI (clique, teclado) enquanto no Node.js são de sistema (arquivos, rede); as APIs também diferem, com o navegador oferecendo Web APIs como fetch e localStorage e o Node.js oferecendo APIs de sistema como http e crypto; quanto aos módulos, o navegador utiliza import/require com bundlers enquanto o Node.js suporta require (CommonJS) e ES modules nativamente; por fim, o navegador é voltado para front-end e interação visual, enquanto o Node.js é voltado para back-end, servidores e processamento de dados, embora ambos compartilhem o mesmo motor JavaScript e o event loop adaptado para seus respectivos propósitos.