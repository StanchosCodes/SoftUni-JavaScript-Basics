function factorial(arg){

    let f = Number(arg);
    let result = 1;

    for(let i = 2; i <= f; i++){
        result *= i;
    }
    console.log(result);


}

factorial(8);