function charityCampain(arg1, arg2, arg3, arg4, arg5) {

let dayCount = Number(arg1);
let confectionersCount = Number(arg2);
let cakesCount = Number(arg3);
let wafflesCount = Number(arg4);
let pancakesCount = Number(arg5);

let cakesPrice = cakesCount * 45;
let wafflesPrice = wafflesCount * 5.80;
let pancakesPrice = pancakesCount * 3.20;

let moneyFromAllConfectioners = confectionersCount * (cakesPrice + wafflesPrice + pancakesPrice);
let totalMoney = moneyFromAllConfectioners * dayCount;

totalMoney = totalMoney - totalMoney / 8;

console.log(totalMoney);

}

charityCampain("23", "8", "14", "30", "16");