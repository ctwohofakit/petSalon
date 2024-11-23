/*function displayPet() {
    
    let card = document.getElementById("pets");
    let result="";
    
    for(let i=0; i<pets.length; i++){
        console.log("myForLoop");
        let pet = pets[i];
        //display card script
        result += `
        <div id="${i}" class="card col-3 mx-2">
        <div class="card col-3 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${pet.name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${pet.breed}</h6>
            <p class="card-text">${pet.gender =="Male"? 'Male':'Female'},${pet.age} years</p>
            <button class="btn btn-danger" onclick="deletePet(${i});">Delete</button>
        </div>
        </div>`

    }

    card.innerHTML=result;
}
*/


//table view display
function displayRow(){
    let table = document.getElementById("pets");
    let result=`
        <table class="table table-sm table-dark">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Breed</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Service</th>
                <th scope="col">Type</th>
                <th scope="col">Color</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody id="petRows">
        </tbody>
        </table>
    `;
    table.innerHTML =result;

    let petRows=document.getElementById("petRows");
    let rows ="";
    for(let i=0; i<pets.length; i++){
        let pet = pets[i];
        rows+=`
            <table id="registerTable" class="table table-sm table-dark">
            <thead>
                <tr id="${i}">
                    <th scope="row">${i}</th>
                    <td>${pet.name}</td>
                    <td>${pet.breed}</td>
                    <td>${pet.age}</td>
                    <td>${pet.gender}</td>
                    <td>${pet.service}</td>
                    <td>${pet.type}</td>
                    <td>${pet.color}</td>
                    <td><button class="btn btn-danger"onclick="deletePet(${i});">Delete</button></td>
                </tr>
            </thead>
            </table>
        `;
    }
    petRows.innerHTML = rows;
    displayInfo()

}







function displayInfo(){
let totalDiv =  document.getElementById("total");
let groomingDiv = document.getElementById("gTotal");
let vaccinesDiv = document.getElementById("vTotal");
let nailDiv = document.getElementById("nTotal");

let grooming=0;
let vaccines=0;
let nails=0;


totalDiv.innerHTML= pets.length;// total pets

    for(let i=0; i<pets.length; i++){
        console.log(pets[i].service); 

        if(pets[i].service=="Grooming"){//grooming
            grooming++;
            groomingDiv.innerHTML=grooming;

        }else if(pets[i].service=="Vaccines") {//Vaccines
            vaccines++;
            vaccinesDiv.innerHTML=vaccines;

        }else{//nails
            nails++;
            nailDiv.innerHTML=nails;

        }
    }
    // Update with recalculated counts for delete pet
    totalDiv.innerHTML = pets.length;
    groomingDiv.innerHTML = grooming;
    vaccinesDiv.innerHTML = vaccines;
    nailDiv.innerHTML = nails;
}