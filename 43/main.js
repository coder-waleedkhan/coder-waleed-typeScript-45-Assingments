// define the function to show the magician names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magician great through .map and it will modify the array
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
// define an array containing megician names
var magician_names = ["harry potter", "waleed khan", "usman ghani"];
// making a copy of original array through .slice() function
var copy_magicians_names = magician_names.slice();
// modify the copyied array to include the " The Great " with their names
var copy_great_magicians = make_great(copy_magicians_names);
// show both arrays original and copied
// original 
console.log("original array\n");
show_magicians(magician_names);
// copied
console.log("\ncopied array\n");
show_magicians(copy_great_magicians);
