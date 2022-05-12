function easterTrip(arg1, arg2, arg3){
    let destination = arg1;
    let dates = arg2;
    let nights = Number(arg3);

    let price = 0;

    if (destination === "France"){
        if(dates === "21-23"){
            price = nights * 30;
        }
        else if(dates === "24-27"){
            price = nights * 35;
        }
        else if(dates === "28-31"){
            price = nights * 40;
        }
    }
    else if(destination === "Italy"){
        if(dates === "21-23"){
            price = nights * 28;
        }
        else if(dates === "24-27"){
            price = nights * 32;
        }
        else if(dates === "28-31"){
            price = nights * 39;
        }
    }
    else if(destination === "Germany"){
        if(dates === "21-23"){
            price = nights * 32;
        }
        else if(dates === "24-27"){
            price = nights * 37;
        }
        else if(dates === "28-31"){
            price = nights * 43;
        }
    }
    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);

}

easterTrip("Germany", "24-27", "5");