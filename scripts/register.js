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

//validation fucntion
function isValid(pet){
    let validation =true;
    let inputName= document.getElementById("txtName");
    let inputAge= document.getElementById("txtAge");


    if(pet.name == ""){
        validation = false;
        inputName.classList.add("error");

    }
    if(pet.age == ""){
        validation = false;
        inputAge.classList.add("error");
    }
    return validation;
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
    if (isValid(newPet)==true){
    
        //push the obj to the array
        pets.push(newPet);
        //display the obj on the console
        console.log(pets);
        displayPet();

        //clear
        clearForm();
    }

}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
    document.getElementById("txtType").value="";
}







function init(){
    //execution code should be inside of this fucntion
    let pet1= new Pet("Scooby",99,"Male","Boxer","Grooming","Dog");
    let pet2= new Pet("Mocha",2,"Male","Maltipoo","Grooming", "Dog");
    let pet3= new Pet("Snowball",12,"Female","Mixed","Vaccines","Cat");

    pets.push(pet1,pet2,pet3);

    displayPet();

}

window.onload=init;//wait to render the HTML