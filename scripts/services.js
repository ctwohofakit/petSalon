let inputDes=$("#txtDescription");
let inputPrice=$("#txtPrice");


//constructor Service
function Service(description, price) {
    this.description = description;
    this.price = price;
}



//validations
function validService(service){
    let isValidDescription = true;
    let isValidPrice = true;
    
    if(service.description == "") {
        isValidDescription = false;
        $("#txtDescription").addClass("error");
        $("#descRequiredDes").show();
    }else {
        isValidDescription = true
        $("#txtDescription"). removeClass("error");
        $("#descRequiredDes").hide();
    }

    if(service.price == "") {
        isValidPrice = false;
        $("#txtPrice").addClass("error");
        $("#descRequiredPrice").show();
    }else {
        isValidPrice = true
        $("#txtPrice"). removeClass("error");
        $("#descRequiredPrice").hide();
    }

    // service.price validation
    
    return isValidDescription && isValidPrice;

}

//use jQuery
function register(){
    let newService= new Service(inputDes.val(), inputPrice.val());
    if (validService(newService)){
        save(newService);

        $("input").val(""); //clear the form-Jquery
        //displayServices();

    }

}



function clearSerForm(){
    $("#txtDescription").val("");
    $("#txtPrice").val("");
     //clear the form

}


//hook events
function init(){

    //displayServices();
    $("#registerServices").on("click", register);
    $("#Clear").on("click", clearSerForm);

}






/*
function displayServices(){
    let table =$("#servicesDisplay");
    let result=`
        <table class="table table-sm table-dark">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Service</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody id="serviceRows">
        </tbody>
        </table>
    `;
    table.html(result);
    //only use jQuery throughout 

    let serviceRows=$("#serviceRows");
    let rows="";
    for(let i=0; i<services.length; i++){
        let service = services[i];
        rows+=`
            <table id="registerTable" class="table table-sm table-dark">
            <thead>
                <tr id="${i}">
                    <td scope="row-data">${i+1}</td>
                    <td>${service.description}</td>
                    <td>$ ${service.price}</td>
                    <td><button class="btn btn-danger"onclick="deleteService(${i});">Delete</button></td>
                </tr>
            </thead>
            </table>
        `;
    }
    serviceRows.html(rows);


}
    */

/*delete function
function deleteService(serviceId){
    console.log("delete service"+ serviceId);
    $("serviceId").remove;
    services.splice(serviceId,1)

    displayServices();

}*/



window.onload=init;//wait to render the HTML