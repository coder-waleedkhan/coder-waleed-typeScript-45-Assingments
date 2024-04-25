// creating a array
var userName = ["mahad", "ali", "zeeshan", "admin", "usman"];
userName = [];
if (userName.length === 0) {
    console.log("your array is empty. we need to find some users!");
}
else {
    userName.forEach(function (oneuser) {
        if (oneuser === "admin") {
            console.log("hello ".concat(oneuser, ",would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneuser, ", thank you for logging in again"));
        }
    });
}
