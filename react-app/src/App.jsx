import {useState} from "react";
// const [count, setCount]=useState(0);

function What(){
  
  const [count, setCount]=useState(0);
  function handleClick(){
  
    setCount(count+1);
    
  }
  return(
    

    <div >
      
      <h1>HELLO NIGGA</h1>
      
      <button onClick={handleClick}>Likes ({count})</button>
    </div>
  )
}


export default What;