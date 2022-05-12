function darts(input){
    let index = 0;
    let name = input[index];
    index++;
    let initialPoints = 301;
    let positiveShots = 0;
    let negativeShots = 0;
    let field = input[index];
    index++;
    let score = Number(input[index]);
    index++;
    while(initialPoints > 0){
        if(field === "Retire"){
            break;
        }
        if(field === "Single"){
            if(score <= initialPoints){
                initialPoints -= score;
                positiveShots++;
            }
            else{
                negativeShots++;
            }
        }
        else if(field === "Double"){
            score *= 2;
            if(score <= initialPoints){
                initialPoints -= score;
                positiveShots++;
            }
            else{
            negativeShots++;
        }
        }
        else if(field === "Triple"){
            score *= 3;
            if(score <= initialPoints){
                initialPoints -= score;
                positiveShots++;
            }
            else{
                negativeShots++;
            }
        }
        field = input[index];
        index++;
        score = Number(input[index]);
        index++;
    }
    if (field === "Retire"){
        console.log(`${name} retired after ${negativeShots} unsuccessful shots.`)
    }
    else{
        console.log(`${name} won the leg with ${positiveShots} shots.`)
    }
}
//darts(["Rob Cross", "Triple", 20, "Triple", 20, "Triple", 20, "Triple", 20, "Double", 20, "Triple", 20,
//"Double", 5, "Triple", 10, "Double", 6, "Retire"]);

//darts(["Stephen Bunting", "Triple", 20, "Triple", 20, "Triple", 20, "Triple", 20, "Triple", 20, "Triple", 20,
//"Double", 7, "Single", 12, "Double",1, "Single", 1]);

darts(["Michael van Gerwen", "Triple", 20, "Triple", 19, "Double", 10, "Single", 3, "Single", 1,
"Triple", 20, "Triple", 20, "Double", 20]);