function hotelRoom(arg1, arg2){

    let month = arg1;
    let nights = Number(arg2);
    let apartmentMoney = 0;
    let studioMoney = 0;

    if (month === "May" || month === "October"){
        apartmentMoney = nights * 65;
        studioMoney = nights * 50;
        if (nights > 7 && nights <= 14){
            studioMoney = studioMoney * 0.95;
        }
        else if (nights > 14){
            studioMoney = studioMoney * 0.70;
            apartmentMoney = apartmentMoney * 0.90;
        }
    }
    else if (month === "June" || month === "September"){
        apartmentMoney = nights * 68.70;
        studioMoney = nights * 75.20;
        if(nights > 14){
            studioMoney = studioMoney * 0.80;
            apartmentMoney = apartmentMoney * 0.90;
        }
    }
    else if (month === "July" || month === "August"){
        studioMoney = nights * 76;
        apartmentMoney = nights * 77;
        if (nights > 14){
            apartmentMoney = apartmentMoney * 0.90;
        }
    }
    console.log(`Apartment: ${apartmentMoney.toFixed(2)} lv.`);
    console.log(`Studio: ${studioMoney.toFixed(2)} lv.`);


}

hotelRoom("August", "20");