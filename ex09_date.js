/*
    ex09_date.js

    날짜시간 자료형 + 함수
*/

// 현재 시간
// Java: Calendat c = Calendar.getInstance();
// Java: Date d = new Date();

var now = new Date();
console.log(now); //2021-06-23T01:15:25.823Z

// 요소 추출
// Java: c.get(Calendar.YEAR)
console.log(now.getYear()); // 121, 1999년 이전 2자리 표기 함수
console.log(now.getFullYear()); // 2021, 2000년 이후
console.log(now.getMonth()); // 5, 월(0~11)
console.log(now.getDate()); //23, 일
console.log(now.getDay()); // 3, 요일(0(일)~6(토))
console.log(now.getHours()); // 10, 시
console.log(now.getMinutes()); // 19, 분
console.log(now.getSeconds()); //25, 초
console.log(now.getMilliseconds()); // 958, 밀리초
console.log(now.getTime()); // 1624411165958, 틱

// 덤프(+출력)
// - %tF(2021-06-23), %tT(10:22:30), %tA(요일)
console.log(now); // 2021-06-23T01:23:56.220Z
console.log(now.toString()); // Wed Jun 23 2021 10:23:56 GMT+0900 (대한민국 표준시)
console.log(now.toLocaleString()); //2021. 6. 23. 오전 10:23:56, 현지 설정

console.log(now.toDateString()); // Wed Jun 23 2021
console.log(now.toTimeString()); // 10:25:21 GMT+0900 (대한민국 표준시)

console.log(now.toLocaleDateString()); // 2021. 6. 23.
console.log(now.toLocaleTimeString()); // 오전 10:25:21

// 특정 시각
var christmas = new Date();
christmas.setFullYear(2021);
christmas.setMonth(11);
christmas.setDate(25);
christmas.setHours(0);
christmas.setMinutes(0);
christmas.setSeconds(0);

console.log(christmas.toLocaleString());

//연산
// - tick 연산
console.log(christmas - now); //밀리초
console.log((christmas - now)/ 1000 / 60 / 60 / 24);

// 오늘 + 100일
var tick = now.getTime() + (100 * 24 * 60 * 60 * 1000); //현재시간의 tick + 100일 tick
var hday = new Date();
hday.setTime(tick); // +100일 된 tick값으로 바꾸기
console.log(hday.toLocaleString());