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

    
    
