function cinema(arg1, arg2, arg3){

    let type = arg1;
    let row = Number(arg2);
    let col = Number(arg3);

    let result = 0;

    switch(type){
        case "Premiere":
        result = row * col * 12;
        console.log(`${result.toFixed(2)} leva`);    
        ;break;
        case "Normal":
        result = row * col * 7.5;
        console.log(`${result.toFixed(2)} leva`);
        ;break;
        case "Discount":
        result = row * col * 5;
        console.log(`${result.toFixed(2)} leva`);    
        ;break;    }


}
cinema("Discount", "12", "30");