/*Task 1: Function Declaration
Create a function named `userProfile` that takes a `name`
 as a parameter and logs “Hello, <name>!" to the console.
 */
//Function declaration
 function userProfile(name)
 {
    return name
 }

 name ='JYOTHI'

 console.log("\"Hello\" ,<" + userProfile(name) + ">!")

 /*
 Task 2: Arrow Function
 Create an arrow function named `double` that takes a number as a parameter and returns double its value.
*/

const double = (a)=> a*a;

console.log(double(5));

/*
Task 3: Anonymous Function
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` after 2 seconds
*/


setTimeout(() =>
{

    console.log(`"This message is delayed by 2 seconds"`)
},2000)

/*

Task 4: Callback Function
Create a function named `getUserData` that takes a callback function as a parameter. Inside `getUserData`,
 simulate fetching data with `setTimeout` and then call the callback function with a user object after 3 seconds.
Call the `getUserData` function and log the user's name and age using the callback function

*/



function getUserData(call) {
        setTimeout(() =>
             {
              const user = {
            name: "John Doe",
            age: 30
        };
       
        call(user);
    }, 3000); 
}

function displayUserData(user) {
    console.log(`User Name: ${user.name}`);
    console.log(`User Age: ${user.age}`);
}


getUserData(displayUserData);