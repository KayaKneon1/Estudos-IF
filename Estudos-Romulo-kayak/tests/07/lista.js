items = []

function append(elemento){
    items[items.length] = elemento
}

function insert(posicao, elemento){
    if (posicao < 0 || posicao > items.length){
        return false
    }

    for (let i = items.length; i > posicao; i--){
        items[i] = items[i - 1]
    }
    items[posicao] = elemento
    return true
}

function remove(elemento){
    const posicao = indexOf(elemento)
    if (posicao === -1){
        return
    }
    return removeAt(posicao)
}

function removeAt(posicao){
    if (posicao < 0 || posicao >= items.length){
        return
    }

    const elementoRemovido = items[posicao]
    for (let i = posicao; i < items.length - 1; i++){
        items[i] = items[i + 1]
    }
    items.length = items.length - 1
    return elementoRemovido
}

function indexOf(elemento){
    for (let i = 0; i < items.length; i++){
        if (items[i] === elemento){
            return i
        }
    }
    return -1
}

function toString(){
    let resultado = ''
    for (let i = 0; i < items.length; i++){
        if (i > 0){
            resultado += ','
        }
        resultado += items[i] === null || items[i] === undefined ? '' : String(items[i])
    }
    return resultado
}

function print(){
    return console.log(items)
}
function isEmpty(elemento){
    return items.length === 0
}

function size(){
    return items.length
}

function clear(){
    items.length = 0
}