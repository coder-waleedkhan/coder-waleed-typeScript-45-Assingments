// making an aray of countries and print it in its original order
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["china", "denmark", "brazil", "argentina",];
console.log("original order", countriesToVisit);
// print the array in alphabetical order without modifying the actual list
console.log("alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
// show that the array is in its original position
console.log("still in original order:", countriesToVisit);
// print the array in reverse order without modifying the actual array list
console.log("reverse order:", __spreadArray([], countriesToVisit, true).reverse());
// show that the array is in its original position
console.log("still in original order:", countriesToVisit);
// we have changed the original array order now 
console.log("original array reversed:", countriesToVisit.reverse());
// print the array to show that it's back to its original order
console.log("back to original order:", countriesToVisit.reverse());
// print the array to show that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order:", countriesToVisit.sort());
// we have changed again the original array order now in reverse order again 
console.log("original array reversed again:", countriesToVisit.reverse());
