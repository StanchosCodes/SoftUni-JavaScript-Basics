function uniquePinCodes(arg1, arg2, arg3){
    let firstNum = Number(arg1);
    let secondNum = Number(arg2);
    let thirdNum = Number(arg3);

    for (let a = 1; a <= firstNum; a++){
        if (a % 2 === 0){
            console.log(a);
        }
    }
    for (let b = 1; b <= secondNum; b++ ){
        if(b >= 2 && b <= 7){
            let num = 1;
            num++;
            for(b = num; b <= Math.sqrt(num); b++){
                if(num % b === 0){
                console.log(b);
                }
            }
        }
    }




}

uniquePinCodes(3, 5, 5);