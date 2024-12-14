// take 2 number as input from user
//  it perfrom wrong operations:
// + --> - 
// * --> +
// - --> /
// / --> **


// it performs wrong opperations 10% of time
let random = Math.floor(Math.random()*100); 
// let first = parseInt(prompt(""));
// let second = parseInt(prompt(""));
// let operator = prompt("");
let first = 10;
let second = 20;
let operator = '+';



function Calculator(first , second , operator){
    switch(operator){
        case '+':
            return first+second;
            break;
        case '-':
            return first-second;
            break;
        case '/':
            if(second == 0){
                console.log("Denominator cannot be zero");
                break;
            }else{
                return first/second;
                break;
            }
        case '*':
            return first*second;
            break;
        default:
            return -1;

    }
}

function faultyCalculator(first , second , operator){
    switch(operator){
        case '+':
            return first-second;
            break;
        case '-':
            // return first-second;
            if(second == 0){
                console.log("Denominator cannot be zero");
                break;
            }else{
                return first/second;
                break;
            }
            break;
        case '/':
            return Math.pow(first , second);
        case '*':
            return first+second;
            break;
        default:
            return -1;

    }
}

function condition(){
    if(random>50){
        return true;
    }else{
        return false;
    }
    
}


if(condition()){
    console.log(Calculator(first , second, operator));
}else{
    console.log(faultyCalculator(first , second, operator));
}


