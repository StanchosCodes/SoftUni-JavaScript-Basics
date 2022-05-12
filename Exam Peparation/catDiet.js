function catDiet(arg1, arg2, arg3, arg4, arg5){
    let fatsInPersents = Number(arg1);
    let proteinsInPercents = Number(arg2);
    let carbohydratesInPercents = Number(arg3);
    let allCalories = Number(arg4);
    let waterInPercents = Number(arg5);

    let fatsInNumber = fatsInPersents / 100;
    let fats = allCalories * fatsInNumber;
    let fatsCalories = fats / 9;

    let proteinsInNumber = proteinsInPercents / 100;
    let proteins = allCalories * proteinsInNumber;
    let proteinsCalories = proteins / 4;

    let carbohydratesInNumber = carbohydratesInPercents / 100;
    let carbohydrates = allCalories * carbohydratesInNumber;
    let carbohydratesCalories = carbohydrates / 4;

    let foodWeight = fatsCalories + proteinsCalories + carbohydratesCalories;
    let foodCaloriesPerGram = allCalories / foodWeight;

    let water = waterInPercents / 100;
    let waterInNumber = 1 - water;

    console.log((foodCaloriesPerGram * waterInNumber).toFixed(4));
}

catDiet("40", "40", "20", "3000", "40");