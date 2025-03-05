async function weather() {
    const w= await fetch('b955b3b87cfb4078d298082edb696767');
    const x= await w.json();
    console.log(x);
}
weather();