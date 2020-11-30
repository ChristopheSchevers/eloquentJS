function countBs(str, char = 'B') {
    if(typeof str != "string")
        return console.log("Argument needs to be a string");

    return countChar(str, char);
}

function countChar(str, char) {
    if(char.length != 1 && typeof char != 'string')
        return console.log('Given test argument should be a single character');

    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] == char)
            count++;
    }

    return console.log(`${count} ${count != 1 ? char + "'s were" : char + " was"} found in ${str}`);
}

countBs('ballbussterB', 's');