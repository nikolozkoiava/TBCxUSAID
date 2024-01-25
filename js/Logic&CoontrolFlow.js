// // if statment

// if(true) {
//     console.log("this is true");

// }

// if(false) {
//     console.log("this is not true");

// }

// const x = 10;
// const y = 5;

// if ( x > y ) {
//     console.log(`${x} is greater than ${y}`);
// }

// if ( x === y ) {
//     console.log(`${x} is greater than ${y}`);
// } else{
//     console.log(`${x} is not equal to ${y}`);
// }

// if(x !== y) {
//     const z =20;
//     console.log(`${z} is 20`);
// }

// // Shorthand if

// if (x >= y) {
//     console.log(`${x} is greater than or equal to ${y}`);
// }

// Else-IF Nesting

// const d = new Date(10, 30, 2020, 6, 0, 0);
// const hour = d.getHours();

// if (hour < 12) {
//     console.log("Good morning");
// } else if (hour < 18) {
//     console.log("Good Afternoon");
// }else{
//     console.log("Good night");
// }

// if (hour < 12) {
//     console.log("Good morning");
// if(hour === 6) {
//     console.log("Wake up");
// }
// } else if (hour < 18) {
//     console.log("Good Afternoon");
// }else{
//     console.log("Good night");
// }
// if(hour >= 20) {
//     console.log("zzzzzzz");
// }

// if(hour >= 7 && hour < 15) {
//     console.log("It is work time!");
// }

// if(hour === 6 || hour === 20) {
//     console.log("Brush your teeth!");
// }

// const d = new Date(2022, 1, 10, 8, 0, 0)
// const month = d.getMonth();

// switch(month){
//     case 1:
//         console.log("it is January");
//         break;
//     case 2:
//         console.log("it is Feebruary");
//         break;
//     case 3:
//         console.log("it is March");
//         break;
//     default:
//         console.log("it is not Jan, Feb or March");

// }

// function calculator(num1, num2, operator) {
//   let result;

//   if (operator === "+") {
//     result = num1 + num2;
//   } else if (operator === "-") {
//     result = num1 - num2;
//   } else if (operator === "*") {
//     result = num1 * num2;
//   } else if (operator === "/") {
//     result = num1 / num2;
//   } else if (operator === "%") {
//     result = num1 % num2;
//   } else {
//     console.log("Invalid operator");
//     return;
//   }
//   console.log(`Result: ${result}`);
// }

// calculator(5, 2, "+");
// calculator(5, 2, "-");
// calculator(5, 2, "*");
// calculator(5, 2, "/");
// calculator(5, 2, "%");

// function calculator(num1, num2, operator) {
//   let result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     case "%":
//       result = num1 % num2;
//       break;
//   }
//   console.log(`result: ${result}`);
//   return;
// }

// calculator(10,2, "+")
// calculator(10,2, "-")
// calculator(10,2, "*")
// calculator(10,2, "/")
// calculator(10,2, "%")

// Truthy & Falsy Values

// Falsy Values:
// - False
// - 0
// - "" or ""
// - null
// - Undifined
// - NaN

// Truthy values:
// - Everthing else that is not falsy
// - true
// - "0"
// - ""
// - []
// - {}
// - function () {} (empty function)

// const x = NaN;

// if(x){
//     console.log("This is truthy");
// } else {
// //     console.log("This is falsy");
// // }

// console.log(x);

// const children = 0;

// if(children !== undefined) {
//     console.log(`you have ${children} children`);
// }else{
//     console.log("please enter number of children");
// }

// const posts = ['nika'];

// if(posts.length > 0) {
//     console.log("list posts");
// }else{
//     console.log("No posts");
// }

// const user = {name: "nika"};

// if(Object.keys(user).length > 0) {
//     console.log("List user");
// } else{
//     console.log("No user");
// }

// // Loosse Equality (==)

// console.log(false === 0);

// console.log(10 > 20 && 30 > 15 && 40 > 30);
// console.log(10 > 20 || 30 > 15);

// // && - Will return first falsy value or the last value

// let a;

// a = 10 && 20;
// a = 10 && 20 && 30;
// a = 10 && '' && 0 && 30;

// console.log(a);

// const posts = ["post one", "post two"];
// posts.length > 0 && console.log(posts[0]);

// // || - will return the first truthy value or the last value

// let b;

