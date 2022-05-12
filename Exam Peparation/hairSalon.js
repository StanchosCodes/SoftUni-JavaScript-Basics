function hairSalon(input) {
    let index = 0;
    let point = Number(input[index]);
    index++;
    let command = "";
    let sum = 0;
    command = input[index];
    index++;

    while (command !== "closed") {
        if (sum < point) {
            if (command === "haircut") {
                command = input[index];
                index++;
                if (command === "mens") {
                    sum += 15;
                }
                else if (command === "ladies") {
                    sum += 20;
                }
                else if (command === "kids") {
                    sum += 10;
                }
            }
            else if (command === "color") {
                command = input[index];
                index++;
                if (command === "touch up") {
                    sum += 20;
                }
                else if (command === "full color") {
                    sum += 30;
                }
            }
        }
        else if(sum >= point){
            console.log("You have reached your target for the day!");
            break;
        }
        command = input[index];
        index++;
        if(command === "closed"){
        console.log(`Target not reached! You need ${point - sum}lv. more.`);
        break;
        }
    }
    console.log(`Earned money: ${sum}lv.`);

}

hairSalon([50, "color", "full color", "haircut", "ladies"]);