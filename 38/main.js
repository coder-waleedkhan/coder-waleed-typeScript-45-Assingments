// creating a function
function describe_City(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// calling a function
describe_City("karachi");
describe_City("lahore");
describe_City("berlin", "germany");
