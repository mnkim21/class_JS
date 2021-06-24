/*
    ex11_object.js

    JavaScript 전체 구성
    1. Core(ECMAScript, 언어 기본)
    2. BOM(브라우저 조작)
    3. DOM(브라우저 조작)

    JS Object
    1. 내장 객체
        - Array, Date, Math, RegExp 등

    2. BOM 객체
        - window, document, location, form 등

    3. DOM 객체
        - element, attribute, text 등

    4. 사용자 정의 객체
        - 개발자가 직접 정의한 객체
*/

// 사용자 정의 객체
// - 자바스크립트는 클래스가 없다.
// 1. Object 생성자 함수 사용
// 2. 객체 리터럴 표기법({}) 사용

// 요구사항] user클래스 정의(멤버 구성) -> 홍길동 객체 생성
/*
    Java:
    class User {
        private String name;
        private int age;
        private String address;
    }

    User hong = new User();
    hong.name = "홍길동";
    hong.age = 20;
    hong.address = "서울시";
*/
var hong = new Object(); //아무것도 없음

// 객체 프로퍼티(Property)
// - 추가: 객체에 마음대로 지정해서 추가
hong.name = "홍길동";
hong.age = 20;
hong.address = "서울시";

console.log(hong.name);
console.log(hong.age);
console.log(hong.address);
console.log(hong);

// + 추가 요구사항] user클래스 정의(멤버 구성) -> 아무개 객체 생성
// -> 오타가 나도 알 수 있는 방법이 없음
var ahmu = new Object();

ahmu.name = "아무개";
ahmu.egg = 25;
ahmu.area = "제주도";

console.log(ahmu);

console.log('----------------------------------------------------------');
// 객체 리터럴 사용
hong = {};

hong.name = "홍길동";
hong.age = 20;
hong.address = "서울시";

console.log(hong);

hong = {
    name: '홍길동',
    age: 20,
    address: '서울시'
};
console.log(hong);

// 프로퍼티 접근 방법
// 1. 멤버 접근 연산자 : .
// 2. key 접근
console.log('1', hong.name);
console.log('2', hong['name']);

var prop = 'name';
console.log(hong[prop]);

hong['phone-number'] = '010';
console.log(hong);

// 프로퍼티 삭제
delete hong.age;
console.log(hong);

// 객체 탐색(=프로퍼티 탐색)
// - 해당 객체가 어떤 프로퍼티들을 가지고 있는지 순차적으로 탐색
// - for in
for (var prop in hong) {
    console.log(prop, hong[prop]);
}

//객체의 멤버
// 1. 변수
// 2. 메소드
hong = new Object();

hong.name = '홍길동';
hong.age = 20;

//hong(객체)에 hello(프로퍼티) 추가. hello(프로퍼티)에는 익명함수가 들어있다.
hong.hello = function() { 
    console.log('hello');
}

console.log(hong); // { name: '홍길동', age: 20, hello: [Function (anonymous)] }
hong.hello(); // hello

hong.info = function(){
    console.log('저는 %s입니다. 나이는 %s세 입니다.', this.name, this.age);
}
hong.info(); // 저는 홍길동입니다. 나이는 20세 입니다.

hong = {
    name: '홍길동',
    age: 20,
    // address: '서울시 강서구 염창동',
    address: {
        sido: '서울시',
        gugun: '강서구',
        dong: '염창동'
    },
    info: function(){
        console.log(this.name, this.age);
    }
};

console.log(hong.name); // 홍길동
console.log(hong.age); // 20
console.log(hong.address); // { sido: '서울시', gugun: '강서구', dong: '염창동' }

console.log(typeof hong.name); // string
console.log(typeof hong.age); // number
console.log(typeof hong.address); // object

// 아래 3개 모두 같은 코드
console.log(hong.address.dong); // 염창동
console.log(hong.address['dong']); // 염창동
console.log(hong['address']['dong']); // 염창동

