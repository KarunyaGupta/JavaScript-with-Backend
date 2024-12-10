let gamenumber=Math.floor(Math.random() * 100) + 1;
let guess_value=prompt("Enter number : ");

for(let i=0; ;i++){ // no condition mean loop is a kind of infintie 
    
    if(guess_value != gamenumber){
        guess_value=prompt("You enter wrong number guess again");
    }
    else if(guess_value == gamenumber){
        console.log("You Won in",i,"th attempt");
        break;
    }
}
