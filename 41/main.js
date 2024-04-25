// define a function to print each magician name from array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containing megician names
var magician_names = ["harry potter", "waleed khan", "usman ghani"];
// calling the function to print each magician name 
show_magicians(magician_names);
