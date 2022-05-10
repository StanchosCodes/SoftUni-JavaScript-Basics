function demo(){

    // OPERATOR BREAK; prekusva celiq cikul

    for(let i = 1; i < 10; i++){
        if(i === 5){
            break;
        }
        console.log(i);
    }

    // OPERATOR CONTINUE; prekusva samo opredelenoto zavurtane na cikula(preskacha go)

    for(let i = 1; i < 10; i++){
        if(i % 2 === 0){
            continue;
        }
        console.log(i);
    }

}

demo();