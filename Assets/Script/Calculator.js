//this is a javascript for a calculator

//this function is used to print the input from the calculator buttons
//to the display text field
let result;
let num1 = 0.1;
let num2 = 0.1;
let operator;

function displayinput(temp)
{
    result = (document.getElementById("display").value +=temp);

    console.log(result);
    return result;
}

