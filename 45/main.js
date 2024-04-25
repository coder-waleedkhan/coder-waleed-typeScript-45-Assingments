// define a funtion to create a car object with optional options
function create_Car(manufacturer, model) {
    // initialize a car object with manufacturer and model 
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // add aditional options to the car objects
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call a function to create car object
var my_car = create_Car("Toyota", "Corolla", "Color:Black", "Sunroof: true", "Year: 2024");
// print the variable to insure all the information is stored correctly in the car object
console.log(my_car);
