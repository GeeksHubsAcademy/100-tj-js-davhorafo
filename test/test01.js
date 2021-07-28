function geekshubs(number) {
    let printedNumbers = "";
    for(let i=1; i<=number; i++){
        printedNumbers += numberToPrint(i);
        printedNumbers += "\n"
    }
    console.log(printedNumbers)
    return printedNumbers;
}
function numberToPrint(number){
    const isDivisible = (num,divider) => num % divider == 0;

    if(isDivisible(number,3) && isDivisible(number,5)){
        return "GeeksHubs";
    }
    if(isDivisible(number,3)){
        return "Geeks";
    }
    if(isDivisible(number,5)){
        return "Hubs";
    }
    return number;
}

geekshubs(10);

module.exports = geekshubs;
