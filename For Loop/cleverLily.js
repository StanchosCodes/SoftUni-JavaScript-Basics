function cleverLily(arg1, arg2 ,arg3){

    let age = Number(arg1);
    let price = Number(arg2);
    let toyPrice = Number(arg3);

    let savedSum = 0;
    let toysCounter = 0;
    let money = 10;

    for (let i = 1; i <= age; i ++){
        if (i % 2 === 0){
            savedSum += (money - 1);
            money += 10;
        }
        else {
            toysCounter++;
        }
        
    }
    let totalMoneyFromToys = toysCounter * toyPrice;
        savedSum += totalMoneyFromToys;

        if (savedSum >= price){
            console.log(`Yes! ${(savedSum - price).toFixed(2)}`);
        }
        else {
            console.log(`No! ${Math.abs(savedSum - price).toFixed(2)}`);
        }



}

cleverLily("21", "1570.98", "3");