let number = 10;
let a=0;
let b=1;
let arr =[];
while(number>0){
    let temp = a;
    a=b;
    b=temp+b;
    arr.push(b);
    number--;
}
console.log(arr);