// b = 10 || 20;
// b = 0 || 20;
// b = 0 || null || "" || undefined;

// console.log(b);

// // ?? - Returns the right side operand when the left is null or undefined

// let c;

// c = 10 ?? 20;
// c = null ?? 20;
// c = undefined ?? 30;
// c = 0 ?? 30;
// c = "" ?? 30;

// console.log(c);

// let a = false;
// // if (!a) {
// //   a = 10;
// // }

// a = a || 10;

// console.log(a);

// let b =20;

// if(b) {
//     b =20;
// }

// b = b && 10

// console.log(b);

// let c = null;

// if(c === null || c === undefined) {
//     c =20;
// }

// c = c ?? 20;

// console.log(c);

// const age = 19;

// // Using an if statment

// if(age >= 18) {
//     console.log("you can vote! ");
// }else{
//     console.log("you cna not vote!");
// }

// // Using a ternary operator

// age >= 18 ? console.log('you can vote! '): console.log("you can not vote");

// // Assigning a conditional value to a variablr

// const canVote = age >= 18 ? true : false;

// console.log(canVote);

// // Multiple statements

// const auth = false;
// let redirect;

// if(auth) {
//     alert ('welcome to the dashboard');
//     redirect = "/dashboard"
// }else{
//     alert("Access Denied");
//     redirect = "/login";
// }

// // const redirect = auth
// // ? (alert("welcome to the dashbaord"), "/dashboard") : (alert ("Access Denied"), "/login");

// console.log(redirect);

// auth ? console.log("welcome to the dashboard") : null;

// auth && console.log("Welcome to the dashboadr");

// // Setup
// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };

//   // Only change code below this line
//   function updateRecords(records, id, prop, value) {
//     if (value !== "") {
//       if (prop !== "tracks") {
//         records[id][prop] = value;
//       } else {
//         if (!records[id].hasOwnProperty("tracks")) {
//           records[id]["tracks"] = [];
//         }
//         records[id]["tracks"].push(value);
//       }
//     } else {
//       if (prop === "tracks") {
//         delete records[id][prop];
//       } else {
//         delete records[id][prop];
//       }
//     }

//     return records;
//   }

//   updateRecords(recordCollection, 2548, 'tracks', '');

//   // Test to confirm
//   console.log(recordCollection[2548]);

// For Loop

// for (let i = 0; i <= 10; i++) {
//     if(i === 7) {
//         console.log("7 is my lucky number");
//     }else {
//         console.log("Number" + i);
//     }
// }

// Nest loops

// for (let i = 1; i <= 10; i++){
//     console.log("Number" + i);

//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// Loop through an array

// const names = ["nika", "luka", "mari", "ana"];

// for(let i =0; i < names.length; i++) {
//     if(names[i] === 'luka'){
//         console.log(`${names[i]} is best`);
//     } else {
//         console.log(names[i]);
//     }
// }

// for(let i = 0; i <= 20; i++) {
//     if (i === 15) {
//         console.log("breaking...");
//         break;
//     }
//     console.log(i);
// }

// Continue
// for(let i = 0; i <= 20; i++) {
//     if(i === 13) {
//         console.log("skipping 13...");
//     }

//     console.log(i);
// }

// let i = 0

// while(i <= 20) {
//  console.log("Number" + i);
//  i++
// }

// Loop over arrys
// const arr = [10, 20, 30, 40];

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }

// Nesting while loops

// while ( i <= 5) {
//     console.log("Number " + i);

//     let j = 1;
//     while (j <= 5) {
//         console.log(`${i} * ${j} = ${i * j}`);
//         j++;
//     }
//     i++;
// }

// do {
//     console.log("Number " + i);
//     i++
// } while (i <= 20 );

// for(let i = 0; i <= 100; i++) {

//     if (i % 15 === 0){
//         console.log(`${i} FizzBuzz`);
//     } else if (i % 3 === 0) {
//         console.log(`${i} Fizz`);
//     } else if (i % 5 === 0) {
//         console.log(`${i} Buzz`);
//     } else{
//         console.log(i);
//     }
// }

// while loop
// let j = 1;

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

// For of loop

const items = ["book", "table", "chair", "kite"];
const users = [{ name: "Brad" }, { name: "Luka" }, { name: "Nika" }];

// for (let i = 0; i < items.length; i++) {
//  console.log(items[i]);
// }

// for(const item of items) {
//     console.log(item);
// }

