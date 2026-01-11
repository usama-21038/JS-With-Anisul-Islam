// // ! Topics: DOM=> create html element, delete, update, read/select elements




// // ! Topic-1: DOM=> Read/select elements and modify elements
// // const titleElement = document.getElementById('title');

// // console.log(titleElement);
// // console.log(titleElement.id);
// // console.log(titleElement.class);
// // console.log(titleElement.textContent);
// // titleElement.textContent="Settion 4: DOM Manipulation";

// //class name diye element select kora
// // const button1= document.getElementsByClassName ('bnt')[0];
// // button1.textContent = "Click Me";
// // console.log(button1);

// // const button1= document.querySelector('button');
// // button1.textContent = "Click Me";
// // console.log(button1);

// // const buttons= document.querySelectorAll('.btn');

// // console.log(buttons);



// const titleElement = document.querySelector('#title');
// titleElement.textContent = "Welcome to DOM Manipulation";

// //adding style in js
//    //titleElement.style.backgroundColor = 'green';
// //adding style using classlist
//     titleElement.classList.add('title');
//     //titleElement.classList.remove('title');

// console.log(titleElement);



// //! Topic-2: DOM=> create html element and remove elements,
// const btn4 = document.createElement("button");

// btn4.textContent = "Button 4";
// document.getElementById('btn-container').appendChild(btn4);

// //find button 2 and remove it
// const button2 = document.querySelectorAll('.bnt')[1];

// button2.innerHTML = "Hello Button 2 this is modified";
// //remove button 2 part
// //document.getElementById('btn-container').removeChild(button2);


// //! topic-3 Event and Event Handler
//         //? most common Event=> onClick, onChange, onSubmit\

// // btn4.addEventListener('click',()=>{
// //     alert('Btn 4 si clicked!');
// // })

// // titleElement.addEventListener('click',()=>{
// //     titleElement.textContent="This is the update content";
// // })

// //! onChange Event =>  <input />, <select>, <textarea>
// //const handleNameChange=()=>




// 
//@ts-nocheck
//! Topic: contact manager app
const form=document.getElementById('contact-form');
console.log(form);


const nameErrorElement=document.getElementById('name-error');
const emailErrorElement=document.getElementById('email-error');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('form is submitted');

    const name= document.getElementById('name').value;
 const phone=document.getElementById('phone').value;


let isValid=true;

if(name.trim().length===0){
    nameErrorElement.textContent="Name cannot be empty";
    isValid=false;
}

if(phone.trim().length===0){
    phoneErrorElement.textContent="Phone cannot be empty";
    isValid=false;
}

//reset value
nameErrorElement.textContent="";
phoneErrorElement.textContent="";
form.reset();

});








