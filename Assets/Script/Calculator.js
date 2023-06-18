//this is a javascript for a calculator

//initializing the variable that will store the text text displayed to the user
let result ="";
const prime = 708560366989;   //this one is for error checking
let calcresultflag = false;   //this variable is used to check if the result has been calculated
                              //and displayed on screen

//this function is used to clear everything on screen
function cleardisplay()
{
    document.getElementById("display").value = "";
}

//this function is used to print the input from the calculator buttons(operator and number)
//to the display text field 
function displayinput(temp)
{
    //first the flag is used to check if a result has recently been put on the display
    //if calcresultflag is true the display is cleared to put new content on the display
    //without interfering with the previous
    if(calcresultflag === true)
        {
            cleardisplay();
            calcresultflag = false;
            (document.getElementById("display").value += temp);
        }
    //if it is false then the input is put on the display as usual
    else
        (document.getElementById("display").value += temp); 
}

//this function removes the last typed in character from the display
function backspace()
{
    //first the flag is used to check if a result has recently been put on the display
    //if calcresultflag is true the display is cleared instead of erasing one character 
    //at a time
    if(calcresultflag === true)
        cleardisplay();
    //if it is false this block runs
    else
    {
        //the contents in display are first copied into result
        result = document.getElementById("display").value;
        console.log(result);
        //a new string is initiated
        let  temp = "";

        //a string is an array of characters(it is possible to interact with a string like an array)
        //the characters in the result string are copied one by one into the temp string
        //except for the last character which is excluded using result.length - 1
        for(let i = 0; i < (result.length - 1); i++)
            temp += result[i];

        console.log(temp);

        //the contents in temp are put on the display with the last character missing
        document.getElementById("display").value = temp;
    }
}

//this function is used to get an operand from a string
function numberextract(pos1, pos2)
{
    //initialization of the values to be used in the function
    result = document.getElementById("display").value;
    console.log(result);
    let integer = "";

    //this is to check that there is an operand to extract
    //if the two positions are equal to each other then there's nothing
    if(pos1 === pos2)
        return prime;
    //the characters in result are extracted one at a time and placed into integer
    //the integer string is then turned into an integer using the parseInt() function
    // and the value returned
    else
    {
        for(let i = 0; i < pos2; i++, pos1++)
            integer += result[pos1];

        console.log(integer);

        const numbervalue = parseFloat(integer, 10);  

        console.log(numbervalue);

        return numbervalue;
    }
}

function resultfind()
{
    //variables initialized here
    let finish = 708560366989;
    let num1 = 708560366989;
    let num2 = 708560366989;
    let operator = "Missing operator!";
    let i = 0;

    //string in the display copied to result
    result = document.getElementById("display").value;
    console.log(result);
    
    const limit = result.length;
    console.log(limit);

    //result is evaluated to look for the position of the operator on the string
    //the oerator will be the first non-number to be encountered in this 
    //iteration of the calculator
    //the operator separates the two operands and is the center of any calculation
    //the operator is then gotten and stored in its variable
    for(; i < limit; i++)
    {
        if((result[i] >= '0' && result[i] <= '9') || result[i] === '.')
            continue;
        else
        {
            operator = result[i];
            break;
        }
    }
    
    console.log(i);
    console.log(operator);

    //our two operands placed in num1 and num2
    num1 = numberextract(0, i);
    num2 = numberextract(i + 1, limit);

    console.log(`number1 is ${num1} and number 2 is ${num2}`);

    let errormsg = "";

    //the second operand is first checked if it is missing
    //with the operator present the second operand is necessary
    if(num2 === prime)
        errormsg = "Second operand missing!";
    //a switch statement is used to run through the various operators to determine 
    //the appropriate operation to run
    //if else statements have been used in each case to ensure that several situations 
    //are accounted for
    else
    {
        switch(operator)
        {
            case '/':
                if(num1 === prime)
                {
                    errormsg = "Division missing first operand!";
                    break;
                }
                else if(num2 === 0)
                {
                    errormsg = "INFINITY AND BEYOND!!";
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
                    errormsg = "Modulus missing first operand";
                    break;
                }
                else if(num2 === 0)
                {
                    errormsg = "INFINITY AND BEYOND!!";
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
                    errormsg = "Multiplication missing first operand";
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
            default:
                finish = num1;
                break;
        }
    }

    //this checks if we should be displaying one of the error messages or 
    //the result of a calculation
    if(finish === prime)
        document.getElementById("display").value = errormsg;
    else
        document.getElementById("display").value = finish;

    //this is our boolean value that is used to show the result is on screen
    calcresultflag = true;
}