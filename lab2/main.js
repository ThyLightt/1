let day;
let sunny;
let rainy;
let cold;
let weekend;



function analyzeWeather() {
    let output = "";
    day = document.getElementById("check1").checked;
    sunny = document.getElementById("check2").checked;
    rainy = document.getElementById("check3").checked;
    cold = document.getElementById("check4").checked;
    weekend = document.getElementById("check5").checked;


    if (day === true) {
        if (sunny === true) {
            output = "Take sunglasses."
        }
        if (rainy === true) {
            output += "Take umbrella."
        }
        if (cold === true) {
            output += "Take coat."
        }
        if (weekend === true) {
            output += "go to piknick."
        } else {
            output += "go to work."
        }
    }else {
        if (rainy === true) {
            output += "Take umbrella."
        }
        if (cold === true) {
            output += "Take coat."
        }
        if (weekend === true) {
            output += "go to caffe."
        } else {
            output += "go to home."
        }
    }
    alert(output);
}