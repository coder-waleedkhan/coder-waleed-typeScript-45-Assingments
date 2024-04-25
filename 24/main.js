// define variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// test for equility and unequility with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nis apple is not equal to apple?");
console.log(apple != "apple");
// test using lower case function
console.log("\nis APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
// test using uppercase function
console.log("\nis APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
// numerical tests
// equal to 
console.log("\nis ten is equal to twenty");
console.log(ten == twenty);
// not equal to 
console.log("\nis ten is not equal to twenty");
console.log(ten != twenty);
// greator than 
console.log("\nis ten is greator than zero");
console.log(ten > 0);
// less than 
console.log("\nis twenty is less than ten ");
console.log(twenty < 10);
// greator than or equal to
console.log("\nis ten is greator than or equal to 5? ");
console.log(ten >= 5);
// less than or equal to
console.log("\ntwenty is less than or equal to ten ");
console.log(twenty <= 10);
// using && (and) operator
console.log("\n twenty is not equal to 10 and and twenty is greator than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and and twenty is greator than 30");
console.log(twenty != 10 && twenty > 30);
// using || (OR) operator
console.log("\n twenty is greator than 50 OR twenty is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n twenty is greator than 50 OR twenty is not equal to 20");
console.log(20 > 50 || 20 != 20);
// test weather an item is include in array
// include
console.log("\n is orange is included in my fruits array");
console.log(fruits.includes("orange"));
// not include
console.log("\n is orange is not included in my fruits array");
console.log(!fruits.includes("orange"));
