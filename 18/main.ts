// making an aray of countries and print it in its original order

let countriesToVisit: string[] = ["china","denmark","brazil","argentina",];
console.log("original order",countriesToVisit)

// print the array in alphabetical order without modifying the actual list

console.log("alphabetical order:",[...countriesToVisit].sort());

// show that the array is in its original position

console.log("still in original order:",countriesToVisit)

// print the array in reverse order without modifying the actual array list

console.log("reverse order:",[...countriesToVisit].reverse());

// show that the array is in its original position

console.log("still in original order:",countriesToVisit)

// we have changed the original array order now 

console.log("original array reversed:",countriesToVisit.reverse());

// print the array to show that it's back to its original order

console.log("back to original order:",countriesToVisit.reverse());

// print the array to show that its order has been changed in alphabetical order now

console.log("sorted in alphabetical order:",countriesToVisit.sort());

// we have changed again the original array order now in reverse order again 

console.log("original array reversed again:",countriesToVisit.reverse());