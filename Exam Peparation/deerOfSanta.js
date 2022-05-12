function deerOfSanta(arg1, arg2, arg3, arg4, arg5){
    let days = Number(arg1);
    let food = Number(arg2);
    let deer1 = Number(arg3);
    let deer2 = Number(arg4);
    let deer3 = Number(arg5);

    let foodForDeer1 = deer1 * days;
    let foodForDeer2 = deer2 * days;
    let foodForDeer3 = deer3 * days;

    let sum = foodForDeer1 + foodForDeer2 + foodForDeer3;

    if(sum <= food){
        console.log(`${Math.floor(food - sum)} kilos of food left.`);
    }
    else{
        console.log(`${Math.ceil(sum - food)} more kilos of food are needed.`)
    }

}

deerOfSanta(5, 10, 2.1, 0.8, 11);