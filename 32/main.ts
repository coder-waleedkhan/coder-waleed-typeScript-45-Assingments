// array of current users

let current_users = ["Usman", "ali", "Areeba","Zain", "Osama"];

// array of new users

let new_user  = ["hamza", "ayesha", "ali","mahad", "areeba"];

// loop through new_users to check for username avaibility

new_user.forEach(new_one_user => {

    // maiking a condition for username already exist and save in our condition variable
    
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// print differnt messages using if else statements 

    if (our_condition){
console.log(`Sorry! ${new_one_user} is already taken!`)
    }else {
        console.log(`This username ${new_one_user} is available`)
    }
})