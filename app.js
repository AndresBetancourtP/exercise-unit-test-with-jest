// const sum = (a,b) => {
//     return a + b
// }

// console.log(sum(7,3));

// module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



let fromEurosToDollar = (euros) => {
    return euros * 1.2
    // `you give me ${euros} Euros and I will pay you ${euros * 1.2} Dollars`
};

let fromDollarToEuro = (dollars) => {
    return  dollars / 1.2
    // `you give me ${dollars} Dollars and I will pay you ${dollars / 1.2} Euros`
};

let fromDollarToYen = (dollars) => {
    let euroToYen = fromDollarToEuro(dollars) * 127.9;
    let result = Math.floor(euroToYen)
    return result
    // `you give me ${dollars} Dollars and I will pay you ${result} Yen`
};

let fromYenToPound = (yen) => {
    let yenToEuro = yen / 127.9
    let yentoPound = yenToEuro * 0.8
    return Math.floor(yentoPound)
};

console.log(fromYenToPound(1000));
module.exports = {fromEurosToDollar, fromDollarToYen, fromYenToPound};







