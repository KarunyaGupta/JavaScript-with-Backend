import express from "express";
const app = express();


app.get("/",(req,res)=>{
    const today = new Date();
    const day  = today.getDay();

    let bowl = ["Apple", "Mango","Grapes"];
    let type = "a weekday";
    let adv = "it's time to work hard";

    if(day === 0|| day===6){
        type = "the weekend";
        adv = "it's time to have some fun";
    }
    res.render("index.ejs",{
        dayType : type,
        advice:adv
    });

    res.render("index.ejs",{
        fruit:bowl
    });
});


app.listen(5000,()=>{
    console.log("Server Running on port 5000");
})