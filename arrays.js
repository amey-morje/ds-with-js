let NumberList = [1,2,3,4,5,6];

function insertFirst(Object, Array) {  // Shift Array to right by one place and then replace the first position
    for(let i=Array.length-1; i >=0; i--) {
        Array[i+1] = Array[i];
    }
    Array[0] = Object;
}

function insertFirstDirect(Object, Array) {
    Array.unshift(Object)
    return Array;
}


function insertLast(Object, Array) {
    Array.push(Object);
    return Array;
}

function insertBetween(Object, position, Array) {
    Array.splice(position-1,0,Object)
    return Array;
}

function deleteFirst(Array) {
    return Array.shift()
}

function deleteLast(Array) {
    return Array.pop()
}

function deleteFromBetween(position, Array) {
    Array.splice(position-1,1);
}

function printArray(Array) {
    for (let i=0; i < Array.length ; i++) {
        console.log(Array[i]);
    }
}

insertFirst(0, NumberList);

insertBetween(0,5,NumberList);

insertLast(0, NumberList);

deleteFirst(NumberList);

deleteLast(NumberList);

deleteFromBetween(3, NumberList);


printArray(NumberList);