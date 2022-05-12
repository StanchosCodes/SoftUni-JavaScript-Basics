function easterEggs(input){
    let eggs = Number(input[0]);
    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs  = 0;
    let greenEggs = 0;
    let colorOfMaxEggs = "";
    let maxEggs = -1;

    for(let i = 1; i <= eggs; i++){
        let color = input[i];

        if(color === "red"){
            redEggs++;
            if(redEggs > maxEggs){
                maxEggs = redEggs;
                colorOfMaxEggs = "red";
            }
        }
        else if(color === "orange"){
            orangeEggs++;
            if(orangeEggs > maxEggs){
                maxEggs = orangeEggs;
                colorOfMaxEggs = "orange";
            }
        }
        else if(color === "blue"){
            blueEggs++;
            if(blueEggs > maxEggs){
                maxEggs = blueEggs;
                colorOfMaxEggs = "blue";
            }
        }
        else if(color === "green"){
            greenEggs++;
            if(greenEggs > maxEggs){
                maxEggs = greenEggs;
                colorOfMaxEggs = "green";
            }
        }
    }
    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);
    console.log(`Max eggs: ${maxEggs} -> ${colorOfMaxEggs}`);

}

easterEggs([7, "orange", "blue", "green", "green", "blue", "red", "green"])