// get --> Request resource 
// post --> Sending a resource to a server like registration form 
// put and patch --> update method 
// put is a replace resource 
// patch --> patch up a resoucre 
// delete -->  delete resource from server 

import express from "express";
const app = express();
app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1> <h4> Welcome to Home Page</h4>");
     // send a response to home page
})
app.get("/about",(req,res)=>{
    res.send("<h1>About Me</h1> <p> Hey My Name is Karunya"); // localhost:5000/about
})
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact me</h1> <p> 98059468215</p>")
})
app.listen(5000,()=>{
    console.log("Server running on port 5000");
})