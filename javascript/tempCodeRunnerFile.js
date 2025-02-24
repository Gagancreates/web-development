/////////////  FETCHING APIS (SINGLE AND MULTIPLE)
async function get(){
    const x=  await fetch('https://official-joke-api.appspot.com/random_joke');
    const y= await x.json();
    console.log(y);
}
get();