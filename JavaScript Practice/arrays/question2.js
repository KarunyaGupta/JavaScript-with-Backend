// for a given arra with prices of 5 items [250,645,300,900,50]
// all items have an offer of 10% off on them change the array to store the final price 

let actual_price=[250,645,300,900,50];

let offerPrice;
for(let i=0;i<actual_price.length;i++){
    offerPrice = actual_price[i]-actual_price[i]/10;
    console.log(offerPrice);
}