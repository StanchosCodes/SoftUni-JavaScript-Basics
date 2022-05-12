function finalCompetition(arg1, arg2, arg3, arg4){
    let dancers = Number(arg1);
    let points = Number(arg2);
    let season = arg3;
    let place = arg4;
    let price = 0;

    if(place === "Bulgaria"){
            price = points * dancers;

        if(season === "winter"){
            price *= 0.92;
        }
        else if(season === "summer"){
            price *= 0.95;
        }
    }
    else if(place === "Abroad"){
            price = points * dancers;
        let priceAbroad = price / 2;
            price += priceAbroad;

        if(season === "winter"){
            price *= 0.85;
        }
        else if(season === "summer"){
            price *= 0.90;
        }
    }

    let moneyForCharity = price * 0.75;
    let leftMoney = price - moneyForCharity;
    let moneyForDancers = leftMoney / dancers;

    console.log(`Charity - ${moneyForCharity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyForDancers.toFixed(2)}`);


}

finalCompetition(25, 98, "winter", "Bulgaria");