alert("This website contain cookees");

console.dir(window.document);  // dir use to print thed data
console.dir(document.body); // print html document content 


// DOM manupulation 


// accessing elements by id , class and tag from the page ;

let content = document.getElementsByClassName("content");
console.dir(content);


let paragraph = document.getElementsByTagName("p");
console.dir(paragraph);


let heading = document.getElementById("heading");
console.dir(heading);
console.log(heading);



// queryselector 

let element=document.querySelector("p");
console.dir(element);   // for a single element 

let allelement = document .querySelectorAll("p");
    console.dir(allelement);

// for printing all the class and  ids 
let classes = document.querySelector(".content");
console.dir(classes);
let allclass = document.querySelectorAll(".content")
console.dir(allclass);

//same for ids 
 

