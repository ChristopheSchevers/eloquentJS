const size = 8;
let rows = 0;
let output = "";

do {
    rows++;    
    for(let i = 0; i < size; i++) {
        let stmnt = (rows % 2 == 0) ? i % 2 == 0 : i % 2 != 0;
        if(stmnt)
            output += "#";
        else output += " ";
    }
    output += "\n";
} while(rows < size);

console.log(output);