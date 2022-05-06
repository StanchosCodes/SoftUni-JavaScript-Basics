function skiTrip(days, type, fb){

    let daysForRelax = Number(days);
    let roomType = type;
    let feedback = fb;
    let nights = daysForRelax - 1;
    let totalPrice = 0;

    if (roomType === "room for one person"){
        totalPrice = nights * 18;
    }
    else if (roomType === "apartment"){
        if (nights < 10){
            totalPrice = nights * 25 * 0.7;
        }
        else if (nights >= 10 && nights <= 15){
            totalPrice = nights * 25 * 0.65;
    }
    else if (nights > 15){
        totalPrice = nights * 25 * 0.5;
    }
}
    else if (roomType === "president apartment"){
        if (nights < 10){
            totalPrice = nights * 35 * 0.9;
        }
        else if (nights >= 10 && nights <= 15){
            totalPrice = nights * 35 * 0.85;
    }
    else if (nights > 15){
        totalPrice = nights * 35 * 0.8;
    }
    }

    if (feedback === "positive"){
        totalPrice = totalPrice * 1.25;
    }
    else {
        totalPrice = totalPrice * 0.9;
    }
    console.log(totalPrice.toFixed(2));


}
skiTrip("30", "president apartment", "negative");