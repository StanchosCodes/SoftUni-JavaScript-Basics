function greaterNumber(arg1, arg2) {

    let a = Number(arg1);
    let b = Number(arg2);

    if (a >= b){
        console.log(a);
    }
    else if (b >= a){
        console.log(b);
    }
    
    }

    greaterNumber("-2", "2");