import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs",{ UserData: null });
});

app.post("/submit", (req, res) => {
    const data = {
        username: req.body["username"],
        password: req.body["password"]
    };
    res.render("index.ejs",{
        UserData : data
    })
    // // const count = data.username.length;
    // res.send(data);
    // res.send("Data received"); // Send a response back to the client
    // console.log(data);
});

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});