function traintheTrainers(input){
    let index = 0;
    let n = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let counter = 0;
    let sumGrade = 0;
    while(command !== "Finish"){
        counter++;
        let name = command;
        let tempSumGrade = 0;
        for(let i = 0; i < n; i++){
            let grade = Number(input[index]);
            index++;
            tempSumGrade += grade;
        }
        let tempAvgGrade = tempSumGrade / n;
        sumGrade += tempAvgGrade;
        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);
        
        command = input[index];
        index++;
    }
    let avgGrade = sumGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);


}

traintheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);