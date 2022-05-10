function oldBooks(input){

    let index = 0;
    let favBook = input[index];
    index++;
    let command = input[index];
    index++;
    let counter = 0;
    let isFound = false;
    
    while(command !== "No More Books"){
        let bookName = command;
        if(favBook === bookName){
            isFound = true;
            console.log(`You checked ${counter} books and found it.`)
            break;
        }
        counter++;
        command = input[index];
        index++;

    }

    if(!isFound){
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }

}

//oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);