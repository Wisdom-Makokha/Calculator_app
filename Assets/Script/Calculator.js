//this is a javascript for a calculator
let x = 50;
console.log(x);

function displayinput(temp)
{
    let result = (document.getElementById("display").value +=temp);

    return result;
}

console.log(document.getElementById("display").value);

let message = "abcdefghijklmnopqrstuvwxyz";

console.log(message[1]);