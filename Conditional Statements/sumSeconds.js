function sumSeconds(arg1, arg2, arg3){

    let a = Number(arg1);
    let b = Number(arg2);
    let c = Number(arg3);
    
    let sumSec = a + b + c;
    let min = parseInt(sumSec / 60);
    let sec = sumSec % 60;

    if(sec < 10){
        console.log(`${min}:0${sec}`);
    }
    else{
        console.log(`${min}:${sec}`);
    }

}
sumSeconds("50", "50", "49");