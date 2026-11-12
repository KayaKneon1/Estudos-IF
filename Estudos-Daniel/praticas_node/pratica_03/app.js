require('dotenv').config()

const path = require('node:path')
const express = require('express')
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3')
const { PrismaClient } = require('./generated/prisma')

if (!process.env.DATABASE_URL) {
    throw new Error('Configure DATABASE_URL no arquivo .env.')
}

const prisma = new PrismaClient({
    adapter: new PrismaBetterSqlite3({ url: process.env.DATABASE_URL }),
})
const app = express()
const port = Number(process.env.PORT || 3000)

app.use(express.json())
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})
app.use(express.static(path.join(__dirname, 'public')))

function validarProduto({ nome, preco } = {}) {
    if (typeof nome !== 'string' || !nome.trim()) return 'O nome do produto é obrigatório.'
    if (!Number.isInteger(preco) || preco < 0) return 'O preço deve ser um número inteiro maior ou igual a zero.'
}

function validarId(id) {
    const numero = Number(id)
    return Number.isSafeInteger(numero) && numero > 0 ? numero : null
}

app.get('/api/health', async (req, res) => {
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'ok', database: 'connected' })
})

app.get('/lista', async (req, res) => {
    res.json(await prisma.lista.findMany({ orderBy: { id: 'asc' } }))
})

app.get('/lista/:id', async (req, res) => {
    const id = validarId(req.params.id)
    if (!id) return res.status(400).json({ error: 'ID inválido.' })

    const produto = await prisma.lista.findUnique({ where: { id } })
    if (!produto) return res.status(404).json({ error: 'Produto não encontrado.' })
    res.json(produto)
})

app.post('/lista', async (req, res) => {
    const erro = validarProduto(req.body)
    if (erro) return res.status(400).json({ error: erro })

    const produto = await prisma.lista.create({
        data: { nome: req.body.nome.trim(), preco: req.body.preco },
    })
    res.status(201).json(produto)
})

app.put('/lista/:id', async (req, res) => {
    const id = validarId(req.params.id)
    if (!id) return res.status(400).json({ error: 'ID inválido.' })

    const erro = validarProduto(req.body)
    if (erro) return res.status(400).json({ error: erro })

    const existente = await prisma.lista.findUnique({ where: { id } })
    if (!existente) return res.status(404).json({ error: 'Produto não encontrado.' })

    const produto = await prisma.lista.update({
        where: { id },
        data: { nome: req.body.nome.trim(), preco: req.body.preco },
    })
    res.json(produto)
})

app.delete('/lista/:id', async (req, res) => {
    const id = validarId(req.params.id)
    if (!id) return res.status(400).json({ error: 'ID inválido.' })

    const produto = await prisma.lista.findUnique({ where: { id } })
    if (!produto) return res.status(404).json({ error: 'Produto não encontrado.' })

    await prisma.lista.delete({ where: { id } })
    res.json({ message: 'Deletado com sucesso', sacola: [produto] })
})

app.use((err, req, res, next) => {
    if (res.headersSent) return next(err)
    console.error(err)
    res.status(err.status || 500).json({
        error: err.status === 400 ? 'JSON inválido.' : 'Erro interno do servidor.',
    })
})

async function startServer() {
    try {
        await prisma.$connect()
        app.listen(port, () => console.log(`Servidor: http://localhost:${port}`))
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error)
        await prisma.$disconnect()
        process.exitCode = 1
    }
}

if (require.main === module) startServer()

module.exports = { app, prisma, startServer }
