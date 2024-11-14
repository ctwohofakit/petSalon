var globalVarible="I am in global scope";

function myFunction(){
//this fn can access to the globaVariable

    let localVarible="I am in local scope";//this let can access to the localVariable, var will automatic make varible become global object

    console.log(localVarible);
    if (true){
        //this let can access to the blockVariable
        let blockVariable ="I am in a block scope";
        console.log(blockVariable);
    }
    console.log(localVarible);
}

myFunction();

//object, with class,attribute, property, characteristic


//name,age,gender
let student={
    name:"Kit",
    age:25,
    gender:"female"
}

console.log(student.name);

//dice
let d4Dice={
    color:"black",
    shape:"triangle",
    numberOnDice:4
}
console.log(d4Dice.color);