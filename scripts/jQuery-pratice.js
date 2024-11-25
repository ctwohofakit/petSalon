console.log("Welcome to jQuery");


/*
JS vs jQuery

js...document.getElementById("result");
jQuery...$("#result");

js...document.getElementBytagName("p");
jQuery...$("p");

js...document.getElementByClassName("text");
jQuery...$(".text");

*/

//ID selector
let redParagraph=$("#red").css("background","red").css("color","white");
console.log("my red Paragraph", redParagraph);


let blueParaph=$("#blue")
    .css("background","blue")
    .css("color","white");
console.log("my blue Paragraph", blueParaph);

//Class selector
let myParagraphWithBorder=$(".with-border");
    myParagraphWithBorder.css("border", "5px dashed yellow");
    myParagraphWithBorder.click(
        function(){
            console.log("Clicked");
            $(this).addClass("bg-gray");
        });

//tag selector
let cursorParaph=$("p.bg-tomato");
cursorParaph.css("cursor","pointer");


//Simple and common fucntion
function register(){
    console.log("Register Funciton");

    let testEntry =$("#testInput").val();
    $("#results").append(  `<li>${testEntry}</li>`);

    $("#testInput").val(""); 
}

    //Event fucniton in Jquery will not have register().
    $("#btnRegister").on("click", register)


//Simple and common fucntion
function clickMe(){
    console.log("clickMe btn");

    $("p:first").hide();
    $("p:last").css("border", "5px solid skyblue")

}

$("#newBtn").on("click", clickMe);


//Animation
function showName(){
    $("#user-name").slideDown();
}

function hideName(){
    $("#user-name").fadeOut(1000);

}