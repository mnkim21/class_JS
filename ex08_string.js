/*
    ex08_string.js

    문자열 함수
*/
var txt = 'Hello, there!!'

// 문자열 길이(문자 수)
// - 메소드x, 프로퍼티o
console.log(txt.length);

// 검색
// - indexOf()
// - lastIndexOf()
// Zero-based Index
console.log(txt.indexOf('e')); // 1
console.log(txt.indexOf('e', 5)); // 9
console.log(txt.lastIndexOf('e')); // 11

// 대소문자 변환
console.log(txt.toUpperCase()); // HELLO, THERE!!
console.log(txt.toLowerCase()); // hello, there!!

// 치환
// - 1번만 치환한다.(1회 치환)
// - 모든 대상을 치환하려면 정규 표현식을 사용해야 된다.
console.log(txt.replace('there', 'Kim')); // Hello, Kim!!
console.log(txt.replace('!', '?')); // Hello, there?! -> 1회만 치환
console.log(txt.replace(/!/gi, '?')); // Hello, there?? -> 정규표현식 사용해서 전체 치환

// 추출
// - substring(beginIndex, endIndex); -> beginIndex ~ endIndex-1
// - substr(beginIndex, length);
// - charAt(index);
// - charCodeAt(index); -> 코드 값
txt = 'abcdefghijk';

console.log(txt.substring(2, 5)); // cde
console.log(txt.substring(2)); // cdefghijk
console.log(txt.substr(2, 5)); // cdefg
console.log(txt.substr(2)); // cdefghijk
console.log(txt.charAt(2)); // c
console.log(txt.charCodeAt(2)); // 99
console.log('a' > 'b'); // false -> 문자 코드 비교 지원
console.log('홍길동' > '아무개'); // true

// 공백 제거
txt = "   하나   둘              셋                                   ";

console.log(txt.trim()); //하나   둘              셋;
console.log(txt.trimStart()); //하나   둘              셋                                   ;
console.log(txt.trimEnd()); //   하나   둘              셋;
console.log(txt.trimLeft()); //하나   둘              셋                                   ;
console.log(txt.trimRight()); //   하나   둘              셋;

//패턴 검색
txt = 'hong';

console.log(txt.startsWith('h')); // true
console.log(txt.endsWith('.')); // false

// 분할
txt = '홍길동,아무개,하하하,호호호';

var temp = txt.split(',');
console.log(temp); // [ '홍길동', '아무개', '하하하', '호호호' ]
console.log(temp[0]); // 홍길동
console.log(temp[2]); // 하하하


console.log(txt.bold()); // <b>홍길동,아무개,하하하,호호호</b> -> 사용 안함

