items = []

function append(elemento){
    items.push(elemento)

}

function insert(posicao, elemento){
    // items.splice(posicao, 0, elemento)
    for (let i = items.length; i > posicao; i--){
        items[i] = items[i - 1]
    }
    items[posicao] = elemento
}

function remove(elemento){
    // for (let i = 0; i < items.length; i++){
    //     if (items[i] === elemento){
    //         removeAt(i)
    //         return
    //     }
    // }

    const posicao = items.indexOf(elemento)
    removeAt(posicao)
}

function removeAt(posicao){
    items.splice(posicao, 1)
}

function indexOf(elemento){
    return items.indexOf(elemento)
}

function toString(){
    return items.toString()
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
    items = []
}