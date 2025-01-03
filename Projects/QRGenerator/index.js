import inquirer from "inquirer";
import qr from "qr-image";
import fs, { writeFile } from "fs";
import { constrainedMemory } from "process";
inquirer.prompt([
    {message:"Type in your URL: ",
        name:"URL"
    }
])
.then((answer)=>{
    // console.log(answer);
    const url = answer.URL;
    var qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream("QR.png")); 

    // to print the message that the file has been saved or to save the url
    fs.writeFile("URL.txt",url,(err)=>{
        if(err){
            throw err;
        }
        console.log("The file has been saved");
    })
})
.catch((error)=>{
    if(error.isTtyError){

    }else{

    }
});