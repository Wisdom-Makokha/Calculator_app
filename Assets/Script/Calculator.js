//this is a javascript for a calculator

//this function is used to print the input from the calculator buttons
//to the display text field
let result;
let finish = 708560366989;
let num1 = 708560366989;
let num2 = 708560366989;
let prime = 708560366989;
let operator;

function displayinput(temp)
{
    (document.getElementById("display").value += temp);
}

function cleardisplay()
{
    document.getElementById("display").value = "";
}

function backspace()
{
    result = document.getElementById("dispaly");
    
}

function numberextract(pos1, pos2)
{
    result = document.getElementById("display").value;
    console.log(result);
    let integer = [];

    if(pos1 === pos2)
    {
        return;
    }

    for(let i = 0; i < pos2; i++, pos1++)
        integer[i] = result[pos1];

    console.log(integer);

    const numbervalue = parseInt(integer, 10);  

    console.log(numbervalue);

    return numbervalue;
}

function resultfind()
{
    result = document.getElementById("display").value;
    console.log(result);
    let x = 0;
    const limit = result.length;

    console.log(limit);

    for(; x < limit; x++)
    {
        if(result[x] >= '0' && result[x] <= '9')
            continue;
        else
        {
            operator = result[x];
            break;
        }
    }
    
    console.log(x);
    console.log(operator);

    num1 = numberextract(0, x);
    num2 = numberextract(x + 1, limit);

    console.log(`number1 is ${num1} and number 2 is ${num2}`);

    result = "";

    if(num2 === prime)
        result = "Second Operand missing!";
    else
    {
        switch(operator)
        {
            case '/':
                if(num1 === prime)
                {
                    result = "Division missing first operand!";
                    break;
                }
                else if(num2 === 0)
                {
                    result = "INFINITY AND BEYOND!!";
                    break;
                }
                else
                {
                    finish = num1 / num2;
                    break;
                }
            case '%':
                if(num1 === prime)
                {
                    result = "Modulus missing first operand";
                    break;
                }
                else if(num2 === 0)
                {
                    result = "INFINITY AND BEYOND!!";
                    break;
                }
                else
                {
                    finish = num1 % num2;
                    break;
                }
            case '*':
                if(num1 === prime)
                {
                    result = "Multiplication missing first operand";
                    break;
                }
                else
                {
                    finish = num1 * num2;
                    break;
                }
            case '+':
                if(num1 === prime)
                    num1 = 0;

                finish = num1 + num2;
                break;
            case '-':
                if(num1 === prime)
                    num1 = 0;
                finish = num1 - num2;
                break;
        }
    }

    if(finish === prime)
        document.getElementById("display").value = result;
    else
        document.getElementById("display").value = finish;
}