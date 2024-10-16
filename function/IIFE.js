//IIFE(Immediately Invoked Function Expression) :- A anonums function inclosed in parenthasis

(function (a,b){
    console.log(a**b);
})(3,2); // directecly invoked 

//2

const user = (function() {
    const userData = {
        userName: 'Jhon',
        userAge: 20,   
    };

    function getName()
    {
        console.log(userData.userName);
    }

    function updateAge(age)
    {
        console.log(userData.userAge+age);
    }

    return {getName, updateAge};
})();

console.log(user);
user.getName();
user.updateAge(4);

//3
function main()
{
    let userAuth = (function ()
{
 let registeredUser = [];

 function registerUser (username, password)
 {
    if(checkCredentials(username, password))
    {
        return 'The user already registered';
    }
    else {
        registeredUser.push({username, password});
        return 'The user have been added to the registeredUser array';
    }
 }
 function checkCredentials(username, password)
 {
    for(let i=0; i<registeredUser.length; i++){
        if(
            registeredUser[i].username === username &&
            registeredUser[i].password === password
        ) {
            return true;
        }
      }
     return false; 
 }
 return {registerUser};

  
})();

console.log(userAuth.registerUser("testuser", "password123")); 
console.log(userAuth.registerUser("testuser", "password123"));  // Output: "The user is already registered"

return userAuth;
}

main();