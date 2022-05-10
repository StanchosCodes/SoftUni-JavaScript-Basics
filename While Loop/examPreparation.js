function examPreparation(input){

let index = 0;
let countNegativeGrade = Number(input[index]);
index++;
let command = input[index];
index++;
let taskCount = 0;
let sumOfGrades = 0;
let negativeGradeCounter = 0;
let isEnough = true;
let taskName = "";
while(command !== "Enough"){
       taskName = command;
    let grade = Number(input[index]);
    index++
    if(grade <= 4){
        negativeGradeCounter++;
    }
    if(negativeGradeCounter === countNegativeGrade){
        console.log(`You need a break, ${negativeGradeCounter} poor grades.`)
        isEnough = false;
        break;
    }

    taskCount++;
    sumOfGrades += grade;
    
    command = input[index];
    index++;

}

if(isEnough){
 avgScore = sumOfGrades / taskCount;
 console.log(`Average score: ${avgScore.toFixed(2)}`);
 console.log(`Number of problems: ${taskCount}`);
 console.log(`Last problem: ${taskName}`);
}

}

examPreparation(["3", "Money", "6", "Story", "4", "SpringTime", "5", "Bus", "6", "Enough"])
//examPreparation(["2", "Income", "3", "GameInfo", "6", "Best Player", "4"]);