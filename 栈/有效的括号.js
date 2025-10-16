function activeMap(str) {
    let map = new Map();
    map.set(")", "(");
    map.set("]", "[");
    map.set("}", "{");
    return map;
}

class Check {
    constructor(str) {
        this.str = str.split("");
    }
    isValid() {
        const map = activeMap();
        const stack = [];
        let currChar, currVal;
        for (let i = 0; i < this.str.length; i++) {
            currChar = this.str[i];
            currVal = map.get(currChar);

            if (currVal) {
                if (stack[stack.length - 1] == currVal) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                // if(stack.length > this.str.length / 2 ) return false
                if ([...map.values()].includes(currChar)) {
                    stack.push(currChar);
                }
            }
        }
        return true;
    }
}

let check = new Check("{ab(c}");
console.log(check.isValid());
