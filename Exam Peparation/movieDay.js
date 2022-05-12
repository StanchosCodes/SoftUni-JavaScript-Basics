function movieDay(arg1, arg2, arg3){
    let shootTime = Number(arg1);
    let countScenes = Number(arg2);
    let timeScenes = Number(arg3);

    let timePrepShoot = shootTime * 0.15;
    let timeForShoot = countScenes * timeScenes;
    let neededTime = timePrepShoot + timeForShoot;

    if(neededTime >= shootTime){
        console.log(`Time is up! To complete the movie you need ${Math.round(neededTime - shootTime)} minutes.`)
    }
    else{
        console.log(`You managed to finish the movie on time! You have ${Math.round(shootTime - neededTime)} minutes left!`)
    }
}

movieDay(60, 15 ,3);