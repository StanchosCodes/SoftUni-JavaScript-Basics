function walking (input){
    let index = 0;
    let command = input[index];
    index++;
    let target = 10000;
    while(command !== "Going home"){
        let steps = Number(command);
        target -= steps;
    if(target <= 0){
        console.log(`Goal reached! Good job!
        ${Math.abs(target)} steps over the goal!`)
        break;
    }
    command = input[index];
    index++;
    }
    if (command === "Going home"){
        let steps = Number(input[index]);
        index++;
        target -= steps;
        if (target <= 0){
            console.log(`Goal reached! Good job!
            ${Math.abs(target)} steps over the goal!`);
        }
        else {
            console.log(`${target} more steps to reach goal.`);
        }
    }



}

walking(["1500", "300", "2500", "3000", "Going home", "200"]);