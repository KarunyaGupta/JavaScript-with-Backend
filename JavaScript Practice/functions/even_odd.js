/* Type your javascript code here */
function isEven(input) {
  	if(input%2!=0){
      return false;
    }
	return true;
}

let num=parseInt(prompt("Enter number")); // parseint use to convert string to integer
// let result = isEven(num);
console.log(isEven(num));
