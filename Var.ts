let name: string ="John";
let age: number = 22;
let male: boolean = true
console.log('name: ', name, '  age ',age, '  male ',male );

var fruits: string[] = ["mango","banana","apple"]
console.log('fruits: ', fruits);

var fruitsInfo: [string,string,string,number, boolean] = ["mango","banana","apple",2, true]
console.log('fruitsInfo: ', fruitsInfo);

// ENUM

enum Status {
    pending,
    fulfilled,
    cancelled
    
}

let appointment : Status = Status.pending ;


// Interface

interface Details {
    name: string,
    readonly age: number,
    symptoms? : string[]
}

let Person1: Details={
    name : "John",
    age :11,
    symptoms :["fever","cold"]
    
}
console.log('Person1: ', Person1);

function analyze(name:string):string{
   if(name){
    return name
   }else{
    return 'Bob'
   }
}


console.log(analyze(''));


// Classes and Object

class School {
    constructor(public name : string , public rollno : number){

    }

    getrollno(): number{
        return this.rollno;
    }
}

const studentList: School[] =[
    new School('Bob',12),
    new School('John',14),
    new School('Charlie',15)
]

for( let student of studentList){
  console.log("Student name ", student.name, "  Student RollNo : ", student.rollno);
}

let detail = new School('Me',21);
console.log('detail: ', detail.getrollno());