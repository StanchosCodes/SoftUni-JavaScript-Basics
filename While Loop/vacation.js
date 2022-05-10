function vacation(input){

let index = 0;
let moneyForJurney = Number(input[index]);
index++;
let money = Number(input[index]);
index++;
let dayCounter = 0;
let counterSpend = 0;
while(money < moneyForJurney){
    let action = input[index];
    index++;
    let sum = Number(input[index]);
    index++;

    switch(action){
        case "spend":
            counterSpend++;
            money -= sum;
            if(money < 0){
                money = 0;
            }
            break;
        case "save":
            money += sum;
            counterSpend = 0;
            break;
    }
    dayCounter++;
    if(counterSpend === 5){
        break;
    }
    
}
if (money >= moneyForJurney){
    console.log(`You saved the money for ${dayCounter} days.`)
}
else {
    console.log("You can't save the money.");
    console.log(dayCounter);
}

}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);