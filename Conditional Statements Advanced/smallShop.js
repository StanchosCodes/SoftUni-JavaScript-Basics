function smallShop(product, town, quantity){

    let price = 0;

    if (town === "Sofia"){
        if (product === "coffee"){
           price = quantity * 0.50;
           console.log(price);
        }
        else if (product === "water"){
            price = quantity * 0.80;
           console.log(price);
        }
        else if (product === "beer"){
            price = quantity * 1.20;
           console.log(price);
        }
    else if (product === "sweets"){
        price = quantity * 1.45;
       console.log(price);
    }
    else if (product === "peanuts"){
        price = quantity * 1.60;
       console.log(price);
    }
}
else if (town === "Plovdiv"){
    if (product === "coffee"){
        price = quantity * 0.40;
        console.log(price);
     }
     else if (product === "water"){
         price = quantity * 0.70;
        console.log(price);
     }
     else if (product === "beer"){
         price = quantity * 1.15;
        console.log(price);
     }
 else if (product === "sweets"){
     price = quantity * 1.30;
    console.log(price);
 }
 else if (product === "peanuts"){
     price = quantity * 1.50;
    console.log(price);
 }
} 
else if (town === "Varna"){
    if (product === "coffee"){
        price = quantity * 0.45;
        console.log(price);
     }
     else if (product === "water"){
         price = quantity * 0.70;
        console.log(price);
     }
     else if (product === "beer"){
         price = quantity * 1.10;
        console.log(price);
     }
 else if (product === "sweets"){
     price = quantity * 1.35;
    console.log(price);
 }
 else if (product === "peanuts"){
     price = quantity * 1.55;
    console.log(price);
 }
}


}
smallShop("sweets", "Varna", 1);