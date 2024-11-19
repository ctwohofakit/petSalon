function displayPet() {
    
    let card = document.getElementById("pets");
    let result="";
    
    for(let i=0; i<pets.length; i++){
        console.log("myForLoop");
        let pet = pets[i];
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