// for(const user of users){
//     console.log(user);
// }

// // Loop over string
// const str = "Hello world"

// for(const letter of str) {
//     console.log(letter);
// }

// // Loop over Maps
// const map = new Map();
// map.set("name", "John" );
// map.set("age", "30" );

// for(const [key, value] of map){
//     console.log(key, value);
// }

// For In Loop;

// const colorObj = {
//     color1: "red",
//     color2: "blue",
//     color3: "orange",
//     color4: "green",
// };

// for(const key in colorObj) {
//     console.log(key, colorObj[key]);
// }

// const colorarr = ["red" , "green", "blue", "yellow"];

// for(const color in colorarr) {
//     console.log(colorarr[color]);
// }

// ForEach

// const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];

// // console.log(socials.filter);

// // socials.forEach(function(item) {
// //     console.log(item);
// // });

// // socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// function logSocials(socials) {
//     console.log(socials);
// }

// socials.forEach(logSocials);

// const socialObjs = [
//     {name: "twitter", url: 'https://twitter.com'},
//     {name: "facebook", url: 'https://twitter.com'},
//     {name: "Linkedin", url: 'https://twitter.com'},
//     {name: "Instagram", url: 'https://twitter.com'},
// ];

// socialObjs.forEach((item) => console.log(item.url));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number){
//     return number % 9 === 0;
// })

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// let evenNumbers = [];
// numbers.forEach((number) => {
// if (number % 2 === 0) {
//     evenNumbers.push(number);
// }
// });

//  console.log(evenNumbers);

// FIllter
// const companies = [
//   { name: "Company A", category: "Technology", start: 2005, end: 2021 },
//   { name: "Company B", category: "Retail", start: 2010, end: 2022 },
//   { name: "Company C", category: "Healthcare", start: 2002, end: 2023 },
//   { name: "Company D", category: "Retail", start: 2012, end: 2020 },
//   { name: "Company E", category: "Automotive", start: 2008, end: 2024 },
//   { name: "Company F", category: "Entertainment", start: 2015, end: 2023 },
//   { name: "Company G", category: "Retail", start: 1998, end: 2019 },
//   { name: "Company H", category: "Education", start: 2007, end: 2022 },
//   { name: "Company I", category: "Agriculture", start: 2011, end: 2023 },
// ];

// // const category = companies.filter((company) => company.category === "Retail");
// // const companiesAge = companies.filter((startEnd) => startEnd.start >= 1980 && startEnd.end <= 2021);
// const range = companies.filter((ranges) => ranges.end - ranges.start >= 10);

// console.log(range);

// Map

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const doubledNumbers = numbers.map((number) => number * 2);

// // console.log(doubledNumbers);

// // // Samw with forEach

// // const doubledNumbers2 =[]
// // numbers.forEach((number) => {
// //     doubledNumbers2.push(number * 2)
// // });

// // console.log(doubledNumbers2);

// const companies = [
//   {
//     name: "Tech Innovators Inc.",
//     category: "Technology",
//     start: 2005,
//     end: 2021,
//   },
//   { name: "Retail Rendezvous", category: "Retail", start: 2010, end: 2022 },
//   {
//     name: "HealthTech Solutions",
//     category: "Healthcare",
//     start: 2002,
//     end: 2023,
//   },
//   {
//     name: "Digital Dynamics Ltd.",
//     category: "Technology",
//     start: 2012,
//     end: 2020,
//   },
//   { name: "AutoTech Systems", category: "Automotive", start: 2008, end: 2024 },
//   {
//     name: "Entertainify Studios",
//     category: "Entertainment",
//     start: 2015,
//     end: 2023,
//   },
//   { name: "Global Emporium", category: "Retail", start: 1998, end: 2019 },
//   { name: "EduWise Solutions", category: "Education", start: 2007, end: 2022 },
//   { name: "AgriGenius Farms", category: "Agriculture", start: 2011, end: 2023 },
// ];

// //   Create an array of company names

// // const name = companies.map((names) => names.name);

// // Create an array with just company and castegory

// const company = companies.map((categorys) => {
//   return {
//     name: categorys.name,
//     category: categorys.category,
//   };
// });

// // Create an array of the length of each company in years
// const companyYears = companies.map((years) => {
//   return {
//     name: years.name,
//     length: years.end - years.start + "years",
//   };
// });

