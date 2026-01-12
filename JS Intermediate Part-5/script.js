//OOP= Object Oriented Programming
//class, object, constructor
//4 key feature => Encapsulation (grouping and assessibility), Inheritance, Abstraction, Polymorphism(many forms)


//Person=> name, age, display()
class Person{
    //name,age automatically created
//# is indicate that is private variable
//#name;
//#age;
    constructor(name,age){
       this.name=name;
       this.age=age; 
    }
    display(){
        console.log(`welcome ${this.name}, you are ${this.age} years old`);
    }
}

//Student=> studentID, name, age, display()
class Student extends Person{
    constructor(studentId,name,age){
        super(name,age);
        this.studentId=studentId;
    //     this.name=name;
    //    this.age=age; 
    }
    display(){
        console.log(`welcome ${this.name},Your Student Id is: ${this.studentId} you are ${this.age} years old`);
    }
}


// const p1= new Person('Shovik',28);
// console.log(p1.name);
// console.log(p1.age);
// p1.display();

// const p2= new Person('Anisul',34);
// console.log(p2.name);
// console.log(p2.age);
// p2.display();

const s1=new Student(101,'Anisul',32);
s1.display();

//parent class/super class/base class --- child class/sub class/ derive class