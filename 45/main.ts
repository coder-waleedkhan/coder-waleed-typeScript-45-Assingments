// define a funtion to create a car object with optional options

function create_Car (manufacturer, model, ...options){
    // initialize a car object with manufacturer and model 

    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // add aditional options to the car objects
    options.forEach(option => {
        let [key, value]= option.split(":");
        car[key.trim()]= value.trim();
    })
    return car;
}



// call a function to create car object

let my_car = create_Car("Toyota", "Corolla", "Color:Black", "Sunroof: true", "Year: 2024");

// print the variable to insure all the information is stored correctly in the car object

console.log(my_car);
