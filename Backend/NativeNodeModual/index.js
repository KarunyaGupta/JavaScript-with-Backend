const fs = require("fs");
fs.writeFile("massage.txt","Hello from node js" , (err)=>{
    if(err){
        throw err;
    }else{
        console.log("THE FILE HAS BEEN SAVED!");
    }
}); //create file massage.txt and the content hello from node js


fs.readFile("./massage.txt","utf8",(err,data)=>{ // utf8 is a node engine, if we not write it give us a data in the from of buffer
    if(err){
        throw err;
    }else{
        console.log(data);
    }
})