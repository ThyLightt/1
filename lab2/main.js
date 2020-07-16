let day;
let sunny;
let rainy;
let cold;
let weekend;

let output = "";

function analyzeWeather() {

    day = document.getElementById("check1").checked;
    sunny = document.getElementById("check2").checked;
    rainy = document.getElementById("check3").checked;
    cold = document.getElementById("check4").checked;
    weekend = document.getElementById("check5").checked;

    switch (true) {
        case day === true && sunny === true:
            output += "Take sunglasses."
                break;
        case day === true && rainy === true  :
            output += "Take umbrella."
            break;
        case day === true && cold === true:
            output += "Take coat."
            break;
        case day === true && weekend === true:
            output += "Go to piknick."
            break;
        case rainy === true:
            output += "Take umbrella."
            break;
        case cold === true:
            output += "Take coat."
            break;
        case weekend === true:
            output += "Go to caffee."
            break;
        case day === true:
            output += "Go to work."
            break;
        default:
            output += "Go to home."
            break;
    }
    alert(output);








    // if (day === true) {
    //     if (sunny === true) {
    //         output = "Take sunglasses."
    //     }
    //     if (rainy === true) {
    //         output += "Take umbrella."
    //     }
    //     if (cold === true) {
    //         output += "Take coat."
    //     }
    //     if (weekend === true) {
    //         output += "go to piknick."
    //     } else {
    //         output += "go to work."
    //     }
    // }else {
    //     if (rainy === true) {
    //         output += "Take umbrella."
    //     }
    //     if (cold === true) {
    //         output += "Take coat."
    //     }
    //     if (weekend === true) {
    //         output += "go to caffe."
    //     } else {
    //         output += "go to home."
    //     }
    // }
    // alert(output);
}