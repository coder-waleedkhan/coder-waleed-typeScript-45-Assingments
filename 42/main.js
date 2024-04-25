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
// calling make_great function to modify magician names
var great_magicians = make_great(magician_names);
// call show_magicians funtion that shows the modified list of magicians
show_magicians(great_magicians);
