// get --> Request resource 
// post --> Sending a resource to a server like registration form 
// put and patch --> update method 
// put is a replace resource 
// patch --> patch up a resoucre 
// delete -->  delete resource from server 

import express from "express";
const app = express();
app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h2>"); // send a response
})
app.get("/about",(req,res)=>{
    res.send("<h1>About Me</h1>"); // localhost:5000/about
})
app.listen(5000,()=>{
    console.log("Server running on port 5000");
})