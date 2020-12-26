class Group {
    constructor() {
        this.group = [];
    }

    static from(array) {
        if(Array.isArray(array)) {
            const obj = new Group;
            for (const item of array) {
                obj.group.push(item);
            }
            return obj;
        } else {
            return "Given object not iterable";
        }
    }
    
    add(value) {
        if(!this.has(value))
            this.group.push(value);
    }

    delete(value) {
        if(this.has(value))
            this.group = this.group.filter(item => item !== value);
    }

    has(value) {
        const index = this.group.indexOf(value);

        return index > -1 ? true : false;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false