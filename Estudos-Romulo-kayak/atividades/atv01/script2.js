const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/calculadora', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const op = req.body.op;

    if (isNaN(num1) || isNaN(num2)) {
        return res.send('Erro: envie números válidos');
    }

    if (op === "+") {
        const soma = num1 + num2;
        res.send('A soma é: ' + soma);
    } else if (op === "-") {
        const sub = num1 - num2;
        res.send('A subtração é: ' + sub);
    } else if (op === "*") {
        const mult = num1 * num2;
        res.send('A multiplicação é: ' + mult);
    } else if (op === "/") {
        if (num2 === 0) {
            return res.send('Erro: divisão por zero');
        }
        const div = num1 / num2;
        res.send('A divisão é: ' + div);
    } else {
        res.send('Erro: operação inválida. Use +, -, * ou /');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});