//콜백함수: 자바콜백함수(service, doGet, doPost)
//1. 함수 선언식
function checkMood(mood){
    if(mood==="good"){
        sing();
    }else if(mood==="cry"){
        cry();
    }else if(mood==="dance"){
        dance();
    }
}
function checkMood2(mood, goodCallback, badCallback){
    if(mood==="good"){
        goodCallback();
    }else{
        badCallback();
    }
}

checkMood2("good", sing, cry);

function sing(){
    console.log("ACTION :: sing");
}
function cry(){
    console.log("ACTION :: cry");
}
function dance(){
    console.log("ACTION :: dance");
}

checkMood("dance");