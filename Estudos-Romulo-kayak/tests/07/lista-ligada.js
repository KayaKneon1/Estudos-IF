class Node {
    constructor(element, next = null) {
        this.element = element
        this.next = next
    }
}
class LinkedList {
    constructor(){
        this.head = null
        this._size = 0
    }
    append(element){
        const node = new Node(element)
        if (this.head == null) {
            this.head = node
            this._size++
            return
        }

        let temp = this.head
        while(temp.next){
            temp = temp.next
        }
        temp.next = node
        this._size++
    }
    insert(position, element) {}
    remove(element){}
    removeAt(position){}
    indexOf(element){
        let temp = this.head
        let index = 0
        while (temp) {
            if (temp.element === element) {
                return index
            }
            temp = temp.next
            index++
        }
        return -1
    }
    toString(){
       if (this.head == null) {
            return "Lista vazia"
        }

        let listagem = this.head
        let elements = `Elementos: ${listagem.element}`
        while (listagem.next) {
            listagem = listagem.next
            elements += ` => ${listagem.element}`
        }
        return listagem 
    }
    size(){
        return this._size
    }
    isEmpty(){
        return this.head == null
    }
    clear(){
        this.head = null
        this_size = 0
    }
}

const lista = new LinkedList()
lista.append(10)
lista.append(20)
console.log(lista.toString())