//display declaration using ID selector 
const display = document.getElementById("display");

function appendtodisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        console.log("Error");
    }
}

function cleardisplay() {
    display.value = "";
}

function delete_digit(){
    display.value = display.value.slice(0, -1);
}