// array of current users
var current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"];
// array of new users
var new_user = ["hamza", "ayesha", "ali", "mahad", "areeba"];
// loop through new_users to check for username avaibility
new_user.forEach(function (new_one_user) {
    // maiking a condition for username already exist and save in our condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print differnt messages using if else statements 
    if (our_condition) {
        console.log("Sorry! ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
