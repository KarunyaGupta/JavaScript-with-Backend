function swap(){
    let firstNumber = parseInt(prompt("Enter First Number : "));
    let secondNumber = parseInt(prompt("Enter Second Number : "));
    let temp;
    console.log(`First number ${firstNumber}`);
    console.log(`Second number ${secondNumber}`);
    temp=firstNumber;
    firstNumber=secondNumber;
    secondNumber=temp;
    console.log(`First number ${firstNumber}`);
    console.log(`Second number ${secondNumber}`);
}
swap();