// creating a function with parameters which will return a value in string

function city_country (city: string, country: string) : string{
return`${city} , ${country}`;
}

// calling a function and print the return the returned value

console.log(city_country("karachi", "pakistan"));

console.log(city_country("tokyo", "japan"));

console.log(city_country("berlin", "germany"));