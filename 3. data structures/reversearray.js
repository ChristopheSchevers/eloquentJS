function reverseArray(arr) {
    let result = [];
    for(let i = arr[0]; i <= arr.length; i++) {
        result.unshift(i);
    }
    return result;
}

function reverseArrayInPlace(arr) {
    const mid = Math.floor(arr.length / 2);
    let temp = null;

    for(let i = 0; i <= mid; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

const array = [1,2,3,4,5,6];
console.log(reverseArrayInPlace(array));