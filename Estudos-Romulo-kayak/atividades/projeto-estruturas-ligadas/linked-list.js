class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
    return node;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;

    if (this.isEmpty()) {
      this.tail = node;
    }

    this.length += 1;
    return node;
  }

  insertAt(position, value) {
    if (!Number.isInteger(position) || position < 0 || position > this.length) {
      return false;
    }

    if (position === 0) {
      this.prepend(value);
      return true;
    }

    if (position === this.length) {
      this.append(value);
      return true;
    }

    let previous = this.head;
    for (let index = 0; index < position - 1; index += 1) {
      previous = previous.next;
    }

    const node = new Node(value);
    node.next = previous.next;
    previous.next = node;
    this.length += 1;
    return true;
  }

  removeAt(position) {
    if (!Number.isInteger(position) || position < 0 || position >= this.length) {
      return null;
    }

    let removed;
    if (position === 0) {
      removed = this.head;
      this.head = this.head.next;
      this.length -= 1;

      if (this.isEmpty()) {
        this.tail = null;
      }

      return removed.value;
    }

    let previous = this.head;
    for (let index = 0; index < position - 1; index += 1) {
      previous = previous.next;
    }

    removed = previous.next;
    previous.next = removed.next;
    this.length -= 1;

    if (position === this.length) {
      this.tail = previous;
    }

    return removed.value;
  }

  indexOf(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value.toLocaleLowerCase() === value.toLocaleLowerCase()) {
        return index;
      }
      current = current.next;
      index += 1;
    }

    return -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
