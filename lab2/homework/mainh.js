let numberOne = +prompt("Enter your first number")
let numberTwo = +prompt("Enter your second number")
let operator = prompt("Enter your arithmetic operator")
let qq;



function calculator() {

    if (operator === "+") {
        qq = numberOne + numberTwo
    } if (operator === "-") {
        qq = numberOne - numberTwo
    } if (operator === "*") {
        qq = numberOne * numberTwo
    } if (operator === "/") {
        qq = numberOne / numberTwo
    }
    return qq;
}

document.getElementById("result").innerHTML =calculator();










// else if (operator !== Number) {
//     qq = "Error, enter valid arithmetic operator"
// }
// else if (numberOne !== Number || numberTwo !== Number) {
//     qq = "Error, enter number"
// }












// function calculator() {
//
//     let result = {
//
//         1 : +numberOne + +numberTwo,
//
//         2 : numberOne - numberTwo,
//
//         3 : numberOne * numberTwo,
//
//         4 : numberOne / numberTwo
//
//     }[operator];
//
//     return result  || "Wrong operation";
//
// }
// alert(calculator());




