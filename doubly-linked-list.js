class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        if(this.isEmpty()) {
            console.log("The linked list is Empty!");
        }
        else {
            let curr = this.head;
            let listValues = '';
            while(curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }

    printReverse() {
        if(this.isEmpty()) {
            console.log("The linked list is empty");
        } else {
            let curr = this.tail;
            let listValues = '';
            while(curr) {
                listValues += curr.value.toString();
                curr = curr.prev;
            }
            console.log(listValues);
        }
    }

    prepend(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }
    
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFromFront() {
        if(this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        this.head.next = this.head;
        this.head.prev = null;
        this.size--;
        return value;
    }
}

let linkedList = new DoublyLinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
console.log(linkedList.removeFromFront());
linkedList.print();
// linkedList.printReverse();
console.log(linkedList.getSize());