// push method 

let foodItems=["potato","apple","litchi","tomato"];
foodItems.push("Brinjal","chips");
console.log(foodItems);


//pop method
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deleted", deletedItem);

// to string --> to convert the array into string 
console.log(foodItems.toString());  



// concat method 
let marvel_heros=["thor","spiderman","ironman"];
let dc_heros=["superman","batman"];
let indian_heros=["saktiman"]

let heros =marvel_heros.concat(dc_heros,indian_heros);
console.log(heros);



//slice 
let numbers = [1,2,3,4,5];
console.log(numbers.slice(1,3));


//splice
// add , remove , delete 


