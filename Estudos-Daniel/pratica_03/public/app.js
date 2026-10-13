const $ = (selector) => document.querySelector(selector)
const form = $('#product-form')
const nameInput = $('#nome')
const priceInput = $('#preco')
const productList = $('#product-list')
let editingId = null

const formatPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
})

function showMessage(selector, text, error = false) {
    const message = $(selector)
    message.textContent = text
    message.classList.toggle('message-error', error)
}

async function request(url, options = {}) {
    const response = await fetch(url, {
        ...options,
        headers: options.body ? { 'Content-Type': 'application/json' } : {},
    })
    const result = await response.json()
    if (!response.ok) throw new Error(result.error || 'Não foi possível concluir a operação.')
    return result
}

function actionButton(text, className, action) {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = `button ${className}`
    button.textContent = text
    button.onclick = action
    return button
}

function renderProducts(products) {
    productList.replaceChildren()
    $('#product-count').textContent = `${products.length} ${products.length === 1 ? 'produto' : 'produtos'}`
    showMessage('#list-message', products.length ? '' : 'Ainda não há produtos cadastrados.')

    for (const product of products) {
        const item = document.createElement('li')
        item.className = 'product-item'

        const info = document.createElement('div')
        info.className = 'product-info'

        const name = document.createElement('span')
        name.className = 'product-name'
        name.textContent = product.nome

        const price = document.createElement('span')
        price.className = 'product-price'
        price.textContent = formatPrice.format(product.preco)

        const actions = document.createElement('div')
        actions.className = 'product-actions'
        actions.append(
            actionButton('Editar', 'button-secondary', () => editProduct(product)),
            actionButton('Excluir', 'button-danger', () => deleteProduct(product)),
        )

        info.append(name, price)
        item.append(info, actions)
        productList.append(item)
    }
}

async function loadProducts() {
    showMessage('#list-message', 'Carregando produtos...')
    try {
        renderProducts(await request('/lista'))
    } catch (error) {
        showMessage('#list-message', error.message, true)
    }
}

function editProduct(product) {
    editingId = product.id
    nameInput.value = product.nome
    priceInput.value = product.preco
    showMessage('#form-message', '')
    $('#form-title').textContent = 'Editar produto'
    $('#submit-button').textContent = 'Salvar alterações'
    $('#cancel-button').hidden = false
    nameInput.focus()
}

function resetForm() {
    editingId = null
    form.reset()
    $('#form-title').textContent = 'Adicionar produto'
    $('#submit-button').textContent = 'Adicionar produto'
    $('#cancel-button').hidden = true
    showMessage('#form-message', '')
}

async function deleteProduct(product) {
    if (!confirm(`Deseja excluir "${product.nome}"?`)) return

    try {
        await request(`/lista/${product.id}`, { method: 'DELETE' })
        if (editingId === product.id) resetForm()
        await loadProducts()
    } catch (error) {
        showMessage('#list-message', error.message, true)
    }
}

form.onsubmit = async (event) => {
    event.preventDefault()
    const product = { nome: nameInput.value.trim(), preco: Number(priceInput.value) }
    const url = editingId ? `/lista/${editingId}` : '/lista'
    const method = editingId ? 'PUT' : 'POST'

    $('#submit-button').disabled = true
    try {
        await request(url, { method, body: JSON.stringify(product) })
        resetForm()
        showMessage('#form-message', 'Produto salvo com sucesso.')
        await loadProducts()
    } catch (error) {
        showMessage('#form-message', error.message, true)
    } finally {
        $('#submit-button').disabled = false
    }
}

$('#cancel-button').onclick = resetForm
loadProducts()
