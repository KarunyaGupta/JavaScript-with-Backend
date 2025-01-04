import express from "express";
const app = express();

app.listen(5000,()=>{ // 3000 is a port number
    console.log("Server running on port 5000.");//call back function when a server is setup 
})