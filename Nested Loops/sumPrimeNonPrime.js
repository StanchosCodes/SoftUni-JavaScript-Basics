function sumPrimeNonPrime(input){
    let index = 0;
    let command = input[index];
    index++;
    let sumPrimeNumber = 0;
    let sumNonPrimeNumber = 0;

    while(command !== "stop"){
        let number = Number(command);
        if(number < 0){
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;
        if(number === 1){
            sumPrimeNumber += number;
            command = input[index];
            index++;
            continue;
        }
        for(let i = 2; i <= Math.sqrt(number); i++){
            if(number % i === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            sumPrimeNumber += number;
        }
        else {
            sumNonPrimeNumber += number;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumber}`);


}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);