/*
values and variables

let js = 'amazing';
if (js === 'amazing') alert('JavaScript is Fun!');

40+8+23-10;
console.log(40+8+23-10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda"
let firstnamePerson
let First_Name_Person

console.log(firstName);
console.log(firstName);
console.log(firstName);


let 3years = 3;  Uncaught SystaxError: Invalid or unexpected token

let jonas&Matilda = "JM"; // error

let new = "JM"  error

let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';


console.log(myFirstJob);


OBJECTS AND PRIMITIVE

VALUE => OBJECT OR PRIMITIVE



  Object

  1. let me = {
        name: 'Jonas'
  }

  Primitive

 let firstname = 'Jonas';
 let age = 30;

There are 7 Primitive Data Types

1. Numbers: Floating point numbers => used for decimals and integers let age = 23;
2. String: Sequence of characters => used for text let firstName = 'Jonas';
3. Boolean: Logical type that can only be true or false => Used for taking decision let fullAge = true;
4. Undefined: Value taken by a variable that is not yet defined ('empty value')
5. Null: Also means 'empty value'
6.Symbol (ES2015): Value that is unique and cannot be changed [not useful for now]
7. BigInt(ES2020): Larger integers than the number type can hold




comments :
Variable name convertions
true;
console.log(true)

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Jonas');


Dynamic typing


javascriptIsFun = 'Yes!';
console.log(javascriptIsFun)
console.log( typeof javascriptIsFun)


let year;
console.log(year);
console.log( typeof year);

year = 1991;

console.log(year);
console.log( typeof year);


console.log(typeof null);



let age = 30;
age = 31;
console.log(age);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

//console.log(25-10-5);

let x,y;

x = y = 25- 10 -5;
console.log(x,y)

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀


1. Store Mark's and John's mass and height in variables

let markWeight,markHeight,johnWeight,johnHeight,markBmi,johnBmi,markHeigherBmi ;

markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;
console.log(markHeight,markWeight,johnHeight,johnWeight);

BMI = mass / height ** 2 = mass / (height * height)
BMI = (184 ÷ 702) * 703
markBmi =  markWeight/ markHeight ** 2 ;

johnBmi = johnWeight/johnHeight ** 2;
console.log(markBmi,johnBmi);

markHeigherBmi = markBmi > johnBmi ;
console.log(markHeigherBmi);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBmi =  markWeight/ markHeight ** 2 ;
johnBmi = johnWeight/johnHeight ** 2;
console.log(markBmi,johnBmi);

markHeigherBmi = markBmi > johnBmi ;
console.log(markHeigherBmi);

Strings And Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
console.log(jonasNew);

console.log(`just a reulat string...`);

console.log('string with \n\
multiple \n\
lines')

console.log(`String
multiple
lines`)




const age = 15;
const isOldEnough = age >= 18;

if(age >= 18){
  console.log('Sarah can start driving license ');
}else {
  console.log('Sarah cannot start driving license ');
  const yearsLeft = 18 - age;
  console.log(`sarah is too young. Wait anoth ${yearsLeft} Years `);
}

// control structure
//
// if(){
//
// }else{
//
// }

const birthYear = 1991;
let century;
if(birthYear <= 2000){
  century = 20
}else{
  century = 21;
}

console.log(century);

test

let markWeight,markHeight,johnWeight,johnHeight,markBmi,johnBmi,markHeigherBmi ;

markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;
console.log(markHeight,markWeight,johnHeight,johnWeight);


markBmi =  markWeight/ markHeight ** 2 ;

johnBmi = johnWeight/johnHeight ** 2;
console.log(markBmi,johnBmi);

if(markBmi >= johnBmi){
  console.log(`mark's Bmi is ${markBmi} is greater than john's Bmi ${johnBmi}`);
}else{
  console.log(`john's Bmi is ${johnBmi} is greater than mark's Bmi ${markBmi}`);
}

const templateStr = `mark's Bmi is ${markBmi} is greater than john's Bmi ${johnBmi}`
console.log(templateStr)




Type convertions

const inputYear = '1991'
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23),23);

//type Coercion

console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3);
console.log('23' * '2');

let n = '1' + 1; // string
n = n-1 // number
console.log(n);


// 5 falsy values : 0, '', undefined , null, jonasNew

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 100;

if(money) {
  console.log("Don't spend it all ;)");
}else{
  console.log("You should get a job!");
}

let height = 0;
if(height) {
  console.log('YAY! Height is defined')
} else{
  console.log('Height is undefined')
}


//Equality Operators == Vs ==

const age = '18';
if(age === 18) console.log('you just became an adult');
if(age == 18) console.log('you just became an adult');

const favaourite = Number(prompt("what's your favourite number?"))
console.log(favaourite);
console.log(typeof favaourite);

if(favaourite === 23) {
  console.log('cool! 23 is an amazing number!')
} else if (favaourite === 7) {
  console.log('7 is also a cool number')
}else{
  console.log('Number is not 23 or 7')
}


if(favaourite !== 23) console.log('why not 23?');




// Basic Boolean Logic: The and, or & not Operators


const hasDriversLicense = true; // A
const hasGoodVision = true; // // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//   console.log('Sarah is able to drive')
// }else{
//   console.log('Somesone else should drive')
// }

const isTired = false; // c

console.log(hasDriversLicense || hasGoodVision || isTired);


if(hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive')
}else{
  console.log('Somesone else should drive')
}



const dolphinsScoreOne = 96;
const koalasScoreOne = 88;
const dolphinsScoreTwo = 108;
const koalasScoreTwo = 91;
const dolphinsScoreThree = 89;
const koalasScoreThree = 110;

const dolphinsAverageScore = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;
console.log(`dolphinsAverageScore is ${dolphinsAverageScore}`);
const koalasAverageScore = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3 ;
console.log(`koalasAverageScore ${koalasAverageScore}`);

if(dolphinsAverageScore <= koalasAverageScore){
  console.log(`koalas is winner`);
}else{
  console.log(`dolphins is winner`);
}



const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins,scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
  console.log('Dolphins win the trophy');
  }
 else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
  console.log('Koalas win the trophy');
 }
else if (scoreDolphins === scoreKoalas && scoreKoalas >=100 && scoreDolphins >=100){
console.log('Both win the trophy!');
}
else{
  console.log('No one wins the trophy');
}


// switch casse

const day = 'monday';

switch(day) {
  case 'monday': // day === 'monday'
  console.log('Plan course structure');
  console.log('Go to coding meetup');
  break;
  case 'tuesday':
  console.log('Prepare theory videos');
  break;
  case 'wednesday':
  case 'thursday':
   console.log('Write code examples');
   break;
  case 'friday':
  console.log('Record videos');
  break;
  case: 'saturday':
  case 'sunday':
  console.log('Enjoy the weekend');
  break;
  default:
  console.log('Not a valid day!');
}


const day = 'friday';

if(day === 'monday'){
  console.log('Plan course structure');
  console.log('Go to coding meetup');
}else if(day === 'tuesday') {
  console.log('Prepare theory videos');
}else if( day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
}else if (day === 'friday'){
  console.log('Record videos');
}else if (day === 'sunday' || day ==='saturday') {
  console.log('Enjoy the weekend');
}else{
  console.log('Not a valid day!');
}


// Statements and Expressions


3 + 4
1991
true && false && !false

if ( 23 > 10){
  const str = '23 is bigger';
}

const me = 'Jonas'
console.log(`I'm ${2037 - 1991} years old ${me}`)


age = 23;
const drink = age>= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18){
  drink2 = 'wine';
}else {
  drink2 = 'water';
}
console.log(drink2);
console.log(`I like to drink ${age>=18 ? 'wine' : 'water'}`)
*/
const bill  = 275;
tip= tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
