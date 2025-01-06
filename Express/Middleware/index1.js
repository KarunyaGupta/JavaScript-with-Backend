import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


// we have to do
app.post("/submit",(req,res)=>{
  console.log(req.body);
  res.send(req.body["street"] + req.body["pet"]);
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
