function salary(input){

    index = 0;
    let openTabs = Number(input[index]);
    index++
    let finalSalary = Number(input[index]);
    index++;

    for(let i = 0; i < openTabs; i++){
        let name = input[index];
        index++;
        if(name === "Facebook"){
            finalSalary -= 150;
        }
        else if(name === "Instagram"){
            finalSalary -= 100;
        }
        else if(name === "Reddit"){
            finalSalary -= 50;
        }
    }
    if(finalSalary > 0){
    console.log(finalSalary);
    }
    else {
        console.log("You have lost your salary.")
    }


}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);