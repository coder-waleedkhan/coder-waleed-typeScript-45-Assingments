// creating a guest list array
let guestList = ["hamza","usman","ayesha","areeba"];
// making variable for those who cant come
let dontCome = guestList[0];
// print the name of the guest who cant come
console.log(dontCome, "nahi aa sakta");
// add or remove values from guest list array
guestList.splice(0,1,"amir");
// message print for bigger table
console.log("good news ! we have found a bigger table for dinner");
// adding a new value at starting index of array
guestList.unshift("ali");
// adding a new value at ending index of array
guestList.push("asad");
// get a middle index of our guestlist array
let middleIndex:number = Math.floor(guestList.length/ 2);
// adding a new guest to middle index of array
guestList.splice(middleIndex, 0,"waleed")
// print message of updated list
console.log("updated list of our guests");
// sending a invitation message to our guest one by one with their names
guestList.forEach(oneguest => console.log (`salam ${oneguest}, would you like to dinner with me at monal islamabad.`));

// inform that only two guests can be invited for dinner 

console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two Guests to dinner with me");

// using while-loop to remove guest from the array until only two guest remain

while(guestList.length>2){
let removedguest = guestList.pop();
console.log(`sorry, ${removedguest} i cant invite you to dinner`);
}

// sending a invitation to the last two guest on the list
console.log("invitations to the last 2 Guest");
guestList.forEach(lasttwo => console.log(`luckly, ${lasttwo} you are still invited to dinner`));

// removing two guest from the list
guestList.pop();
guestList.pop();

console.log("Empty list:",guestList);



