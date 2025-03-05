// CLOSURES 
function outer(outerx){
    return function inner(innerx){
        console.log(outerx + innerx);
    }
}
let obj=outer("Heyy ");
obj("Gagan");



////2️⃣ Higher-Order Functions (HOFs) 
///Functions that take another function as an argument or return a function.

function add(addition){
    return  function addition(a,b){
            console.log(a+b);
    }
}
let x=add();
x(2, 4);



//3️⃣ The this Keyword
//The value of this depends on how a function is called.
// ususlly this keyword refers to the context where it is being used.
const ab={
    name: "gagan", greet: function() {
        console.log(`Hello, ${this.name}`)
    }
};
ab.greet();



///////     Understanding call(), apply(), and bind() in JavaScript
const ok={ name: "Gagan"}
function greet(city){
    console.log(` Hello Bhai ${this.name}, you live in the city ${city}`)
}
greet.call(ok, "Mysuru")  // here we are telling this keyword to refer to the object ok and get the value of name from ok.



