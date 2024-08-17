let score = "33"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);


/*
Conversion into Numbers
    "33" => 33
    "33aa" => NaN
    true => 1 / false => 0
*/

let isLogged = "devesh"

let valueInBoolean = Boolean(isLogged)
console.log(valueInBoolean);

/*
conversion into boolean
    1 -> true
    0 -> false
    "" -> false
    "chai" -> true
*/

let someName = "qiyara"

let valueInString = String(someName)
console.log(valueInString);
console.log(typeof valueInString);
