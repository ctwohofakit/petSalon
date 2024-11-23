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
function Pet(name, age, gender, breed, service, type, color){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
    this.color=color;
}

//validation fucntion
function isValid(pet){
    let validation =true;
    let inputName= document.getElementById("txtName");
    let inputAge= document.getElementById("txtAge");
    let inputGender= document.getElementById("txtGender");
    let inputBreed= document.getElementById("txtBreed");
    let inputService= document.getElementById("txtService");
    let inputType= document.getElementById("txtType");
    let inputColor= document.getElementById("txtColor");

    if(pet.name == ""){
        validation = false;
        inputName.classList.add("error");
    }else{inputName.classList.remove("error");

    }

    if(pet.age == ""){
        validation = false;
        inputAge.classList.add("error");
    }else{inputAge.classList.remove("error");
    }
    if(pet.gender == ""){
        validation = false;
        inputGender.classList.add("error");
    }else{inputGender.classList.remove("error");
    }
    if(pet.breed == ""){
        validation = false;
        inputBreed.classList.add("error");
    }else{inputBreed.classList.remove("error");
    }
    if(pet.service == ""){
        validation = false;
        inputService.classList.add("error");
    }else{inputService.classList.remove("error");
    }
    if(pet.type == ""){
        validation = false;
        inputType.classList.add("error");
    }else{inputType.classList.remove("error");
    }
    if(pet.color == ""){
        validation = false;
        inputColor.classList.add("error");
    }else{inputColor.classList.remove("error");
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
    let inputColor=document.getElementById("txtColor").value;
    console.log(inputName,inputAge,inputGender,inputBreed,inputService, inputType, inputColor);

    //create the obj
    let newPet = new Pet (inputName,inputAge,inputGender,inputBreed,inputService, inputType, inputColor);
    if (isValid(newPet)==true){
    
        //push the obj to the array
        pets.push(newPet);

        //display the obj on the console
        console.log(pets);

        //displayPet();
        //displayRow instead of display card
        displayRow();
    

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
    document.getElementById("txtColor").value="";
}



//delete fucntion
function deletePet(petId){
    console.log("Delete pets"+petId);
    document.getElementById(petId).remove;
    pets.splice(petId,1);//start point
    
    //displayPet();
    displayRow();
    displayInfo(petId);
}






function init(){
    //execution code should be inside of this fucntion
    let pet1= new Pet("Scooby",15,"Male","Boxer","Grooming","Dog","Brown");
    let pet2= new Pet("Mocha",2,"Male","Maltipoo","Grooming", "Dog","Gray");
    let pet3= new Pet("Snowball",12,"Female","Mixed","Vaccines","Cat","Black");
    let pet4= new Pet("ball",10,"Male","Mixed","Nails","Cat","White");
    pets.push(pet1,pet2,pet3,pet4);

    //displayPet();
    displayRow();

}

window.onload=init;//wait to render the HTML