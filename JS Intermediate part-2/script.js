//## ! Topic-1:Higher order function => (calculate fuction) which takes another function as an argument or returns a function as a return value
        //when a function is passed as an argument to another function, then the passed function is called a callback function.

// .!Topic-1:Callback funciton => A function that is passed as an argument to another function is called a callback function and it is invoked inside the outer function to complete some kind of routine or action.(operation. is a callback function here.)

const calculate=(num1,num2,operation)=>{
    return operation(num1,num2);
}

const add=(a,b)=>a+b;
const subtract=(a,b)=>a-b;
const multiply=(a,b)=>a*b;
const divide=(a,b)=>a/b;            

let result=calculate(20,10,add);
console.log(result);

result=calculate(20,10,subtract);
console.log(result);

result=calculate(20,10,multiply);
console.log(result);

result=calculate(20,10,divide);
console.log(result);




//## topic:2 types of callback function=>synchronous vs asynchronous function
//TODO - Higner order built-in functions:forEach()

const person=['Anisul','Raju','Kamal','Jamal'];

person.forEach(name=>console.log(name));

// const values=[1,2,3,4,5];
// const squareNumber=[];
// values.forEach(value=>squareNumber.push(value*value));
// console.log(squareNumber);




//TODO - Higner order built-in functions:map()
//map() function creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1,2,3,4,5];
const squareNumbers=numbers.map((number)=>
{
  return  number*number;
});
console.log(squareNumbers);



const products=[
    {id:1,name:'samsung galaxy' , price:25000},
    {id:2,name:'iphone' , price:55000},
    {id:3,name:'xiaomi' , price:15000},
    {id:4,name:'oppo' , price:20000}
];
products.map((product)=>{
    console.log(`Product ID: ${product.id}`);
    console.log(`Product Name: ${product.name}`);
    console.log(`Product Price: ${product.price}`);
   
    console.log("\n \n");
});


//TODO - Higner order built-in functions:filter()


// return the items price is greater the 16000
const filteredProducts=products.filter((product)=>{
    return product.price>16000
});
// console.log(filteredProducts);


//search a product by using filter
// const searchProduct=products.filter((product)=>
//      product.name.includes('samsung')
// );
// console.log(searchProduct);

const searchProducts= (searchValue)=>{
    return products.filter((product)=>product.name.toLowerCase().includes(searchValue.toLowerCase()));
}

console.log(searchProducts("Galaxy"));

//TODO - Higner order built-in functions:reduce()
 // !Total Amount: reduce

 const cardProducts=[
    {id:1,name:'samsung galaxy' , price:25000},
    {id:2,name:'iphone' , price:55000},
    {id:3,name:'xiaomi' , price:15000},
    {id:4,name:'oppo' , price:20000}
];

let totalPriceLoop=0;
for(let cardProduct of cardProducts){
    totalPriceLoop=totalPriceLoop+cardProduct.price;
}
console.log(`You have to pay total amount: ${totalPriceLoop}`);


let total=0;
cardProducts.forEach((cardItem) => {
    total=total+cardItem.price;
});
console.log(`You have to pay total amount: ${total}`);

//Total price finding by reduce()
// const reducedTotalPrice=cardProducts.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue.price;
// }, 0)
// console.log(`You have to pay total amount: ${reducedTotalPrice}`);

const reduceTotalPrice=cardProducts
                    .map((cardItem)=>cardItem.price)
                    .reduce((accumulator,currentValue)=>accumulator+currentValue,0);

console.log(`You have to pay total amount: ${reduceTotalPrice}`);





//TODO - Higner order built-in functions:some()
  //! Returns true if at least one element in the array satisfies the provided testing function.
   //atleast one item price > 1550
const hasPrice = cardProducts.some((cardProduct)=>cardProduct.price>11550);
console.log(hasPrice);





//TODO - Higner order built-in functions:every()
 //! Returns true if all elements in the array satisfy the provided testing function.
   //atleast one item price > 1550
const hasAllPrice = cardProducts.every((cardProduct)=>cardProduct.price>11550);
console.log(hasAllPrice);



//TODO - Higner order built-in functions:sort()
 //! The sort() method sorts the elements of an array in place and returns the sorted array.
  //!Usecase: sorting products based on name, price etc.

 const newCardProducts=[
    {id:1,name:'samsung galaxy' , price:25000,createdAt:new Date('2023-01-01')},
    {id:2,name:'iphone' , price:55000,createdAt:new Date('2022-12-01')},
    {id:3,name:'xiaomi' , price:15000,createdAt:new Date('2023-02-01')},
    {id:4,name:'oppo' , price:20000,createdAt:new Date('2024-03-01')}
];

//! sort by product price ascending order(low to high),descending order(high to low)
const productsSortPrice= newCardProducts.sort((a,b)=>{
    return a.price-b.price; //ascending order
})
console.log(productsSortPrice);
//descending order using numeric comparison
const productsSortPriceDesc = newCardProducts.sort((a, b) => b.price - a.price); // descending order
console.log(productsSortPriceDesc);

//sorting using date
const productsSortByDate= newCardProducts.sort((a,b)=>{
    return a.createdAt-b.createdAt; //ascending order
})
console.log(productsSortByDate);
//descending order using date
const productsSortByDateDesc = newCardProducts.sort((a, b) => b.createdAt - a.createdAt); // descending order
console.log(productsSortByDateDesc);







//! Create Menu for sorting using switch case
const menu=`
1. Sort by name (A-Z)
2. Sort by name (Z-A)
3. Sort by price (Low to High)
4. Sort by price (High to Low)
5. Sort by date (Old to New)
6. Sort by date (New to Old)
`
const choice=prompt(menu+"Enter your choice (1-6): ");

switch(choice){

    case '1':{
        const sortedByNameAsc=newCardProducts.sort((a,b)=>{
            return a.name.localeCompare(b.name);
        });
        console.log(sortedByNameAsc);
        break;
    }
    case '2':{
        const sortedByNameDesc=newCardProducts.sort((a,b)=>{
            return b.name.localeCompare(a.name);
        });
        console.log(sortedByNameDesc);
        break;
    }   
    case '3':{
        const sortedByPriceAsc=newCardProducts.sort((a,b)=>{
            return a.price-b.price;
        });         
        console.log(sortedByPriceAsc);
        break;
    }
    case '4':{
        const sortedByPriceDesc=newCardProducts.sort((a,b)=>{
            return b.price-a.price;
        });
        console.log(sortedByPriceDesc);
        break;
    }
    case '5':{
        const sortedByDateAsc=newCardProducts.sort((a,b)=>{         
            return a.createdAt-b.createdAt;
        });
        console.log(sortedByDateAsc);
        break;
    }
    case '6':{
        const sortedByDateDesc=newCardProducts.sort((a,b)=>{         
            return b.createdAt-a.createdAt;
        });
        console.log(sortedByDateDesc);
        break;
    }
}



//TODO - Exception Handling: try...catch...finally