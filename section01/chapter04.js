//1. 함수 선언식 자동으로 호이스팅이 발생된다
//2. 함수 표현식은 자동으로 호이스팅 발생이 되지 않는다
//3. 화살표함수는 자동으로 호이스팅 발생이 되지 않는다
function getArea(width, height){
    //중첩함수
    function anotherFunction(){
        console.log("another function");
    }

    anotherFunction();
    return width*height;
}

let area1=getArea(10,20);
console.log(area1);
