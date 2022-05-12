function easterDecoration(input){
    let clients = Number(input[0]);
    let index = 1;
    let average = 0;

    for(i = 1; i <= clients; i++){
        let command = input[index++];
        let price = 0;
        let count = 0;
        let stuff = 0;

        while(command !== "Finish"){
            if (command === "basket"){
                price += 1.50;
                count++;
                stuff++;
            }
            else if (command === "wreath"){
                price += 3.80;
                count++;
                stuff++;
            }
            else if (command === "chocolate bunny"){
                price += 7;
                count++;
                stuff++;
            }
            command = input[index++];
        }
        if(count % 2 === 0){
            price *= 0.80;
        }
        average += price;
        console.log(`You purchased ${stuff} items for ${price.toFixed(2)} leva.`);
    }
        console.log(`Average bill per client is: ${(average / clients).toFixed(2)} leva.`);
}

easterDecoration([2, "basket", "wreath", "chocolate bunny","Finish", "wreath", "chocolate bunny", "Finish"]);