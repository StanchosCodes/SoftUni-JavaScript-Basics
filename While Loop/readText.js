function readText(input){

    let index = 0;

    while(input[index] !== "Stop"){
        console.log(input[index]);
        index++;
    }



}
// SECOND SOLVE
// while(true){
//    if (input[index] === "Stop"){
//      break;
//     }
//      else {
//    console.log(input[index]);
//      }
//      index++;
// }

readText(["Nakov", "Softuni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);