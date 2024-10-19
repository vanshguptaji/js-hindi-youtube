// singleton
// Object.create this is constructor method

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh", //the value name is kept as a string tha is why we use ["name"] to print it
    "full name": "Hitesh Choudhary",//you cant access this through . operator
    [mySym]: "mykey1",// to use it as a symbol if we remove [] it will b treated as another element in the object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)//this can be done but should be avoided instead use [] to access
// console.log(JsUser["email"]) 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //this is to lock the value of JsUser
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//this. is used to access the entities of object
}
console.log(JsUser.greeting);//[Function (anonymous)] meaning it has returned the function not the value inside it

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());