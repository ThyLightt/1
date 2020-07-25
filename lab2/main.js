let imgNode = document.createElement("img")

imgNode.src = "https://cdn.the-scientist.com/assets/articleNo/66864/aImg/35078/foresttb-l.jpg";
imgNode.style.width="400px";

let mainCont = document.getElementById("mainContainer");
mainCont.appendChild(imgNode);

let article = document.createElement("p");
let articleText = document.createTextNode("loren    qweqweqweqwe")
article.appendChild(articleText);
mainCont.appendChild(article);

let myButton = document.createElement("button");
myButton.innerHTML = "Hide! ";
myButton.style.padding = "20px";
myButton.style.border = "0";

mainCont.appendChild(myButton);

myButton.onclick = function(){
    article.style.display = "none";
};

let myButton2 = document.createElement("button");
myButton2.innerHTML = "Show! ";
myButton2.style.padding = "20px";
myButton2.style.border = "0";

mainCont.appendChild(myButton2);

myButton2.onclick = function(){
    article.style.display = "flex";
};


































// let numbers = [3,6,1,9,3,6,8,4,2,5,77,989,76,33]
// let max = numbers[0];
// let secondMax = max;
//
// for (let i = 0; i<numbers.length; i++) {
//     if (max < numbers[i+1]) {
//         secondMax = max;
//         max = numbers[i+1];
//     }
//     if (max !== numbers[i] && secondMax < numbers[i]) {
//         secondMax = numbers [i];
//     }
// }
// alert(secondMax)
