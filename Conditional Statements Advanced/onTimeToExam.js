function onTimeToExam(arg1, arg2 ,arg3 ,arg4){

    let examHour = Number(arg1);
    let examMin = Number(arg2);
    let arriveHour = Number(arg3);
    let arriveMin = Number(arg4);

    let examTimeInMin = examHour * 60 + examMin;
    let arriveTimeInMin = arriveHour * 60 + arriveMin;

    if (examTimeInMin - arriveTimeInMin <= 30 && examTimeInMin - arriveTimeInMin >= 0){
        console.log("On time");
        if(examTimeInMin - arriveTimeInMin !== 0){
            console.log(`${examTimeInMin - arriveTimeInMin} minutes before the start`)
        }
    }
        else if (examTimeInMin - arriveTimeInMin > 30){
            console.log("Early");
            if (examTimeInMin - arriveTimeInMin < 60){
                console.log(`${examTimeInMin - arriveTimeInMin} minutes before the start`);
            }
            else{
                let diff = examTimeInMin - arriveTimeInMin;
                let h = Math.floor(diff/60);
                let m = diff % 60;
                if (m < 10){
                console.log(`${h}:0${m} hours before the start`);
                }
                else{
                    console.log(`${h}:${m} hours before the start`);
                }
            }
        }
        else {
            console.log("Late");
            let diff = Math.abs(examTimeInMin - arriveTimeInMin);
            let h = Math.floor(diff/60);
            let m = diff % 60;
            if (diff < 60){
                console.log(`${diff} minutes after the start`);
            }
            else {
                if (m < 10){
                    console.log(`${h}:0${m} hours after the start`);
                }
                else {
                    console.log(`${h}:${m} hours after the start`);
                }
            }
        }
}
onTimeToExam("9", "00", "10", "05");