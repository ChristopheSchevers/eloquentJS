function arrayToList(arr) {
    let list = null;
    
    for(let i = arr.length - 1; i >= 0; i--) {
        list = prepend(arr[i], list);
    }

    return list;
}

function prepend(el, list) {
    return {value: el, rest: list};
}

function listToArray(list) {
    let array = [];

    for(let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function nth(list, n) {
    let index = 0;
    for(let node = list; node; node = node.rest) {
        if(node.value == n)
            return index;

        index++;
    }
}

function recursiveNth(list, n, index = 0) {
    if(list.value == n)
        return index;
    
    if(list.rest != null)
        return recursiveNth(list.rest, n, index + 1);
}

const array = [1,2,3];
let list = arrayToList(array);
// console.log(arrayToList(array));
console.log(recursiveNth(list,4));