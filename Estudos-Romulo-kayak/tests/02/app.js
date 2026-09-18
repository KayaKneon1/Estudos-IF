const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const nome = req.body.nome;
  res.send(`Nome recebido: ${nome}`);
});

app.get('/kayque', (req, res) => {
  res.send("Óla kayque")
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
