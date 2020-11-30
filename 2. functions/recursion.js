function isEven(n) {
    if(isNaN(n) || (n !== parseInt(n))) {
        console.log("Passed argument is not a positive whole number");
        return false;
    }

    if(n === 0)
        return true;
    else if(n === 1)
        return false;
    else if(n < 0)
        return isEven(n);
    else
        return isEven(n - 2);
}

console.log(isEven(75));