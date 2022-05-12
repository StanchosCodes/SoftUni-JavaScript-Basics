function computerFirm(input){
    let computerCount = Number(input[0]);
    index = 1;
    let computerSalesAndRate = Number(input[index]);
    index++;
    let sum = 0;
    let rates = 0;

    for(let i = 1; i <= computerCount; i++){
        let rate = computerSalesAndRate % 10;
        let probSales = Math.floor(computerSalesAndRate / 10);
        let sales = 0;

        if(rate === 2){
            sales = probSales * 0;
        }
        else if (rate === 3){
            sales = probSales / 2;
        }
        else if(rate === 4){
            sales = probSales * 0.70;
        }
        else if(rate === 5){
            sales = probSales * 0.85;
        }
        else if(rate === 6){
            sales = probSales;
        }
        rates += rate;
        sum += sales;
        computerSalesAndRate = input[index];
        index++;
    }

        console.log(sum.toFixed(2));
        console.log((rates / computerCount).toFixed(2))
}

computerFirm([5, 122, 156, 202, 214, 185]);