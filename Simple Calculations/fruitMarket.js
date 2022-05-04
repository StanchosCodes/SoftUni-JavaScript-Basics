function fruitMarket(arg1, arg2, arg3, arg4, arg5) {

let strawberriesPrice = Number(arg1);
let bananasInKg = Number(arg2);
let orangesInKg = Number(arg3);
let raspberriesInKg = Number(arg4);
let strawberriesInKg = Number(arg5);

let raspberriesPrice = strawberriesPrice / 2;
let orangesPrice = raspberriesPrice * 0.60;
let bananasPrice = raspberriesPrice * 0.20;

let strawberriesMoney = strawberriesPrice * strawberriesInKg;
let raspberriesMoney = raspberriesPrice * raspberriesInKg;
let orangesMoney = orangesPrice * orangesInKg;
let bananasMoney = bananasPrice * bananasInKg;

let total = strawberriesMoney + raspberriesMoney + orangesMoney + bananasMoney;

console.log(total);

}

fruitMarket("48", "10", "3.3", "6.5", "1.7");