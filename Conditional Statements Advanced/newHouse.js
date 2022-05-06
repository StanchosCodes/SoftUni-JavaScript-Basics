function newHouse(arg1, arg2, arg3){

    let type = arg1;
    let count = Number(arg2);
    let budget = Number(arg3);
    let result = 0

    switch (type){
        case "Roses":
            result = count * 5;
            if (count > 80){
                result = result * 0.90;
            }
        ;break;
        case "Dahlias":
        result = count * 3.80;
        if (count > 90){
            result = result * 0.85;
        }    
        ;break;
        case "Tulips":
            result = count * 2.80;
            if (count > 80){
                result = result * 0.85;
            }     
        ;break;
        case "Narcissus":
            result = count * 3;
            if (count < 120){
                result = result * 1.15;
            }    
        ;break;
        case "Gladiolus":
             result = count * 2.50;
             if (count < 80){
                 result = result * 1.20;
             }    
        ;break;
    }
    let diff = Math.abs(budget - result);
    if (result <= budget){
    
        console.log(`Hey, you have a great garden with ${count} ${type} and ${diff.toFixed(2)} leva left.`)

    }
    else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }

}

newHouse("Tulips", "88", "260");