/*
    함수 -> 변수의 지역
    Java: 지역변수(메소드, 제어문), 멤버변수
    JavaScript:
        - 지역변수(***) : 함수만 인식(제어문은 인식 불가)
        - 전역변수(***)
*/


// 전역변수, Global Variable
// - 어디에도 소속되지 않은 변수
// - 적용 범위: 현재 파일 전체
var n1 = 10;

function m1() {

    //지역 변수, Local Varible
    var n2 = 20;
    console.log(n2); // 20

    if(true) {
        var n3 = 30; // Scope: m1
        console.log(n3);// 30
    }

    console.log(n3); // 30, if문 밖인데 출력됨 -> 제어문은 인식x
}

// console.log(n2);
m1();


// JS의 var키워드는 중복 선언이 가능
var num = 10;
var num = 20;
var num = 30;

console.log(num); // 30

//JS에서는 변수 선언 키워트(var)없이도 변수 선언이 가능 -> 전역변수가 됨
// -> 사용 금지(가독성 저하)
color = '노랑';
console.log(color);

function test() {
    var width = 100; // 지역변수
    height = 200; // 지역변수
}

// console.log(width);
// console.log(height);


/*
    기본: 선 선언 -> 후 호출

    호출 -> 선언 ; hoisting

    hoisting
    - 함수 호이스팅
    - 변수 호이스팅 -> 사용 안함
    - js 엔진이 구문(문장)을 실행하기 전에 소스상의 모든 변수 선언문과 함수 선언문을 소스 최상단으로 이동시킨다.(끌어 올린다.)
*/

print(); // 고양이
console.log(nick); // undefined

var nick = '강아지';
function print() {
    console.log('고양이');
}


function f1() {
    console.log('f1');
    
    // 지역함수(nested function)
    function f2() {
        console.log('f2');
    }

    f2();
    console.log('f1');
}

f1();
// f2(); -> 오류


/*
    즉시 호출 함수
    - 패쇄적인 환경을 만들기 위해
    - 네임 충돌 발생 방지
    - 자원 관리 편함
*/
(function() {
    // 이곳에 코딩하는 모습을 자주 볼 수 있다.
    var num = 100;
    
    function test() {
        console.log(num);
    }
})();

console.log(num);
test();

// JS: 클래스(x) -> 생성자 함수
// 요구사항] 동일한 타입의 객체를 3개 생성
var m1 = {
    name: '홍길동',
    age: 20
};
var m2 = {
    name: '아무개',
    age: 25
};
var m3 = {
    name: '하하하',
    age: 26
};

// 생성자 함수
// - 이름: 파스칼 표기법(대문자로 시작)
// - this: 나중에 생성될 객체
function User() {
    this.name = '홍길동',
    this.age = 20;
    this.hello = function() {
        console.log(this.name, this.age);
    }
}

//생성자 함수는 단독 호출(x) -> 반드시 new연산자와 함께 사용
var user = new User();
console.log(user); // User { name: '홍길동', age: 20 }
user.hello(); // 홍길동 20


function Member(name, age) {
    this.name = name;
    this.age = age;
}

var m1 = new Member('홍길동', 20);
var m2 = new Member('아무개', 23);
var m3 = new Member('하하하', 26);

console.log(m1);
console.log(typeof m1); // object
console.log(m1.constructor); // [Function: Member]

console.log(user);
console.log(typeof user); // object
console.log(user.constructor); // [Function: User]

// => 객체를 구분할 땐 typeof가 아니라 .constructor를 확인

var list = [];
list = new Array(); // Array라는 이름의 생성자 함수
console.log(typeof list); // object
console.log(list.constructor); // [Function: Array]

var now = new Date();
console.log(typeof now); //object
console.log(now.constructor); // [Function: Date]

console.log(m1 == m2); // false
console.log(m1 == user); // false
console.log(m1.constructor == m2.constructor); // true
console.log(m1.constructor == user.constructor); // false