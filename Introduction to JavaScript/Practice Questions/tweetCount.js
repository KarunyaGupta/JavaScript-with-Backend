let tweet = prompt("Enter your tweet: ");
let tweetCount = tweet.length;
let remaining_alphabet = 280-tweetCount;
if(tweetCount>remaining_alphabet){
    alert(`You have written ${tweetCount} character , you have exceeded the limit by ${tweetCount-280} character`);
}else{
    alert(`You have written ${tweetCount} character , you have ${remaining_alphabet} character ramaining`);
}