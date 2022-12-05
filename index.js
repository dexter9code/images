"use strict";

// Promises
// let userData;
// const user = function (url) {
//   fetch(url)
//     .then((res) => {
//       if (!res.ok) throw Error(`Something is not right ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       userData = data;
//     })
//     .catch((err) => console.log(`error = ${err.message}`));
// };

// user(`https://jsonplaceholder.typicode.com/users`);

// const wait = function (timer) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, timer * 1000);
//   });
// };

// wait(3)
//   .then(() => {
//     console.log(`I waited for 3 sec`);
//     return wait(2);
//   })
//   .then(() => console.log(`i waited for 5 sec `));

// coding challenges

// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// const bmi = function (weight, height) {
//   if (Number(weight) && Number(height) === 0)
//     return `Invalid Weight or Height `;
//   else if (typeof weight && typeof height === "number") {
//     const bmi = weight / height ** 2;
//     bmi.toFixed(2);
//   }
// };

// console.log(
//   `Data 1:- the person who has higher BMI is ${
//     bmi(78, 1.69) > bmi(92, 1.95) ? `Mark` : `John`
//   }`
// );
// console.log(
//   `Data 2:- the person who has higher BMI is ${
//     bmi(95, 1.88) > bmi(85, 1.76) ? `Mark` : `John`
//   }`
// );

///////
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//total elements / length

// const score = 100;
// const average = function (arr) {
//   const av = arr.reduce(function (acc, value, _, arry) {
//     return acc + value;
//   });
//   return (av / arr.length).toFixed(2);
// };

//1.
// const dolphins = average([96, 108, 89]);
// console.log(dolphins);
// const koalas = average([88, 91, 110]);
// console.log(koalas);

//2.
// const dolphins = average([97, 112, 101]);
// console.log(dolphins);
// const koalas = average([109, 95, 123]);
// console.log(koalas);

//3.
// const dolphins = average([97, 112, 101]);
// console.log(dolphins);
// const koalas = average([109, 95, 106]);
// console.log(koalas);

// if (dolphins >= score && dolphins > koalas) {
//   console.log(`Team Dolphins wins`);
// } else if (koalas >= score && koalas > dolphins) {
//   console.log(`Team Kolas wins`);
// } else if (dolphins === koalas && dolphins >= score && koalas >= score) {
//   console.log(`Match draws`);
// } else {
//   console.log(`No Teams Wins`);
// }

///////////////////
// Data 1: Test for bill values 275, 40 and 430

// const calTip = function (bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   console.log(
//     `Your bill was ${bill}$ and tip ${tip}$ so total bill is ${bill + tip}$`
//   );
// };

// calTip(275);
// calTip(40);
// calTip(430);

////////////////////////////
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// const calcAverage = (arr) => {
//   const total = arr.reduce((acc, value) => acc + value, 0);
//   return total / arr.length;
// };

// // console.log(calcAverage([44, 23, 71]));
// // game 1
// const avgOfDol = calcAverage([44, 23, 71]);
// const avgOfkol = calcAverage([65, 54, 49]);

// // game 2
// const avgOfDol2 = calcAverage([85, 54, 41]);
// const avgOfKol2 = calcAverage([23, 34, 27]);

// const checkWinners = function (avgDol, avgKol) {
//   const winner =
//     avgDol >= 2 * avgKol
//       ? `Team Dolphins wins by ${avgDol} vs ${avgKol}`
//       : `Team koolas wins by ${avgKol} vs ${avgDol}`;
//   console.log(winner);
// };

// // result of game 1
// checkWinners(avgOfDol, avgOfkol);
// // result of game 2
// checkWinners(avgOfDol2, avgOfKol2);

/////////////////////////
// Test data: 125, 555 and 44

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];

// const total = bills.map(function (bill, i) {
//   return bill + tips[i];
// });

// console.log("bills array", bills);
// console.log("tips array", tips);
// console.log("total array with (bill+tips)", total);

///////////////////////////
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

// const mark = {
//   name: `Mark Miller`,
//   mass: 78,
//   height: 1.69,
//   calcBMI() {
//     this.bmi = this.mass / this.height ** 2;
//     this.bmi;
//   },
// };
// const john = {
//   name: `John Smith`,
//   mass: 92,
//   height: 1.95,
// };

