/*
    ex10_array.js

    배열, array
    - 자바의 Array + Collection
    - 길이 : 가변
*/

// Java: int[] nums = new int[3];
var nums = new Array(); // New ArrayList();

// Indexer 지원
nums[0] = 10;
nums[1] = 20;
nums[2] = 30;

console.log(nums); // [ 10, 20, 30 ]

nums[5] = 50;
console.log(nums); // [ 10, 20, 30, <2 empty items>, 50 ] -> 사용금지(중간에 빈 방 두지 말 것)
console.log(nums[3]); // undefined -> 빈 방
console.log(nums[10]); // undefined -> 만든적 없는 방

// 배열 초기화 리스트
// int[] nums = new int[] {10, 20, 30};
// int[] nums = {10, 20, 30};
nums = new Array(10, 20, 30); // x
nums = [10, 20, 30]; //o
console.log(nums);

// 빈 배열 만들기
nums = new Array();
nums = [];

// 길이
nums= [10, 20, 30, 40, 50];
console.log(nums.length); //5

// 메소드
nums.push(60); //append, 배열 끝에 추가(index 미사용)
nums.push(70);
console.log(nums); // [ 10, 20, 30, 40, 50, 60, 70 ]

console.log(nums.pop()); // 70, 마지막 방 가져오기, stack.pop()
console.log(nums); //[ 10, 20, 30, 40, 50, 60 ]

console.log(nums.shift()); // 10, 첫 번째 방 가져오기. 삭제 <-> pop()
console.log(nums); // [ 20, 30, 40, 50, 60 ]

// 탐색
for (var i = 0; i < nums.length; i++) {
    console.log(i, nums[i]);
}

// for in : 기존의 향상된 for문과 다르다.
for (var i in nums) {
    console.log(i);
}


//ES6 -> 향상된 for문(= iterator)
nums.forEach(function(item, index){
    console.log(item, index);
});