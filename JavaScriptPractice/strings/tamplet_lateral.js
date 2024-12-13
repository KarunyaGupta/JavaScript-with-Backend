let specialString = `This is a tamplet litral`;
console.log(typeof specialString);



//practical example 

let obj = {
    item : "pen",
    price : 10 ,
};

console.log("the cost of pen is", obj.price,"rupees");
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);