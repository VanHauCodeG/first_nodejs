// const getRandNumbers = (min, max, length) => {
//     const result = [];
//     for(let i = 0; i< length; i++){
//        let randNum =  Math.floor(Math.random() * (max-min+1)+min);
//        result.push(randNum);
//     }
//     return result;
// }
// console.log(getRandNumbers(5,10,10));

// const getTotal = (array) => {
//     let sum = 0;
//     for(let i = 0;i<array.length; i++){
//         sum+=array[i];
//     }
//     return sum;
// }
// console.log(getTotal([1,2,3,4]));

// let cart = [
//     {
//         name: 'Cursor',
//         price: 100
//     },
//     {
//         name: 'Github Copilot',
//         price: 100
//     },
//     {
//         name: 'Claude',
//         price: 150
//     }
// ]
// const getTotalPrice = (a) => {
//     let result = 0;
//     for(let i = 0; i< a.length; i++){
//         result += a[i].price;
//     }
//     return result;
// }
// console.log(getTotalPrice(cart));

// function run(object) {
//   const result = [];
//   for (let key in object) {
//     result.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//   }
//   return result;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]

// const arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++)
//         console.log(arr[i][j]);
// }

