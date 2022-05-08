function minNumber(input){

    let index = 0;
    let n = Number(input[index]);
    index++;
    let minNum = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < n; i++){
        let num = Number(input[index]);
        index++;
        if(minNum > num){
            minNum = num;
        }
    }

    console.log(minNum);


}

minNumber(["2", "100", "99"]);