let marks=[85,97,44,37,76,60];
let sum=0;
for(let ele of marks){
    sum +=ele;
}

let average = sum / marks.length;
console.log(`The average of array is ${average}`);