var guestList = ["hamza", "usman", "ayesha", "areeba"];
var dontCome = guestList[0];
console.log(dontCome, "nahi a sakta");
guestList.splice(0, 1, "amir");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
