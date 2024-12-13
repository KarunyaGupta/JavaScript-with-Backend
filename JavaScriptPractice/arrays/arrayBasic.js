let arr=[1,2,3,4,5,6,7];  // preffer when we have multiple items 
console.log(arr[0]);

console.log(arr.length); // size of array 
console.log(typeof arr);


for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr[0]=0; // change the value 
console.log(arr[0]); 


let cities=["Mandi","Kullu","Kangra","Solan","Shimla","hamirpur"];
for(let city of cities){
    console.log(city);
}



