let guestList = ["hamza","usman","ayesha","areeba"];
let dontCome = guestList[0];
console.log(dontCome,"nahi a sakta");
guestList.splice(0,1,"amir");
guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));