// mark.calcBMI();
// const cal = mark.calcBMI;
// cal.call(john);

// console.log(
//   `John BMI ${john.bmi.toFixed(
//     2
//   )} which is lower than Mark's BMI ${mark.bmi.toFixed(2)}`
// );

////////////////////////////
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calTip = function (arrBill) {
//   arrBill.forEach((bill) => {
//     const tip = bill >= 50 && bill >= 300 ? bill * 0.15 : bill * 0.2;
//     tips.push(tip);
//     totals.push(tip + bill);
//   });
// };

// calTip(bills);
// console.log(tips);

// let tip = 0;
// let billTotal = 0;

// const calcAverage = function (arr) {
//   tip = 0;
//   arr.forEach((value, _, arry) => {
//     return (tip += value);
//   });
//   return tip / arr.length;
// };

// console.log(calcAverage(tips));
// console.log(calcAverage(totals));

///////////////////////////
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

// const printForecast = function (arry) {
//   arry.forEach((temp, i) => console.log(`${temp}c in ${i + 1} day`));
// };
// const Data1 = [17, 21, 23];
// const Data2 = [12, 5, -5, 0, 4];
// printForecast(Data1);
// console.log(`----------------------------data2-----------------------------`);
// printForecast(Data2);

////////////////////////////////////

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// game.scored.forEach((player, i) => console.log(`Goal ${i + 1}: ${player}`));

// ///2
// const values = Object.values(game.odds);
// console.log(values);
// const total = values.reduce((acc, value) => acc + value, 0);
// console.log(total / values.length);

// ////3.
// const printTeams = function (team) {
//   return console.log(`Odd of victory ${game[team]}: ${game.odds[team]}`);
// };

// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(
//     `${game[team] ? `odd of Victory ${game[team]}` : `odd of draw x`} is ${odd}`
//   );
// }

// printTeams("team1");
// console.log(`Odd of draw: ${game.odds.x}`);
// printTeams("team2");

/////4

// const scores = new Map();
// scores.set("Gnarby", 1);
// scores.set("Hummels", 1);
// scores.set("lewandowski", 2);
// console.log(scores);

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// for(const v of values){

// }

// //1
// const [player1, player2] = game.players;
// console.log(player1);
// console.log(player2);

// //2.
// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// //3.
// const totalPlayers = player1.concat(player2);
// console.log(totalPlayers);

// //4.
// const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// //5.
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

//6.
// const printGoals = function (...players) {
//   let score = 1;
//   players.forEach((player, i, aryy) => {
//     score = 1;
//     aryy[i + 1].includes(player) >= 2 ? score++ : score;
//     console.log(`${player} scored ${score}`);
//   });
// };
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich", "Muller");

////////////////////////////

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "� Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "� Substitution"],
//   [64, "� Yellow card"],
//   [69, "� Red card"],
//   [70, "� Substitution"],
//   [72, "� Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "� Yellow card"],
// ]);

// const events = new Set([]);
// for (const [i, v] of gameEvents) {
//   events.add(v);
// }

// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(`A Event happends an average of ${90 / gameEvents.size} minutes`);

// for (const [index, value] of gameEvents) {
//   const str = index <= 45 ? `First Half` : `Second Half`;
//   console.log(`[${str}] ${index} : ${value}`);
// }

///////////////////////////////////

// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

// const camelCase = function (word) {
//   const [fist, second] = word.trim().toLowerCase().split("_");
//   return console.log(
//     `${fist}${second.replace(second[0], second[0].toUpperCase())}`
//   );
// };

// camelCase(" underscore_case");
// camelCase(" first_name");
// camelCase(" Some_Variable");
// camelCase("  calculate_AGE");

// const convertString = function (str) {
//   let splitedChar = [];
//   const small = str.trim().toLowerCase().split("_");
//   for (const [i, v] of small.entries()) {
//     splitedChar.push(v[0].toUpperCase() + v.slice(1));
//   }
//   console.log(splitedChar.join(""));
// };

// convertString(" underscore_case");
// convertString(" first_name");
// convertString(" Some_Variable");
// convertString("  calculate_AGE");

// function myFunction(obj) {
//   let answer;
//   for (const [index, value] of Object.entries(obj)) {
//     if (index === "country") return (answer = value);
//   }
//   return answer;
// }
// console.log(myFunction({ continent: "Asia", country: "Japan" }));
// console.log(myFunction({ country: "Sweden", continent: "Europe" }));

// function myFunction(str) {
//   return str.slice(-3);
// }
// console.log(myFunction("abcdefg"));

// function count() {
//   let counter = 0;
//   return function () {
//     return (counter += 1);
//   };
// }

// const first = count();
// console.log(first());

// const greet = function (greet) {
//   return function (name) {
//     console.log(`${greet} Mr.${name}`);
//   };
// };

// const first = greet("Hey");
// first("Jack Martin");

// const hotel1 = {
//   name: "Hotel Del Luna",
//   owner: "Ghost",
//   tax: 0.18,
//   prices(price) {
//     const total = price * this.tax;
//     return price + total;
//   },
// };
// const hotel2 = {
//   name: "Hotel Moon Star",
//   owner: "Ghost",
//   tax: 0.2,
// };

// console.log(hotel1.prices(5000));
// const calTax = hotel1.prices.bind(hotel2);

// console.log(calTax(100));
// console.log(hotel1.prices.call(hotel2, 100));

// const alphatOrder = function (arry) {
//   arry.sort(function (prev, next) {
//     if (prev > next) return 1;
//     if (prev < next) return -1;
//   });
// };

// const data = [2, 4, 1, 5, 1, 4, 9];
// const aplt = ["a", "c", "e", "b", "a"];

// alphatOrder(data);
// console.log(data);

// alphatOrder(aplt);
// console.log(aplt);
// console.log("23" + 5 - "5");

// const poll = {
//   question: "What is your favourite programming language ?",
//   options: [1, 2, 3, 4],
//   answers: [0, 0, 0, 0],
//   replies: ["Correct", "TryAgain"],
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}
//          0: JavaScript
//          1: Python
//          2: Rust
//          3: C++
//         (Write option number)`)
//     );
//     if (typeof answer === "number" && answer <= 4) {
//       this.answers[answer] += 1;
//     } else {
//       alert(`Inavlid answer is provided`);
//     }
//     this.displayResult("string");
//   },

