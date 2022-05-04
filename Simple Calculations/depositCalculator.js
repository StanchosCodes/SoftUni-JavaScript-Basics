function depositCalculator(arg1, arg2, arg3) {

let depositSum = Number(arg1);
let depositTerm = Number(arg2);
let annualPrecentage = Number(arg3);

let sum = depositSum + depositTerm * ( (depositSum * ( annualPrecentage * 0.01 ) ) / 12);

console.log(sum);

}

depositCalculator("200", "3", "5.7");