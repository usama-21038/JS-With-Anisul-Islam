import { add, subtract } from './calculator.js';

console.log(add(5,3));
console.log(subtract(5,3));



const colors=['red','green','blue','yellow'];

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);

//distructuring array
const [f,s,t,fo]=colors;
console.log(f);
console.log(s);
console.log(t);
console.log(fo);    


//concept : default value

const greet=(massage="Good day to you!")=>{
    console.log(massage);

}

greet('good morning');
greet('good evening');
greet('good night');
greet();


