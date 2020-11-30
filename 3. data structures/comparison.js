function deepEqual(a,b) {
    if(typeof a == 'object' && a != null &&
        typeof b == 'object' && b != null &&
        Object.keys(a).length == Object.keys(b).length) {
        for(let key of Object.keys(a)) {
            if(!(key in b))
                return false;
            
            if(!deepEqual(a[key],b[key]))
                return false;
        }
        return true;
    } else
        return a === b;
}

const obj1 = {key: 1, value: 'test'};
const obj2 = {key: 1, value: 'test'};
console.log(deepEqual(obj1,'obj2'));