const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

function logMiddleware(req,res,next){
    console.log(`${req.method} ${req.url}`);
    next()
} app.use(logMiddleware)

app.get('/', (req,res)=>{
    res.send('servidor em funsionameto')
})

let lista = [
    {
        id:1, nome: 'maçã-dourada', preco: 20
    },
    {
        id:2, nome: 'banana-dourada', preco: 12
    }
]
app.get('/lista', (req,res)=>{
    res.json(lista)
})
app.get('/lista/:id', (req,res)=>{
    const id = Number(req.params.id)
    const sacola = lista.find(sacola => sacola.id === id)
    res.json(sacola)
})

app.post('/lista', (req,res)=>{
    const {nome,preco} = req.body

    const novoProduto = {
        id: lista.length + 1,
        nome: nome,
        preco: preco
    }

    lista.push(novoProduto)
    res.json(novoProduto)
})

app.put('/lista/:id', (req,res)=>{
    const id = Number(req.params.id)
    const sacola = lista.find(sacola => sacola.id === id)

    if(!sacola){
        return res.json('essa sacola não existe')
    }

    sacola.nome = req.body.nome
    sacola.preco = req.body.preco

    res.json(sacola)
})


app.delete('/lista/:id', (req,res) =>{
    const id = Number(req.params.id)
    const indice = lista.findIndex(sacola => sacola.id === id)
    const produtoDeletado = lista.splice(indice, 1)

    if(indice === -1){
        return res.json('não encontrado')
    }

    res.json({
        message: 'Deletado com sucesso',
        sacola: produtoDeletado
    })
})

app.listen(port, ()=>{
    console.log(`servidor: http://localhost:${port}`);    
})  