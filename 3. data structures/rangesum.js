function range(start, end, step = 1) {
    if(isNaN(start) || isNaN(end) || isNaN(step))
        return 'All arguments must be numbers';

    let arr = [];
    for(let i = start; step < 0 ? i >= end : i <= end; i += step) {
        arr.push(i);
    }
    return arr;
}

function sum(arr = []) {
    let result = 0;
    for(i of arr) {
        if(isNaN(i))
            return 'All elements in array must be numbers';
        
        result += i;
    }
    return result;
}

console.log(sum(range(10,1,-1)));