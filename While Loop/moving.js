function moving(input){

    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let height = Number(input[2]);
    let freeSpace = width * lenght * height;

    let sum = 0;
    let index = 3;
    let command = input[index];

    while(command !== "Done"){
        let currentCubic = Number(command);
        sum += currentCubic;
        if (sum > freeSpace){
            console.log(`No more free space! You need ${sum - freeSpace} Cubic meters more.`)
            break;
        }

        command = input[++index];
        

    }

    if (command === "Done"){
        console.log(`${freeSpace - sum} Cubic meters left.`)
    }
    


}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);