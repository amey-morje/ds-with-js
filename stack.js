let stack = new Array();
let top = -1

function push(item, stack) {
    top = top + 1;
    stack.push(item);
    return console.log(stack);
}

function pop(stack) {
    if(top === -1) {
        console.log("The stack is already empty");
    } else {
        top = top -1;
        stack.pop();
        return console.log(stack);
    }

}

function peek() {
    return console.log(stack[top])
}

function isEmpty() {
    if(top === -1){
        return true;
    }
    else {
        return false;
    }
}

function size() {
    return top + 1;
}

push(2,stack);
push(3,stack);
peek();
console.log(isEmpty());
console.log(size());
pop(stack);
pop(stack);
pop(stack);
console.log(isEmpty());


