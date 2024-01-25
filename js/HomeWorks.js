// First Challenge.

// const getCelsius = (F) => (F - 32) * 5/9; console.log(getCelsius(32));
// const getfahrenheit  = (C) => (C * 9/5) + 32; console.log(getfahrenheit(32));

// function getCelsius (F) {
//     const celsius = (F - 32) * 5/9;
//     return celsius;
// }

// console.log(getCelsius(32));

// Second Challenge.

// function minMax(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     return{
//     min,
//     max
//     }

// }

// console.log(minMax([1, 2, 3, 4, 5]));

// Third Challange.

// ((length, width) =>{
//     const area = length * width;

//     const output = `The area a ractangle length of ${length} and a width of ${width} is ${area}`
//     console.log(output);

// })(10 , 5);

// FizzBuzz Challenge

// for (let i = 0; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log(`${i} FizzBuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} Buzz`);
//   } else {
//     console.log(i);
//   }
// }

// let j = 0;

// while (j <= 100) {
//   if (j % 15 === 0) {
//     console.log(`${j} FizzBuzz`);
//   } else if (j % 3 === 0) {
//     console.log(`${j} Fizz`);
//   } else if (j % 5 === 0) {
//     console.log(`${j} Buzz`);
//   } else {
//     console.log(j);
//   }
//   j++
// }


// Challange 2.1

// const myString = "developer";

// // const myNewString = myString[0].toUpperCase() + myString.slice(1);
// // const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// const myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`


// console.log(myNewString);

// Challange 2.2

// let x = Math.floor(Math.random() * 100 + 1);
// let y = Math.floor(Math.random() * 50 + 1);


// let sumOutput = x + y;
// console.log(`${x} + ${y} = ${sumOutput}`);

// let differenceOutput = x - y;
// console.log(`${x} - ${y} = ${differenceOutput}`);

// let productOutput = x * y;
// console.log(`${x} * ${y} = ${productOutput}`);

// let quotientOutput = x / y;
// console.log(`${x} / ${y} = ${quotientOutput}`);

// let reOutput = x % y;
// console.log(`${x} % ${y} = ${reOutput}`);


// Task 3.1

// const arr = [1, 2, 3, 4, 5];

// arr.push(6);
// arr.unshift(0)
// arr.reverse()

// console.log(arr);

// // Task 3.2

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// const arr3 = arr1.slice(0, 4).concat(arr2);

// const arr4 = [...arr1, ...arr2];
// arr4.splice(4, 1)

// console.log(arr4);

// Task 3.2

// let library = [
//     {
//         title: "nika koiava",
//         author: "shota rustaveli",
//         status: {
//             own: true,
//             reading: false,
//             read: false,
//         }
//     },
//     {
//         title: "nini koiava",
//         author: "book",
//         status: {
//             own: true,
//             reading: false,
//             read: false,
//         }
//     },
//     {
//         title: "luka koiava",
//         author: "whater",
//         status: {
//             own: true,
//             reading: false,
//             read: false,
//         }
//     }
// ];

// library[0].status.read = "true";
// library[1].status.read = "true";
// library[2].status.read = "true";

// const {title: firstBook} = library[0];

// const libraries = JSON.stringify(library)
// console.log(libraries);

// // Task 4.1

// const getCelsius = (F) => (F -32) * 5 / 9; console.log(`The temperature is ${getCelsius(32)} \xB0C`);
// const getfahrenheit = (C) => (C * 9/5) + 32; console.log(`The temperature is ${getfahrenheit(32)} \xB0F`);


// function minMax(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     return{
//         min,
//         max
//     }
// }


// console.log(minMax([1, 2, 3, 4, 5]));


// ((length, width) => {
//     let sum = length * width;
//    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${sum}`;
//    console.log(output);
// })(10, 5);

// Task 5.1

// function calculator(num1, num2, operator) {
//     if(operator === "+"){
//           let sum = num1 + num2;
//           console.log(`${num1} + ${num2} = ${sum}`);
//     } else if (operator === "-" ) {
//         let minus = num1 - num2;
//         console.log(`${num1} - ${num2} = ${minus}`);
//     } else if (operator === "*" ) {
//         let multiply = num1 * num2;
//         console.log(`${num1} * ${num2} = ${multiply}`);
//     } else if (operator === "/" ) {
//         let division = num1 / num2;
//         console.log(`${num1} / ${num2} = ${division}`);
//     } else if (operator === "%" ) {
//         let balance = num1 % num2;
//         console.log(`${num1} % ${num2} = ${balance}`);
//     } else {
//         console.log("Invalid Operator");
//     }
// }

// calculator(5, 2, "+")
// calculator(5, 2, "-")
// calculator(5, 2, "*")
// calculator(5, 2, "/")
// calculator(5, 2, "%")
// calculator(5, 2, "&")

// function arrayDiff(a, b) {
//     return a.filter(elementA => !b.includes(elementA));
// }


// const result1 = arrayDiff([1, 2], [1]);          
// const result2 = arrayDiff([1, 2, 2, 2, 3], [2]);  

// console.log(result1);
// console.log(result2);


// let letters = ['n', 's', 'w', 'e'];

// function isValidWalk(walk) {
 
//     return walk.length === 10 && 
//            walk.filter(direction => letters.includes(direction)).length === 10 &&
//            walk.filter(direction => direction === 'n').length === walk.filter(direction => direction === 's').length &&
//            walk.filter(direction => direction === 'w').length === walk.filter(direction => direction === 'e').length;
// }


// const exampleWalk = ['n', 's', 'w', 'e', 'n', 's', 'w', 'e', 'n', 's'];
// console.log(isValidWalk(exampleWalk)); 


