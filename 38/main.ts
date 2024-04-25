// creating a function

function describe_City (city: string, country: string = "pakistan"){
    console.log(`${city} is in ${country}`)
}

// calling a function

describe_City("karachi");

describe_City("lahore");

describe_City("berlin", "germany");