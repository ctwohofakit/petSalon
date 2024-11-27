const LS_KEY = "services";

function save(service){
    let data = read();
    data.push(service);
    let val = JSON.stringify(data);
    localStorage.setItem(LS_KEY, val);
}

function read(){
    let data = localStorage.getItem(LS_KEY) ;

    if(!data){// NOT data? true or false
        return [];// creating the array
    }else{
    let list = JSON.parse(data);//JSON back data to object
        return list;//display as list 

    //return data;
    }
}