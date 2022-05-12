function basketballEquipment(input){
    let fee = Number(input);
    let sneakers = fee * 0.6;
    let kit = sneakers * 0.8;
    let ball = kit / 4;
    let accesories = ball / 5;

    let sum = fee + sneakers + kit + ball + accesories
    console.log(sum.toFixed(2));


}

basketballEquipment(320);