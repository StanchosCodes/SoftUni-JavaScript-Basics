function worldSwimmingRecord(arg1, arg2, arg3){

    let recordInSec = Number(arg1);
    let distanceInM = Number(arg2);
    let timeInSecForOneM = Number(arg3);

    let totalTime = distanceInM * timeInSecForOneM;
    let resistance = Math.floor(distanceInM / 15) * 12.5;
        totalTime = totalTime + resistance;

        if(totalTime < recordInSec){
            console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
        }
        else{
            let diff = Math.abs(totalTime - recordInSec);
            console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
        }


}

worldSwimmingRecord("55555.67", "3017", "5.03");