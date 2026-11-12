class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        return this.items.shift()
    }

    peek() {
        return this.items[0]
    }

    front() {
        return this.items[0]
    }

    rear() {
        return this.items[this.items.length - 1]
    }

    size() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0
    }

    print() {
        return this.items
    }
}

window.Queue = Queue
