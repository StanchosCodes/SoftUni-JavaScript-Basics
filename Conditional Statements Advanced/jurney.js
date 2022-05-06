function jurney(arg1, arg2){

    let budget = Number(arg1);
    let type = arg2;
    let result = 0

    if (budget <= 100){
        console.log("Somewhere in Bulgaria");
        switch(type){
            case "summer":
                result = budget * 0.30;
                console.log(`Camp - ${result.toFixed(2)}`);
                break;
            case "winter":
                result = budget * 0.70;
                console.log(`Hotel - ${result.toFixed(2)}`)
                break;
        }
    }
    else if (budget <= 1000){
        console.log("Somewhere in Balkans");
        switch(type){
            case "summer":
                result = budget * 0.40;
                console.log(`Camp - ${result.toFixed(2)}`);
                break;
            case "winter":
                result = budget * 0.80;
                console.log(`Hotel - ${result.toFixed(2)}`)
                break;
        }
    }
    else {
        console.log("Somewhere in Europe");
        result = budget * 0.90;
        console.log(`Hotel - ${result.toFixed(2)}`)
    }

}
jurney("1500", "summer");