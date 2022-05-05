function godzillaVsKong(arg1, arg2, arg3){

    let budget = Number(arg1);
    let statists= Number(arg2);
    let clothing= Number(arg3);

    let decor = budget * 0.10;
    let totalMoneyForStatists = statists * clothing;

    if(statists > 150){
        totalMoneyForStatists = totalMoneyForStatists * 0.90;
    }

    let totalMoney = decor + totalMoneyForStatists;
    let spearMoney = Math.abs(totalMoney - budget);

    if(totalMoney <= budget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${spearMoney.toFixed(2)} leva left.`)
    }
    else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${spearMoney.toFixed(2)} leva more.`)
    }

}

godzillaVsKong("9587.88", "222", "55.68");