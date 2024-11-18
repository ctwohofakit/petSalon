let pets=[]
//object literal
let petSalon ={
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip:"22900"
    }
}

//object constructor
function Pet(name, age, gender, breed, service, type){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
}


//register fucntion
function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;
    let inputType=document.getElementById("txtType").value;
    console.log(inputName,inputAge,inputGender,inputBreed,inputService, inputType);

    //create the obj
    let newPet = new Pet (inputName,inputAge,inputGender,inputBreed,inputService, inputType);

    //push the obj to the array
    pets.push(newPet);
    //display the obj on the console
    console.log(pets);

    //clear an input: document.getElementById("txtName").value="";


}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
    document.getElementById("txtType").value="";
}



//validation fucntion
/**/



function init(){
    //execution code should be inside of this fucntion
    let pet1= new Pet("Scooby",99,"Male","Boxer","Grooming","Dog");
    let pet2= new Pet("Mocha",2,"Male","Maltipoo","Grooming", "Dog");
    let pet3= new Pet("Snowball",12,"Female","Mixed","Vaccines","Cat");

    console.log(pet1);
    console.log(pet2);
    console.log(pet3);

}

window.onload=init;//wait to render the HTML