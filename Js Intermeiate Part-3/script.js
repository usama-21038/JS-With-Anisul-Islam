//JSON (javascript Object Notation)

//1. JSON Syntax Rules
//Data is in name/value pairs
//Data is separated by commas
//Curly braces hold objects
//Square brackets hold arrays

//! js object and json is similar but not same,JSOn key is always in double quotes but in js object it is not necessary
const users = [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com" },
    { "id": 3, "name": "Mike Johnson", "email": "mike@example.com" }        
];


//js object
// const userObj = {
//     id: 1,
//     name: "John Doe",
//     email: "john@example.com"
// };
// //! js object to JSON conversion
// const userObjJSON = JSON.stringify(userObj);
// console.log(userObjJSON);

// //! JSON to js object conversion
// const usersJson = JSON.parse(userObjJSON);
// console.log(usersJson);


//## localStorage
//localStorage.setItem(), localStorage.getItem(), localStorage.removeItem(), localStorage.clear()

// Store data in localStorage
const loginInfo={
    username:"anisul",
    password:"12345",
    logINStatus:true
};
localStorage.setItem("loginData",JSON.stringify(loginInfo));


const itemFromLocalStorage=JSON.parse(localStorage.getItem("loginData")) || null;
console.log(itemFromLocalStorage);
console.log("Hellow good people, How are you all?");

localStorage.removeItem("loginData");
// localStorage.clear();



//! synchronous vs asynchronous programming
 //? JS is a single thread, blocking, synchronous programming language
console.log("task 1 completed");
console.log("task 2 completed");
//? asynchronous programming using setTimeout function
setTimeout(()=>{
    console.log("task 3 completed");
},2000);
console.log("task 4 completed");

//##! Promise Asynchronous- pending, resolve,reject
//api call simulation using promise
//js global object= window

// //Get request using fetch API
// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(error=>console.log("Error:",error.message));

// //post request using fetch API
// fetch('https://fakestoreapi.com/products',{
//     method:"POST",
//     body:JSON.stringify({
//         title:"test product",
//         price:13.5,
//         description:"lorem ipsum set",
//         image:"https://i.pravatar.cc",
//         category:"electronic"
//     }), 
// }).then(res=>res.json())
// .then(data=>console.log(data))
// .catch(error=>console.log("Error:",error.message));


// //put request using fetch API
// fetch('https://fakestoreapi.com/products/1',{
//     method:"PUT",
//     body:JSON.stringify({
//         title:"test product",
//         price:13.5,
//         description:"lorem ipsum set",
//         image:"https://i.pravatar.cc",
//         category:"electronic"
//     }), 
// }).then(res=>res.json())
// .then(data=>console.log(data))
// .catch(error=>console.log("Error:",error.message));

// //delete request using fetch API
// fetch('https://fakestoreapi.com/products/1',{
//     method:"DELETE", 
// }).then(res=>res.json())
// .then(data=>console.log(data))
// .catch(error=>console.log("Error:",error.message));





//## async-await
const getAllProducts= async()=>{
try{
     const res= await fetch('https://fakestoreapi.com/products');
     if(!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`);
     }
const data=await res.json();
console.log(data);
}catch(error){
    console.log("Error:",error.message);
}

}

getAllProducts();