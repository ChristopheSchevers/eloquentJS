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

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.groupObj = group;
    }

    next() {
        if(this.index == this.groupObj.group.length) return {done: true};

        let value = this.groupObj.group[this.index]
        this.index++;
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c