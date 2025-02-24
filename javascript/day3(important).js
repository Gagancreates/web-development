//asynchronous execution in js
//by default js is a single threaded language, means it executes the code line by line synchronously.
//but some tasks such as fetching data from the api, animations,,,,, take more time .
//to counter this js has asynchronous execution, which means it can continue to execute a block of code without waiting for 
//the previous block of code to complete execution, allowing it to run in the bakground.

//🔥 5. setTimeout() (Delay Execution)
//Runs a function once after a delay.
console.log("Before execution");
setTimeout(()=> {
    console.log("After two sec");
}, 1);
console.log("Even though this should come third, it comes second");


//🔥 6. setInterval() (Repeat Execution)
// Repeats a function every X milliseconds.
// Syntax: setInterval(function, interval);
let count=0;
const ok=setInterval(() =>{
    console.log("Count: ", count);
    count+=1;
    if(count>10)
    {
        clearInterval(ok);
    }
}, 100);



/////////////////////  PROMISES IN JAVASCRIPT
let mypromise= new Promise((resolve, reject)=>{
    let success=true;
    setTimeout(()=>{
        if(success){
            resolve("Successful");
        }
        else{
            reject("Error");
        }
    }, 2000);
});
mypromise
    .then(response=> console.log(response))
    .catch(error=>console.log(error));



/////////////////////////////
let promiseobj= new Promise((successcallback, failcallback)=>{
    let success=true

        successcallback("The data has been fetched successfully");
    
});
promiseobj.then(resp=> console.log(resp));



///////////////////////////////
//✅ Project 1 (Fake API Call)
function fake(){
    return new Promise((resolve, reject)=>{
        let success =false;
        setTimeout(()=>{
        if(success){
            resolve("gagan");
        }
        else{
            reject("cannot retreive the data");
        }
    }, 2000);
    });
}


////////////////////////////////////////////
    
console.log("Fetching user data ......");
fake()
    .then(resp=> console.log(resp))
    .catch(err=> console.log(err));


//////////////////////////////////////////

console.log("Please wait while we fecth the data");
function ok(){
    return new Promise(resolve=>{
        setTimeout(()=>{
        resolve("Data has been fetched");
        
    }, 1000)
    });
}
ok()
.then(x=> {console.log(x); console.log("Execution completed");
});


//////////////////////////////////////
//          ASYNC AND AWAIT
async function getdata()
{
    const a= await fetch('https://official-joke-api.appspot.com/random_joke');
    const j=await a.json();
    console.log(j);
}
getdata();