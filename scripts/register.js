

let pets=[]


let petSalon ={
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip:"22900"
    }
}

//creating the pet
let pet1={
    name:"Scooby",
    age:80,
    gender:"Male",
    service:{
        body:"Bathing", 
        hair:"Brushing",
    },
    breed:"Boxer"
}

let pet2={
    name:"Scrappy",
    age:20,
    gender:"male",
    service:{
        body:"Bathing", 
        hair:"Brushing",
    },
    breed:"Golden Retriver"
}

let pet3={
    name:"Mocha",
    age:3,
    gender:"male",
    service:{
        body:"Bathing", 
        hair:"Brushing",
        nail:"Trimming",
    },
    breed:"Malti-poo"
}

pets.push(pet1,pet2,pet3);

function totalCount(){
    document.getElementById("nameResult").innerHTML = ""//clear previous result
    document.getElementById("amountResult").innerHTML = ""//clear previous result
    document.getElementById("avgAgeResult").innerHTML = ""//clear previous result

    //total count displaying
    document.getElementById("amountResult").innerHTML=`
    <br>
    Totally we have ${pets.length} pets.
    </br>
    `;
}

function displayPetNames(){
    document.getElementById("nameResult").innerHTML = ""//clear previous result
    document.getElementById("amountResult").innerHTML = ""//clear previous result
    document.getElementById("avgAgeResult").innerHTML = ""//clear previous result

    //loop function for search through array
    for(i=0; i<pets.length; i++){

    //name displaying
    document.getElementById("nameResult").innerHTML+=`
    <br>
    We have ${pets[i].name}
    <br>
    `;
    }
}

function ageAverage(){
    document.getElementById("nameResult").innerHTML = ""//clear previous result
    document.getElementById("amountResult").innerHTML = ""//clear previous result
    document.getElementById("avgAgeResult").innerHTML = ""//clear previous result

    //initial outside of loop to aviod reinitialization
    let averAge=0;

    //loop function for search through array, then caluate +=age/length
    for(i=0; i<pets.length; i++){
    averAge+=pets[i].age/pets.length;

    //age result displaying
    document.getElementById("avgAgeResult").innerHTML=`
    <br>
    Our dogs' average age is ${averAge.toFixed(2)} years old.
    <br>
    `;
}
}
