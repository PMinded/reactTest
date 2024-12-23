//1. 숫자 양수/음수 무한대
let minfinityValue=Infinity;
//숫자가 아님
let notANumber=NaN;
//연산식 결과가 나올 수 있도록 형변환한다
let nan=1*"10";
//덧셈으로 문자열만들기
let name="홍"+"길동";
//템플릿리터널 기능을 잘 사용하자
let name2="홍길동";
let mylocation="강남";
let introduceText="나는 "+mylocation+"에 산다";
let introduceText2=`나는 ${mylocation}에 산다`;


//형변환(nunber,parseInt(앞에있는숫자만))=>Number 타입으로 변경한다다
let str2="10";
// console.log(Number(str2));
// console.log(Number(str2)+10);
// console.log(ParseInt(str2)+10);

//산술연산자에서 주의할점
let num1=1;
let num2=2;
// console.log(num1/num2)

//비교연산자 (==),(!=): 비추/(===), (!==) 강추 (타입과 같이 비교한다.)
let compA="1";
// console.log(1==="1");

//typepof 연산자
let num3=null;
console.log(num3);

//typepof 연산자
let num4=null;
console.log(typeof num4);

//병합연산자 (??)
let num5;
num5=num5??10;  //변수가 undefined, null이면면 다른값을 준다
console.log(num5);