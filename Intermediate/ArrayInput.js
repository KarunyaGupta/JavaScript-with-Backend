var arr = [];
// arr.push(1);
// arr.push(2);
// console.log(arr);
// arr.pop(1); // index
// console.log(arr);
// // console.log(arr.length);

Insert(arr);
console.log(arr);
function Insert(arr){
    let size = parseInt(prompt("Enter the Size of array : "));
    for(let i=1;i<=size;i++){
        let element = parseInt(prompt("Enter element " + i));
        arr.push(element);
    }
}

// function Output(arr){
//     for(let i=0;i<arr.length;i++){
//         console.log
//     }
// }

