// join; - объединяет все элементы массива в строку
// let fruits = ['Apple', 'Orange', 'Grape'];
// let res = fruits.join('/');
// console.log(res);

//split();
// let str = '13/12/2022';
// let newStr = str.split('/');
// console.log(newStr);

//reverse(); - переворачивает массив (располагает элементы в обратном порядке)
// let str = ['Hello', 'Tom', 'Js'];
// let res = str.reverse();
// console.log(res);

// let str = 'Hello my name is Tom';
// console.log(str.split(' ').reverse().join(' '));

//sort(); - сортирует элементы в массиве
// let arr = [1, 43, 43, 2500, 2, 4, 10];
// let res = arr.sort((a, b) => a - b);
// console.log(res);
// let res2 = arr.sort((a, b) => b - a);
// console.log(res2);

// let arr = ['Apple', 'Tom', 'JS', 'Python', 'Jessica'];
// let res = arr.sort((a, b) => a.length - b.length);
// console.log(res);

// while (пока выражение выводит true){
//     ...логика, которая будет выполняться...
// }

// let counter = 0;
// while(counter < 10){
//     console.log(`Counter: ${counter}`);
//     counter++;
// };

// let flag = true;
// while(flag){
//     let data = prompt('Enter some data');
//     if(data === 'e'){
//         flag = false;
//     };
// };

// for(let flag = true; flag; null){
//     let data = prompt('Enter some data');
//     if(data === 'exit'){
//         flag = false;
//     };
// }

// 1. Запросить у пользователя 5 элементов и сохранить их в массив, использовать методы массивов
// let data = prompt()

// 2. Запросить у пользователя 5 чисел, и отсортировать их от меньшего к большему

// let data = prompt('Enter some nums').split(' ');
// let numsArr = [];
// for(i = 0; i < data.length; i++){
//     numsArr.push(+data[i]);
// };
// numsArr.sort((a, b) => a - b);
// console.log(numsArr);


//=====================================================================
//  Есть массив с числами let arr = [1, 2, -3, 0, -6, 9, 0, 0]. Составьте программу, которая определяет кол-во отрицательных, кол-во положительных и кол-во нулей в массиве.
// let arr = [1, 2, -3, 0, -6, 9, 0, 0];
// let positiveArr = [];
// let negativeArr = [];
// let zeroArr = [];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         positiveArr.push(arr[i]);
//     }else if(arr[i] < 0){
//         negativeArr.push(arr[i]);
//     }else{
//         zeroArr.push(arr[i]);
//     };
// };
// alert(`Positive: ${positiveArr.length}; negative: ${negativeArr.length} zero: ${zeroArr.length}`);



// let arr = [
//     [1, 2],
//     [4, 5],
//     ['hello', 'JS']
// ];

// // console.log(arr[0][0]);
// for(let i = 0; i < arr.length; i++){
//     //arr[i] -> [elem, elem ... ,]
//     for (let j = 0; j < arr[i].length;j++){
//         console.log(arr[i][j]);
//     };
// };

// Задание №1
// Дан массив ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"]. Выведите в консоль имена Mirdin и Aliia с помощью цикла for

let arr = ['Polina', 'Mirdin', 'Azret', 'Aliia', 'Aidana'];
for (let i = 0; i < arr.length; i += 1) {
  if (i % 2 != 0) {
    console.log(arr[i]);
  }
}

// Задание №2
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for

let res = [];
for (let l = 1; l < 11; l++) {
  res.push(l);
}
console.log(res);

// Задание №3
// Выведите в консоль все числа в промежутке с 50 до 99 включительно с помощью цикла.

let res1 = [];
for (let k = 50; k < 100; k++) {
  res1.push(k);
}
console.log(res1);

// Задание №4
// Выведите те же числа, но уже в обратном порядке, т.е. с 99 до 50.

let res2 = [];
for (let t = 50; t < 100; t++) {
  res2.push(t);
}
res2.sort((a, b) => b - a);
console.log(res2);

// Задание №5
// Найдите самый длинный элемент массива и вывкдите в консоль
// ["pen", "pineapple", "apple", "pen"]

let arr2 = ['pen', 'pineapple', 'apple', 'pen'];
let updArr2 = [];
for (let j = 0; j < arr2.length; j++) {
  updArr2.push(arr2[j]);
}
updArr2 = arr2.sort((a, b) => b.length - a.length);
console.log(updArr2[0]);

// Задание №6
// Так же найдите самый короткий элемент этого же массива

let arr3 = ['pen', 'pineapple', 'apple', 'pen'];
let updArr3 = [];
for (let s = 0; s < arr3.length; s++) {
  updArr3.push(arr3[s]);
}
updArr3 = arr3.sort((a, b) => a.length - b.length);
console.log(updArr3[0], updArr3[1]);

// Задание №7
// Выведите в консоль все элементы с четными индексами.
// [1,2,3,4,5,6,7,8,9]

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let p = 2; p <= 9; p++) {
  if (p % 2 == 0) {
    console.log(p);
  }
}

// Задание №8
// Дан двумерный массив. Выведите в консоль все элементы.
// [[1,2], [3,4], [5,6]]

let arr5 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let o = 0; o < arr5.length; o++) {
  for (let u = 0; u < arr5[o].length; u++) {
    console.log(arr5[o][u]);
  }
}
