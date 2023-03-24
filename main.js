let operator = '';
function add(x,y)     
{
 return x+y;


}

/*tsart by creating functions for the following items and testing them in your browser’s console.
add

subtract
multiply
divide */

function subtract(x,y)     
{
 return x-y;


}



function multiply(x,y)     
{
 return x*y;


}



function divide(x,y)     
{
 return x/y;


}



/*Create a variable for the first number, the operator, 
and the second number. You’ll use these variables 
to update your display later. */

function operate(operator,x,y)
{
    switch(operator)
    {
        case '+':
    return add(x,y)
    break;
    case '-':
        return subtract(x,y);
        break
        case '*':
            return multiply(x,y);
            break;
            case '/':
                return divide(x,y);
                break;
    }}

    console.log(operate('/',12,3))