//   displayResult(ans = "array") {
//     ans === "array"
//       ? console.log(this.answers)
//       : console.log(`Poll result are ${this.answers.join(",")}`);
//   },
// };

// document
//   .querySelector(".testPoll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResult("string");

/////////////////////////////
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function (arr1, arr2) {
//   const copyarr1 = arr1.slice();
//   copyarr1.splice(0, 1);
//   copyarr1.splice(-2, 2);
//   const combineArr = copyarr1.concat(arr2);

//   combineArr.forEach((element, index) => {
//     console.log(
//       `${
//         element >= 3
//           ? `Dog Number ${index} is an adult`
//           : `Dog Number ${index} is still a puppy`
//       }`
//     );
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log(`-----------------------test -2-------------------`);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = function (arr) {
//   let dogadult = [];
//   arr.forEach((value, index) => {
//     if (value > 2) {
//       dogadult.push(value * 4 + 16);
//     } else {
//       dogadult.push(value * 2);
//     }
//   });

//   const averageAge = dogadult
//     .filter((age) => age >= 18)
//     .reduce((acc, value, _, arr) => acc + value / arr.length, 0);
//   return console.log(
//     `Average Human age of Adult dog is ${averageAge.toFixed(0)} years old`
//   );
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

////////////////////////////////////////

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// dogs.forEach(function (value, index) {
//   value.recommendedPortion = Math.trunc(value.weight ** 0.75 * 28);
// });
// console.log(dogs[0]);

// dogs.forEach((value) => {
//   if (value.owners.includes("Sarah")) {
//     console.log(
//       `Your dogs recommended food is ${
//         value.recommendedPortion
//       } and your eats ${value.curFood} so your dogs is ${
//         value.curFood > value.recommendedPortion
//           ? `Eating too Much`
//           : `Eating okay`
//       }`
//     );
//   }
// });

// const ownersEatTooMuch = dogs
//   .filter((value) => value.curFood > value.recommendedPortion)
//   .map((owner) => owner.owners);
// const ownersEatTooLittle = dogs
//   .filter((value) => {
//     return value.curFood < value.recommendedPortion;
//   })
//   .map((owner) => owner.owners);

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

// const tooStr = ownersEatTooMuch.flat().join(" and ");
// const littleStr = ownersEatTooLittle.flat().join(" and ");
// console.log(`${tooStr} Dogs eat too much`);
// console.log(`${littleStr} Dogs eat too little`);

// console.log(dogs.some((value) => value.curFood === value.recommendedPortion));
// console.log(
//   dogs.some(
//     (value) =>
//       value.curFood > value.recommendedPortion * 0.9 &&
//       value.curFood < value.recommendedPortion * 1.1
//   )
// );
// const item = dogs.filter(
//   (value) =>
//     value.curFood > value.recommendedPortion * 0.9 &&
//     value.curFood < value.recommendedPortion * 1.1
// );
// console.log(item);

// const dogsCopy = dogs.slice();
// console.log(dogsCopy);

// dogsCopy.sort(function (preValue, nextValue) {
//   if (preValue.recommendedPortion > nextValue.recommendedPortion) return 1;
//   if (preValue.recommendedPortion < nextValue.recommendedPortion) return -1;
// });

// console.log(dogsCopy);

//////////////////////////////

// Classes

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Acceleration is applied ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Break is applied ${this.brake}`);
// };

// const car1 = new Car("BMW", 120);
// console.log(car1);

// car1.accelerate();
// car1.accelerate();
// car1.accelerate();

// console.log(car1);

// car1.brake();
// car1.brake();

// console.log(car1);

// class CarCl {
//   constructor(model, speed) {
//     this.model = model;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`Speed is increased ${this.speed}`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`Speed is descred ${this.speed}`);
//   }

//   get speedUS() {
//     return console.log(`speed in miles ${this.speed / (1.6).toFixed(2)} mi/h`);
//   }

//   set speedUS(speedKm) {
//     return console.log(`speed in km ${speedKm * 1.6} km/hr`);
//   }
// }

// const car1 = new CarCl("Ford", 120);
// console.log(car1);

// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.speedUS;
// car1.speedUS = 84.375;

// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// Person.prototype.calAge = function () {
//   return 2022 - this.age;
// };

// const Student = function (name, age, course) {
//   Person.call(this, name, age);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.greet = function () {
//   console.log(
//     `Hello iam ${this.name} i am ${this.calAge()} years old studing ${
//       this.course
//     }`
//   );
// };

// const mickey = new Student("Mickey", 1998, "Computer-Science");
// console.log(mickey);

// console.log(mickey.greet());

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student("Mike", 2020, "Computer Science");
// mike.introduce();
// mike.calcAge();

// const Car = function (model, speed) {
//   this.model = model;
//   this.speed = speed;
// };

// Car.prototype.accelrate = function () {
//   return (this.speed += 10);
// };
// Car.prototype.break = function () {
//   return (this.speed -= 5);
// };

// const Ev = function (model, speed, battery) {
//   Car.call(this, model, speed);
//   this.battery = battery;
// };

// Ev.prototype = Object.create(Car.prototype);
// Ev.prototype.chargeBattery = function (charge) {
//   this.battery += charge;
// };

// Ev.prototype.accelrate = function () {
//   this.speed += 10;
//   this.battery--;
//   console.log(
//     `${this.model} going at ${this.speed}km/hr with a charge of ${this.battery}%`
//   );
// };

// const tesla = new Ev("Tesla", 120, 23);
// console.log(tesla);

// tesla.accelrate();
// tesla.accelrate();

// tesla.chargeBattery(15);
// tesla.accelrate();
// tesla.break();
// console.log(tesla);

// challenge
// myFunction({a:1,b:2,c:3},'b')
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

// const checkForTrue = function (obj, str) {
//   let val = false;
//   Object.entries(obj).forEach((value) => {
//     if (value[0] === str && Boolean(value[1])) {
//       val = true;
//     }
//   });
//   return val;
// };

// const ans = checkForTrue({ a: 1, b: 2, c: 3 }, "b");
// const ans2 = checkForTrue({ a: undefined, b: 2, c: 3 }, "a");
// console.log(ans);
// console.log(ans2);

// const captialName = function (str) {
//   const value = str.split(" ");
//   const upper = [];
//   for (const val of value) {
//     // upper.push(val[0].toUpperCase() + val.slice(1));
//     upper.push(val.replace(val[0], val[0].toUpperCase()));
//   }
//   console.log(upper.join(" "));
// };

// captialName("gaurav Singh");

/// challenge 2
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
// myFunction({x:'a',y:'b',z:undefined},'z')
// {x:'a',y:'b',z:'c'},'a'

// const myFunction = function (a, b) {
//   let val = false;
//   Object.entries(a).forEach((value) => {
//     if (value[0] === b) return (val = true);
//   });
//   return val;
// };

// const ans1 = myFunction({ a: 1, b: 2, c: 3 }, "b");
// // const ans1 = myFunction({ x: "a", y: "b", z: "c" }, "a");
// // const ans1 = myFunction({ x: "a", y: "b", z: undefined }, "z");
// console.log(ans1);

// const takeLast = function (str) {
//   return str.splice(3);
// };
// console.log(takeLast([1, 2, 3]));

// const addTax = function (tax, value) {
//   return value + value * tax;
// };

// const addVat = addTax.bind(null, 0.18);
// console.log(addVat(500));

// const test = [3, 4, 56, 58, 3];
// console.log(test.at(-1));
// console.log(test.find((value) => value > 50));

// const time = new Date();
// console.log(time);
// const time2 = Date.now();
// console.log(time2, new Date(time2));
// console.log(time2.__proto__.__proto__);

// class Car {
//   constructor(model, year) {
//     this.model = model;
//     this.year = year;
//   }
//   clcYear() {
//     return 2022 - this.year;
//   }
// }

// const telsa = new Car("Telsa", 2019);

// console.log(telsa.__proto__);

// const Person = {
//   calAge() {
//     console.log(`Your age is ${2022 - this.year}`);
//   },
// };

// const sam = Object.create(Person);
// (sam.name = "Sam"), (sam.year = 1999);
// sam.calAge();
// console.log(sam);

// class Person {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   calAge() {
//     return 2022 - this.year;
//   }
// }

// class Student extends Person {
//   constructor(name, year, course) {
//     super(name, year);
//     this.course = course;
//   }
//   Course() {
//     console.log(
//       `Hey i am ${this.name} age ${this.calAge()} studing ${this.course}`
//     );
//   }
// }

// const john = new Student("John", 1999, "Computer-Science");
// console.log(john);
// john.Course();
// console.log(john.calAge());

// const me = {
//   name: `John Wick`,
//   age: 32,
//   hobbies: "gun",
// };

// for (const i in me) {
//   console.log(me[i]);
// }

// Making a promise

// const lottery = new Promise(function (resolve, reject) {
//   if (Math.random() * 6 + 1 >= 3) {
//     resolve(`You win the game`);
//   } else {
//     reject(`You lose`);
//   }
// });

// lottery.then((res) => console.log(res)).catch((err) => console.log(err));

// const check = function () {
//   console.log(x);
//   var x = 1;
// };

// check();
// check();

// let x = 6 % 2;
// const y = x ? "odd" : "even";
// console.log(y);

// const romanToInt = function (s) {
//   let output = 0;
//   const roman = {
//     i: 1,
//     v: 5,
//     x: 10,
//     l: 50,
//     c: 100,
//     d: 500,
//     m: 1000,
//   };
//   const va = s.toLowerCase().split("");
//   va.forEach((element) => {
//     output += roman[element];
//   });
//   return output;
// };

// console.log(romanToInt("LVIII"));

// const addOrder = function (arr1, arr2) {
//   // const revArr2 = arr2.reverse();
//   let newArr = [];
//   let carry1 = 0;
//   let carry2 = 0;
//   let carry3 = 0;

//   arr1.forEach((el, i) => {
//     let sum = 0;
//     let val = 0;
//     val = el + arr2[i];
//     if (val + carry2 + carry3 >= 10) {
//       carry1 = Math.floor((val + carry2 + carry3) / 10); //1
//       carry3 = carry1;
//       sum = (val + carry2 + carry3) % 10; //8
//       newArr.push(sum);
//       carry2 = 0;
//     } else {
//       if (val + carry1 >= 10) {
//         carry2 = Math.floor((val + carry1) / 10);
//         sum = (val + carry1) % 10;
//         newArr.push(sum);
//         carry1 = 0;
//       }
//     }
//   });
//   return newArr;
// };

// // const val1 = [2, 5, 3];
// // const val2 = [5, 6, 4];
// const val1 = [9, 9, 9, 9, 9, 9, 9];
// const val2 = [9, 9, 9, 9];
// console.log(addOrder(val1, val2));
// // [7,0,8]
// // [8,9,9,9,0,0,0,1]

// const lengthOfLongestSubString = function (str) {
//   const newStr = str.split("");
//   const finalStr = new Set(newStr);
//   finalStr.delete(1);
//   return finalStr.size;
// };

// console.log(lengthOfLongestSubString("pwwkew"));
// console.log(lengthOfLongestSubString("abcabcbb"));

// const checkPalindrome = function (str) {
//   const strArr = str.toLowerCase();
//   const revArr = str.toLowerCase().split("").reverse();
//   return revArr.join("") === strArr ? `palindrome` : `No-palindrome`;
// };

// console.log(checkPalindrome("gaurav"));
// console.log(checkPalindrome("Nitin"));

// Nullish coalesing operator

// const resturant = {
//   name: `Jovani-Pizza`,
//   numberOfGuest: 0,
//   menu: [`Olive-oil-pizza`, `Chesse-Pizza`, `Morizzela-Pizza`],
// };

// console.log(resturant.numberOfGuest ?? 12);

// let resdata = {};
// for (const [i, item] of resturant.menu.entries()) {
//   resdata[i] = item;
// }
// console.log(resdata);

// for (const items in resturant) {
//   console.log(`${items}: ${resturant[items]}`);
// }

// const objArr = Object.entries(resturant);
// console.log(objArr);

// sets and map

// const newArr = [3, 9, 2, 4, 2, 15, 3, 5, 4];
// const uniqueNumb = new Set(newArr);
// console.log(uniqueNumb.has(3));

// const questions = new Map([
//   [1, `Favourtie Language?`],
//   [2, true],
// ]);

// console.log(questions);

// const newObj = {};
// for (const [i, item] of questions) {
//   newObj[typeof item] = item;
// }

// console.log(newObj);

// const plane = `Airbus787`;

// console.log(plane.slice(0, 6));

// const convertToUpper = function (str) {
//   const [first, last] = str.toLowerCase().split(" ");
//   const firstOfFirst = first.slice(0, 1);
//   const restOfFirst = first.slice(1, first.length);
//   const firstOfLast = last.slice(0, 1);
//   const restOfLast = last.slice(1, last.length);
//   const firstName = firstOfFirst.toUpperCase() + restOfFirst;
//   const lastName = firstOfLast.toUpperCase() + restOfLast;
//   const final = firstName.concat(" ", lastName);
//   return final;
// };

// const convertToUpper = function (str) {
//   const arryStr = str.toLowerCase().split(" ");
//   arryStr.forEach((e, i, arr) => {
//     arr[i] = arr[i][0].toUpperCase() + e.slice(1, e.length);
//   });
//   return arryStr.join(" ");
// };

// const result = convertToUpper(`harry potter`);
// console.log(result);

// const firstUpperWord = function (Str) {
//   const [first, ...others] = Str.toLowerCase().split("");
//   return [first.toUpperCase(), ...others].join("");
// };

// console.log(firstUpperWord(`harry`));

//  Call & Bind

// const Airlines = {
//   name: `Indigo`,
//   iataCode: `IG`,
//   bookings: [],

//   book(name, flightNo, code) {
//     this.bookings.push({
//       bookingTime: new Date(),
//       name,
//       flightNo,
//       flightCode: code,
//     });
//   },
// };

// const AirIndia = {
//   name: `AirInida`,
//   iataCode: `AI`,
//   bookings: [],
// };

// Airlines.book(`John`, 522, `IG`);
// console.log(Airlines);
// const bookTicket = Airlines.book;
// // bookTicket.call(AirIndia, `John`, 522, `AI`);
// const bindcall = bookTicket.bind(AirIndia);
// bindcall(`John`, 522, `AI`);
// bindcall(`Aisha`, 514, `AI`);
// console.log(AirIndia);

// const calTax = function (tax, value) {
//   return value + value * tax;
// };

// const calVat = calTax.bind(null, 0.18);
// console.log(calVat(10));

// const testArry = ["h", "a", "r", "r", "y"];
// const movements = [-550, 100, -200, 5000, 800];
// const copyArr = testArry.slice();
// copyArr.splice(2, copyArr.length);
// console.log(copyArr.at(-1));

// const value = movements.find((item) => item > 500);
// const valueIndex = movements.findIndex((item) => item > 500);
// const someValue = movements.some((item) => item > 500);
// const everyValue = movements.every((item) => item > 500);
// console.log(value);
// console.log(valueIndex);
// console.log(everyValue);

// const changeInc = function (str) {
//   const strArr = str.split("");
//   return strArr
//     .sort((a, b) => {
//       if (a > b) return 1;
//       if (a < b) return -1;
//     })
//     .join("");
// };
// console.log(changeInc("132"));

// class Human {
//   constructor(fullName, year) {
//     this.fullName = fullName;
//     this.year = year;
//   }

//   set fullName(name) {
//     if (name.trim().length > 3) {
//       this._name = name;
//     } else {
//       alert(`Invalid name`);
//     }
//   }

//   get fullName() {
//     return this._name;
//   }
// }

// class Person extends Human {
//   constructor(fullName, age, happy) {
//     super(fullName, age);
//     this.isHappy = happy;
//   }

//   calAge() {
//     return 2022 - this.year;
//   }
// }

// const mickey = new Person(`mickey`, 1999, false);
// console.log(mickey.calAge());
// console.log(mickey.fullName);

// class Bank {
//   #movements = [];
//   #pin;
//   constructor(owner, moneyTye, pin) {
//     this.name = owner;
//     this.currency = moneyTye;
//     this.#pin = pin;
//   }

//   addMoney(val) {
//     if (val > 0) this.#movements.push(val);
//   }

//   resetPin(oldPin, newPin) {
//     if (this.#pin === oldPin) {
//       this.#pin = newPin;
//     } else {
//       console.log(`Invalid pin provided`);
//     }
//   }
// }

// const account1 = new Bank(`John mayer`, `dollar`, 5454);
// account1.addMoney(500);
// account1.resetPin(5454, 1212);
// console.log(account1);

// const obj1 = {
//   name: `John Mayer`,
//   age: 30,
//   hobbies: [`gaming`, `eating`, `coding`],
// };

// for (const val in obj1) {
//   if (typeof obj1[val] === "object") {
//     const value = obj1[val].filter((item) => item !== "eating");
//     console.log(value);
//   }
// }

// let v = 0;

// const check = new Promise((resolve, rejcet) => {
//   for (let i = 0; i < 1000100000; i++) {
//     v += i;
//   }
//   resolve(v);
// });

// async function waitingValue(params) {
//   const res = await check;
//   console.log(res);
// }

// waitingValue();

// setTimeout(() => {
//   console.log(`sheeesh`);
// }, 200);

// const testArry = [`john`, `pohci`, `denji`];

// const newArr = [...testArry, `makima`, `power`, `razi`];
// console.log(newArr);

// function randomFun(...str) {
//   str.forEach((element) => {
//     if (element === "john") console.log(`Jod ho kya`);
//   });
// }

// randomFun(`akhil`, `mayer`, "john");

// leetcode solution->1
// var twoSum = function (nums, target) {
//   let count = [];
//   let is_Correct = Math.trunc(Math.random() * 10);

//   const length_of_input = nums.length;

//   while (is_Correct !== target) {
//     console.log("ruunig");
//     if (count.length > 0) {
//       break;
//     }

//     const random_number1 = Math.trunc(Math.random() * length_of_input);
//     const random_number2 = Math.trunc(Math.random() * length_of_input);

//     if (random_number1 === random_number2) {
//       continue;
//     }

//     const value1 = nums[random_number1];
//     const value2 = nums[random_number2];
//     const sum = value1 + value2;

//     if (sum === target) {
//       count.push(random_number1);
//       count.push(random_number2);
//       is_Correct = target;
//     }
//   }
//   count.sort((a, b) => a - b);

//   return count;
// };
// var twoSum = function (nums, target) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };

// const result = twoSum([3, 3], 6);

// console.log(result);

// Linked List

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

class Node {
  constructor(head) {
    this.head = {
      value: head,
      next: null,
    };
    this.tail = this.head;
    this.size = 0;
  }

  addNode(value) {
    let newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }
}

const l1 = new Node(100);
l1.addNode(200);
l1.addNode(300);
l1.addNode(400);
l1.addNode(500);
console.log(l1);
