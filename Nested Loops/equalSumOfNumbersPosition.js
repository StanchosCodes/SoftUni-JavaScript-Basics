function equalSumOfNumbersPosition (input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let buffer = "";

    for(let i = a; i <= b; i++){
        let textNum = "" + i;
        let sumEven = 0;
        let sumOdd = 0;
        for(let z = 0; z < textNum.length; z++){
            if(z % 2 === 0){
                sumEven += Number(textNum[z]);
            }
            else {
                sumOdd += Number(textNum[z]);
            }
        }
        if(sumEven === sumOdd){
            buffer += textNum + " ";
        }
    }
    console.log(buffer);

}

equalSumOfNumbersPosition(["100000", "100050"]);