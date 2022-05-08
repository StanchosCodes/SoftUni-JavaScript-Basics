function leapYear (arg1, arg2){

    let leapYear = Number(arg1);
    let secYear = Number(arg2);

    for(let i = leapYear; i <= secYear; i += 4){
        console.log(i);
    }

}

leapYear ("2000", "2011");