// // Chain map methods
// const squareAndDouble = numbers
//   .map((number) => Math.sqrt(number))
//   .map((sqrt) => sqrt * 2);

// const squareAndDouble2 = numbers
//   .map(function (number) {
//     return Math.sqrt(number);
//   })
//   .map(function (sqtr) {
//     return sqtr * 2;
//   })
//   .map(function (sqrtDoubled) {
//     return sqrtDoubled * 3;
//   });

// // Chaining different methods
// const evenDouble = numbers
// .filter((number) => number % 2 === 0)
// .map((number) => number * 2);

// console.log(evenDouble);

// Reduce

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function (accumulator, currentValue) {
// return accumulator + currentValue;
// }, 0);

// const sum = numbers.reduce((acc, cur) => acc + cur, 0)

// Using a for loop

// const sum3 = () => {
//     let acc  = 0;
//     for (const cur of numbers) {
//         acc = acc + cur
//     }
//     return acc;
// }

// console.log(sum3());

// const cart = [
//     {id: 1, name: "product 1", price: 130},
//     {id: 2, name: "product 2", price: 150},
//     {id: 3, name: "product 3", price: 175},
// ]

// const total = cart.reduce(function(acc, product ) {
//     return acc + product.price;
// }, 0);

// console.log(total);

// first challange

// const people = [
//     { firstname: "John", lastname: "Doe", email: "john.doe@example.com", phone: "555-1234", age: 23 },
//     { firstname: "Jane", lastname: "Smith", email: "jane.smith@example.com", phone: "555-5678", age: 19 },
//     { firstname: "Alice", lastname: "Johnson", email: "alice.johnson@example.com", phone: "555-9876", age: 35 },
//     { firstname: "Bob", lastname: "Williams", email: "bob.williams@example.com", phone: "555-4321", age: 28 },
//     { firstname: "Eva", lastname: "Brown", email: "eva.brown@example.com", phone: "555-8765", age: 22 },
//   ];

//   const totalAge = people.filter((ages) => ages.age < 25).map((youngPersone) => {
//         return{
//             name: youngPersone.firstname + " " + youngPersone.lastname ,
//             email: youngPersone.email,
//         }
//     });

//   console.log(totalAge);

// second challange

// const numbers = [2, -30, 50, 20, -12, -9, 7];

// const num = numbers.filter((number) => number > 0).reduce((acc, cur) => acc + cur, 0);

// console.log(num);

// Third challange

// const words = ["coder", "programmer", "developer"];

// const capitalizeWords = words.map((word) => word.charAt(0).toUpperCase() + word.split(0));

// console.log(capitalizeWords);

// function findLongestWordLength(str) {
//     let words = str.split(' ');
//     let maxLength = 0;

//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//       }
//     }

//     return maxLength;
//   }
//   console.log(str);

//   const word = "nika luka ffafa faf affas";

//   let maxLength = 0;
//   let words = word.split(" ");

//   for(let i = 0; i < words.length; i++) {
//     if(words[i].length > maxLength) {
//         maxLength = words[i]
//     }
//   }

//   console.log(maxLength);
 

// const people = [
//     { firstname: "John", lastname: "Doe", email: "john.doe@example.com", phone: "555-1234", age: 23 },
//     { firstname: "Jane", lastname: "Smith", email: "jane.smith@example.com", phone: "555-5678", age: 19 },
//     { firstname: "Alice", lastname: "Johnson", email: "alice.johnson@example.com", phone: "555-9876", age: 35 },
//     { firstname: "Bob", lastname: "Williams", email: "bob.williams@example.com", phone: "555-4321", age: 28 },
//     { firstname: "Eva", lastname: "Brown", email: "eva.brown@example.com", phone: "555-8765", age: 22 },
//   ];

//  const youngPeople = people
//  .filter((person) => person.age <= 25)
//  .map((person) =>  ({
//   name: person.firstname + " " + person.lastname,
//   email: person.email, 
//  }));

//  console.log(youngPeople);

// const number = [2, -30, 50, 20, -12, -9, 7]
 

// const numbers = number
// .filter((num) => num > 0)
// .reduce((acc, cur) => acc + cur, 0)

// console.log(numbers);

// const words = ["coder", "programmer", "developer"];

// const upperCaseWoeds = words.map((word) => {
//   return word[0].toUpperCase() + word.slice(1) 
// })

// console.log(upperCaseWoeds);
