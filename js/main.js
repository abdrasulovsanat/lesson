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
