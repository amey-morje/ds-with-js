class CircularQueue {
    constructor() {
        this.items = new Array();
        this.front = 0;
        this.rear = 0;
        this.max = 5;
    }

    enqueue(element) {
        if(this.rear===this.max-1 && this.front === 0) {
            return "The queue is full"
        }
        else if(this.rear === this.max-1 && this.front !== 0) {
            this.items[this.rear] = element;
            this.rear = 0;
        }
        else {
            this.items[this.rear] = element;
            this.rear++;
        }
    }

    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.rear];
        if(this.front===this.max){
            this.front = 0;
        } else {
            this.front++;
        }

    }

    isEmpty() {
        return this.front === this.rear
    }

    peek() {
        console.log(this.items[this.rear-1]);
        return this.items[this.rear-1];
    }
}

const queue = new CircularQueue();