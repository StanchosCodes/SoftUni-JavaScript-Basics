function sumNumbers(input){

    let goal = Number(input[0]);
    let sum = 0;
    let index = 1;

    while(sum < goal){
        sum += Number(input[index]);
        index++;
    }

    console.log(sum);

}

sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);