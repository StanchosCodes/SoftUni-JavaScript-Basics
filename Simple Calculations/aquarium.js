function aquarium(arg1, arg2, arg3, arg4){

let l = Number(arg1);
let w = Number(arg2);
let h = Number(arg3);
let precentage = Number(arg4);

let volume = l * w * h;
let volumeInLitres = volume * 0.001;
let convertedPrecentage = precentage * 0.01;
let result = volumeInLitres * (1 - convertedPrecentage);

console.log(result)

}

aquarium("85", "75", "47", "17")