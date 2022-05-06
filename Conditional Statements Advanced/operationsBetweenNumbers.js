function operationsBetweenNumbers(arg1, arg2, arg3){

    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let op = arg3;
    let result = 0;

    switch (op){
        case "+":
            result = n1 + n2;
            if (result % 2 === 0){
                console.log(`${n1} ${op} ${n2} = ${result} - even`);
            }
            else {
                console.log(`${n1} ${op} ${n2} = ${result} - odd`);
            }
            break;
            case "-":
            result = n1 - n2;
            if (result % 2 === 0){
                console.log(`${n1} ${op} ${n2} = ${result} - even`);
            }
            else {
                console.log(`${n1} ${op} ${n2} = ${result} - odd`);
            }
            break;
            case "*":
            result = n1 * n2;
            if (result % 2 === 0){
                console.log(`${n1} ${op} ${n2} = ${result} - even`);
            }
            else {
                console.log(`${n1} ${op} ${n2} = ${result} - odd`);
            }
            break;
            case "/":
                if (n2 === 0){
                    console.log(`Cannot divide ${n1} by zero`);
                }
                else {
                result = n1 / n2;
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
        }
            break;
            case "%":
                if (n2 === 0){
                    console.log(`Cannot divide ${n1} by zero`);
                }
                else {
                result = n1 % n2;
                console.log(`${n1} % ${n2} = ${result}`);
        }
            break;
    }


}

operationsBetweenNumbers("10", "3", "%");