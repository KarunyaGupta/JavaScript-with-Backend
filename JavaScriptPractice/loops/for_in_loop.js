let student={
    fullName : "Karunya Gupta ",
    age : 20,
    cgpa:9,
    isPass:true,
};

for(let i in student){
    console.log(i);    // return keys 
}


for(let key in student){
    console.log("Key = ",key ,"and value = ",student[key]);    
}


