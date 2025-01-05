import express from "express";
const app = express();

app.get("/",(req , res)=>{
    res.send("<h1>Home Page</h1>");
});

app.post("/register",(req,res)=>{
    res.sendStatus(201);
});
app.put("/user/data",(req,res)=>{
    res.sendStatus(201);
});
app.patch("/user/data",(req,res)=>{
    res.sendStatus(200);
});
app.delete("/user/data",(req,res)=>{
    res.sendStatus(200);
});
app.listen(5000,()=>{
    console.log("Server Running on port 5000");
})