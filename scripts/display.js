/*function displayPet() {
    
    let card = document.getElementById("pets");
    let result="";
    
    for(let i=0; i<pets.length; i++){
        console.log("myForLoop");
        let pet = pets[i];
        //display card script
        result += `
        <div class="card col-3 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${pet.name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${pet.breed}</h6>
            <p class="card-text">${pet.gender =="Male"? 'Male':'Female'},${pet.age} years</p>
            <button class="btn btn-danger">Delete</button>
        </div>
        </div>`

    }

    card.innerHTML=result;
}
*/


//table view display
function displayRow(){
    let card = document.getElementById("pets");
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
            </tr>
        </thead>
        <tbody id="petRows">
        </tbody>
        </table>
    `;
    card.innerHTML =result;

    let petRows=document.getElementById("petRows");
    let rows ="";
    for(let i=0; i<pets.length; i++){
        let pet = pets[i];
        rows+=`
            <tr>
                <th scope="row">${i}</th>
                <td>${pet.name}</td>
                <td>${pet.breed}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.service}</td>
                <td>${pet.type}</td>
            </tr>
        `;
    }
    petRows.innerHTML = rows;

}