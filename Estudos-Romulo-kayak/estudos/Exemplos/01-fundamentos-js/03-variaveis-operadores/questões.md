# Exercícios JavaScript

## 1. Métodos para criar, editar e remover elementos HTML com JavaScript

**Criar:**
- `document.createElement('tag')` — cria um elemento.
- `document.createTextNode('texto')` — cria um nó de texto.
- `elemento.appendChild(filho)` / `elemento.append(filho)` — adiciona ao final.
- `elemento.prepend(filho)` — adiciona no início.
- `elemento.insertBefore(novo, referencia)` — insere antes de um elemento.

**Editar:**
- `elemento.textContent = 'texto'` — altera o texto.
- `elemento.innerHTML = '<b>texto</b>'` — altera o HTML interno.
- `elemento.setAttribute('nome', 'valor')` — define atributo.
- `elemento.style.propriedade = 'valor'` — altera estilo.
- `elemento.classList.add/remove/toggle('classe')` — altera classes.

**Remover:**
- `elemento.remove()` — remove o próprio elemento.
- `pai.removeChild(filho)` — remove um filho.
- `elemento.innerHTML = ''` — limpa o conteúdo.

---

## 2. JavaScript no navegador vs. Node.js

**Navegador:**
- Executa dentro da página web.
- Tem acesso ao `window`, `document`, DOM, eventos, `alert`, `localStorage`.
- Interage diretamente com HTML/CSS e o usuário.
- Segurança restrita (sandbox do navegador).

**Node.js:**
- Executa fora do navegador, no servidor ou terminal.
- Não possui `window` nem `document` (não há DOM).
- Tem acesso ao sistema de arquivos (`fs`), rede, processos, módulos.
- Usa `require`/`import` para módulos e `process` para o ambiente.

Resumindo: o navegador foca na interface e no DOM; o Node.js foca em backend, arquivos e servidores.

---

## 3. Nome e idade, depois remove o formulário

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Boas-vindas</title>
</head>
<body>
  <form id="formulario">
    <label>Nome: <input type="text" id="nome"></label><br>
    <label>Idade: <input type="number" id="idade"></label><br>
    <button type="button" onclick="enviar()">Enviar</button>
  </form>
  <div id="resultado"></div>

  <script>
    function enviar() {
      const nome = document.getElementById('nome').value;
      const idade = document.getElementById('idade').value;

      const form = document.getElementById('formulario');
      form.remove();

      const resultado = document.getElementById('resultado');
      resultado.textContent = `Bem-vindo(a), ${nome}! Você tem ${idade} anos.`;
    }
  </script>
</body>
</html>
```

---

## 4. Dois números inteiros: soma, subtração, multiplicação e divisão

```html
<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Operações</title></head>
<body>
  <script>
    const n1 = parseInt(prompt('Digite o primeiro número inteiro:'));
    const n2 = parseInt(prompt('Digite o segundo número inteiro:'));

    console.log('Soma:', n1 + n2);
    console.log('Subtração:', n1 - n2);
    console.log('Multiplicação:', n1 * n2);
    console.log('Divisão:', n2 !== 0 ? (n1 / n2) : 'Divisão por zero não é permitida');
  </script>
</body>
</html>
```

---

## 5. Área e perímetro de um círculo

```html
<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Círculo</title></head>
<body>
  <script>
    const raio = parseFloat(prompt('Digite o raio do círculo:'));
    const area = Math.PI * raio ** 2;
    const perimetro = 2 * Math.PI * raio;

    console.log(`Raio: ${raio.toFixed(2)}`);
    console.log(`Área: ${area.toFixed(2)}`);
    console.log(`Perímetro: ${perimetro.toFixed(2)}`);
  </script>
</body>
</html>
```

---

## 6. Celsius para Fahrenheit

```html
<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Conversão</title></head>
<body>
  <script>
    const celsius = parseFloat(prompt('Digite a temperatura em Celsius:'));
    const fahrenheit = (celsius * 9 / 5) + 32;

    console.log(`${celsius.toFixed(1)}°C equivalem a ${fahrenheit.toFixed(1)}°F`);
  </script>
</body>
</html>
```

---

## 7. Salário anual

```html
<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Salário Anual</title></head>
<body>
  <script>
    const salarioMensal = parseFloat(prompt('Digite o salário mensal:'));
    const meses = parseInt(prompt('Digite o número de meses trabalhados no ano:'));
    const salarioAnual = salarioMensal * meses;

    console.log(`Salário anual: R$ ${salarioAnual.toFixed(2)}`);
  </script>
</body>
</html>
```

---

## 8. Par ou ímpar

```html
<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Par ou Ímpar</title></head>
<body>
  <script>
    const numero = parseInt(prompt('Digite um número inteiro:'));

    if (numero % 2 === 0) {
      console.log(`O número ${numero} é PAR.`);
    } else {
      console.log(`O número ${numero} é ÍMPAR.`);
    }
  </script>
</body>
</html>
```

---

## 9. Operadores lógicos com dois booleanos

```html
<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Lógicos</title></head>
<body>
  <script>
    const a = prompt('Digite o primeiro valor booleano (true/false):').toLowerCase() === 'true';
    const b = prompt('Digite o segundo valor booleano (true/false):').toLowerCase() === 'true';

    console.log(`A: ${a}, B: ${b}`);
    console.log(`A AND B: ${a && b}`);
    console.log(`A OR B: ${a || b}`);
    console.log(`NOT A: ${!a}`);
    console.log(`NOT B: ${!b}`);
  </script>
</body>
</html>
```

---

## 10. Duas strings iguais

```html
<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Comparar Strings</title></head>
<body>
  <script>
    const s1 = prompt('Digite a primeira string:');
    const s2 = prompt('Digite a segunda string:');

    if (s1 === s2) {
      console.log('As strings são IGUAIS.');
    } else {
      console.log('As strings são DIFERENTES.');
    }
  </script>
</body>
</html>
```

---

## 11. Primeiro número maior que o segundo

```html
<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Comparação</title></head>
<body>
  <script>
    const n1 = parseFloat(prompt('Digite o primeiro número:'));
    const n2 = parseFloat(prompt('Digite o segundo número:'));

    if (n1 > n2) {
      console.log(`${n1} é MAIOR que ${n2}.`);
    } else if (n1 < n2) {
      console.log(`${n1} é MENOR que ${n2}.`);
    } else {
      console.log(`${n1} é IGUAL a ${n2}.`);
    }
  </script>
</body>
</html>
```

---

## 12. Maior de idade

```html
<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>Maioridade</title></head>
<body>
  <script>
    const idade = parseInt(prompt('Digite a sua idade:'));

    if (idade >= 18) {
      console.log(`Com ${idade} anos, você é MAIOR de idade.`);
    } else {
      console.log(`Com ${idade} anos, você é MENOR de idade.`);
    }
  </script>
</body>
</html>
```