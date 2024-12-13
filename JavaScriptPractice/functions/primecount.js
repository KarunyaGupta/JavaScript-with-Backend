/* Type your javascript code here */
function primeCount(input) {
    let count =0;
    for (let i = 2; i <= input; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (count) {
            count++;
        }
    
    return count;
    }
}
let integer =parseInt(prompt(""));

console.log(primeCount(integer));

  