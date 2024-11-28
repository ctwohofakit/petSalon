const LS_KEY = "services";

function save(service){
    let data = read();
    data.push(service);


    let val = JSON.stringify(data);// translate data to jason format and store it in val
    localStorage.setItem(LS_KEY, val);//Saves the JSON string val into localStorage using the key LS_KEY
}

function read(){
    let data = localStorage.getItem(LS_KEY) ;

    if(!data){// NOT data? true or false
        return [];// creating the array
    }else{
    let list = JSON.parse(data);//JSON back data to JavaScript array/object and stores it in "list"
        return list;//Returns the parsed array

    }
}