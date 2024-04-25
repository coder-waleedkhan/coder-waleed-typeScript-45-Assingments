// creating a array
var userName = ["mahad", "ali", "zeeshan", "admin", "usman"];
// using forEach loop on array
userName.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("hello ".concat(oneuser, ",would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ", thank you for logging in again"));
    }
});
