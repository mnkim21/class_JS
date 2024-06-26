/*
    ex07_casting.js

    형변환 함수
    1. 정수 parseInt(값)
    2. 실수 parseFloat(값)
*/
var n1 = 3.14;
console.log(parseInt(n1)); // 실수 -> 정수

var n2 = '100';
console.log(parseInt(n2), typeof n2, typeof parseInt(n2)); // 문자열 -> 정수

var n3 = 200;
console.log(parseFloat(n3)); //정수 -> 실수

var n4 = '5.12';
console.log(parseFloat(n4), typeof n4, typeof parseFloat(n4)); // 문자열 -> 실수

//실수 -> 정수, 문자열 -> 실수, 정수
console.log('100' + 100, parseInt('100')+100); // 100100 200
console.log('100' * 2, parseInt('100') * 2); // 200 200


//----------------------------------------------------------------------------------------
// CSS 속성 조작
// - box > width: 150px; x2 = width: 300px;
var width = '150px';
console.log(width * 2); // NaN(난, Not a Number)

//시작부터 연속된 숫자만 취하고 나머지는 버린 뒤 형변환
console.log(parseInt(width)); // '150px' -> 150
console.log(parseInt('2021년')); // 2021
console.log(parseInt('나이20')); // NaN
console.log(parseInt('123abc456def')); // 123

var fontsize = '1.5em';
console.log(parseFloat(fontsize)); // 1.5

/*
    boolean isNaN(값);
    - is Not a Number?
    - 숫자o = false/ 숫자x = true
*/
// var age = "20";
var age = "20세";
// 유효성 검사; 숫자만 입력함?
console.log(isNaN(age));
console.log(isNaN(age) ? '나이를 올바르게 입력하세요':'통과');