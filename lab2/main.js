// let a = +prompt("enter a value");
// let b = +prompt("enter b value");
// let sum = 0;
// let qu = 0;
//
// for(let i=a; i<b; i++) {
//     if (i%2 === 0){
//         sum+=i;
//     }
//     else {
//         qu++;
//     }
// }
// console.dir("qu: " + qu + "sum: " + sum);

//

// for (let j = 999; j<10000; j++ ) {
//     let string = j.toString();
//     let sum = 0;
//     let dob = 0;
//     for (let i = 0; i<string.length;i++){
//         sum += +string[i];
//         dob += +string[i];
//     }
//     if (sum === dob) {
//         alert("qweqwe " + j);
//     }
// }

//

let a = +prompt("a 1 sq");
let b = +prompt("a 1 sq");

let c = +prompt("a 2 sq");
let d = +prompt("a 2 sq");
if (area(a,b)>area(c,d)){
    alert("1st is bigger")
}else {
    alert("2nd is bigger")
}


function area(a,b) {
    return a*b;

}