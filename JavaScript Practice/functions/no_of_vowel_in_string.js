function count_vowel(input){
    let count =0;
    for(let char of input){
        if(char==='a' ||char==='e'||char==='i' || char ==='o' || char==='u'){
            count +=1;
        }   
    }
    return count;
}

let input = prompt("Enter string : ");
console.log(count_vowel(input));