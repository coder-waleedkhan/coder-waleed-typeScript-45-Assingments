// creating a array

let userName = ["mahad", "ali", "zeeshan", "admin", "usman"];

userName = []

if (userName.length === 0){
console.log("your array is empty. we need to find some users!")
}else{
    userName.forEach(oneuser =>{
        if (oneuser === "admin"){
    console.log(`hello ${oneuser},would you like to see a status report?`)
        }else{
            console.log(`hello ${oneuser}, thank you for logging in again`)
        }
    })
    
}