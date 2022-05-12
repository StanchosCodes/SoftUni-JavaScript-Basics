function rabbitGame() {

    let points = 0;
    let pointsFromCarrot = 20;

    for (let row = 1; row <= 3; row++) {
        for (let col = 1; col <= 5; col++) {
        
            if (row === 1 && col === 3){
                points += pointsFromCarrot;
            }
            else if (row === 2 && col === 5){
                points += pointsFromCarrot;
            }
            else if (row === 3 && col === 2){
                points += pointsFromCarrot;
            }
            else{
            points++;
            }
            if (row === 2 && col === 4){
                points--;
                break;
            }
            if (row === 2 && col === 2){
                points--;
                continue;
            }
            if (row === 3 && col === 4){
                points--;
                continue;
            }
        }
    }
    console.log(points);

}

rabbitGame();