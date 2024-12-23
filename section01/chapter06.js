//1. 객체생성 생성자, 객체리터럴
let obj1=new Object();
let obj2={};

//2. 객체 property(객체속성)
let person={
    name: "홍길동",
    age: 20,
    hobby: "축구",
    job: "개발자",
    extra: {},
    extra2: function(){
        console.log("멤버함수");
    },
    islike: true
};

// console.log(person["extra2"]());

//멤버변수 추가
person.address="강남구 352";
//멤버변수 삭제
delete person.address;
let flag="name" in person;
console.log(`${flag}`);


console.log(person);