function tournamentOfChristmas(input){
    let days = Number(input[0]);
    let counterWin = 0;
    let counterLose = 0;
    let donation = 0;
    index = 1;

    for(let i = 1; i <= days; i++){
        let command = input[index++];

        let win = 0;
        let lose = 0;
        let dayDonation = 0;

        while (command !== "Finish"){
            let rate = input[index++];

            switch(rate){
                case "win":
                    dayDonation += 20;
                    counterWin++;
                    win++;
                    break;
                case "lose":
                    counterLose++;
                    lose++;
                    break;
            }
            command = input[index++];
        }
        if(win > lose){
            dayDonation *= 1.1;
            donation += dayDonation;
        }
        else{
            donation += dayDonation;
        }
    }
    if (counterWin > counterLose){
        donation *= 1.2;
        console.log(`You won the tournament! Total raised money: ${donation.toFixed(2)}`);
    }
    else if(counterWin < counterLose){
        console.log(`You lost the tournament! Total raised money: ${donation.toFixed(2)}`);
    }


}

tournamentOfChristmas(["3", "darts", "lose", "handball", "lose", "judo", "win", "Finish", "snooker", "lose",
"swimming", "lose", "squash", "lose", "table tennis", "win", "Finish", "volleyball", "win", "basketball",
"win", "Finish"]);