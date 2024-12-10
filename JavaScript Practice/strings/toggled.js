let str = prompt("Enter String : ");

for(let i =0;i<str.length;i++){
    if(str[i]>='a'&&str[i]<='z'){
        str[i] -= 32;
    }
    else if(str[i]>='A' && str[i]<='Z'){
        str[i] +=32;
    }
    else{
        str[i]= str[i];
    }
    
}

for(let i =0;i<str.length;i++){
    console.log(str[i]);
}