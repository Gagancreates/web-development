//  FUNCTIONS
//1
function add(a,b)
{
    return a+b;
}
console.log(add(1, 9));

//2
//  ARROW FUNCTIONS
const add=(a,b) => a+b;
console.log(add(1, 9));

const greet=()=>"Hello";
console.log(greet());

let ok="Hello";
let name="gagan";
console.log(ok +" " +name);


//3
//  CALLBACK FUNCTIONS
function greet1(name1, callback)
{
    console.log("Hello "+ name1);
    callback();
}

function bye()
{
    console.log("Bye bye");
}
greet1("gagan", bye)



//4
//  SCOPES
function test()
{
    let x='Heyy';
    var y='Woke';
    const z='Hello';
    console.log(x);
    console.log(y);

    console.log(z);

}
test()
console.log(z);



//5
function testScope() {
    if (true) {
        var a = 1;  // Function-scoped
        let b = 2;  // Block-scoped
        const c = 3; // Block-scoped
    }
    
    console.log(a); // ✅ Works (function scope)
    console.log(b); // ❌ ERROR! (block scope)
    console.log(c); // ❌ ERROR! (block scope)
}

testScope();


//  closure functions: are those functions which remember the values from the outer scope even when the the outer function has stopped running
//6
function outer()
{
    let count=0;
    return function inner()
    {
        count+=1;
        console.log(count);
    }
}
const obj=outer();
obj();
obj();
obj();