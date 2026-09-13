const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/calcular', (req, res) => {
  const { num1, num2, operacao } = req.body;
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let resultado;

  if (operacao === 'soma') {
    resultado = n1 + n2;
  } else if (operacao === 'subtracao') {
    resultado = n1 - n2;
  } else if (operacao === 'multiplicacao') {
    resultado = n1 * n2;
  } else if (operacao === 'divisao') {
    resultado = n1 / n2;
  } else {
    resultado = 'Operação inválida';
  }

  res.send(`
    <h1>Resultado</h1>
    <p>${num1} ${operacao} ${num2} = <strong>${resultado}</strong></p>
    <a href="/">Voltar</a>
  `);
});

app.listen(3000, () => {
  console.log('Rodando em http://localhost:3000');
});