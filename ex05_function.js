/*
    ex05_function.js

    함수, function
    - 메소드, 프로시저
    - 자바스크립트(메소드(= 함수))
    - function 키워드 사용

    선언문
    1. 자바의 선언문
        public [static] void test(int a) {
            실행문;
        }

    2. 자바스크립트의 선언문
        test(a) {
            실행문;
        }
*/

// 매개변수x, 반환값x
function f1() {
    console.log('f1');
}

f1();
f1();
f1();

// 매개변수o, 반환값x
function f2(num) {
    console.log(num);
}

f2(100);
f2(200);
f2(300);

// 매개변수x, 반환값o
function f3() {
    return 100;
}

var result=f3();
console.log('reuslt', result);

// 매개변수o, 반환값o
function f4(a, b){
    return a+b;
}

console.log(f4(100, 200));

// 주의점!!!
// - 실인자와 가인자가 일치하지 않아도 가능
function hello(name) {
    console.log('안녕하세요. ' + name + '님');
    // console.log('안녕하세요. %s님', name);
}

hello('홍길동');
hello();
hello('홍홍홍', '하하하', '아아아'); //홍홍홍만 결과 나오고 나머지는 안나옴

hello('하하하');

/*
    자료형
    - null : 그 외 나머지 비어있는 상태, 개발자가 직접 명시
    - undefined:  변수를 생성 직후 초기화를 하지 않은 상태
    - 둘은 똑같다.(실제로는 다르다.)
*/

console.log(null);
console.log(undefined);
console.log(null == undefined);

// var temp = null; 명시적 선언에는 null만 사용
// var temp = undefined; // x

var temp;
console.log('temp', temp);