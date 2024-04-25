// define a fucnction with a rest parameter that accept items arguments representing our sandwich

function makesandwich(...items: string[]){
console.log("\nmaking a sandwich with the folowing items: \n")

items.forEach(singleItem => console.log(singleItem))

console.log("\nnow enjoy sandwich")
}

// call the functions 3 times with 3 different number of arguments

makesandwich("Chicken", "Cheese", "Mayo", "Egg");

makesandwich("Bread", "Butter");

makesandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
