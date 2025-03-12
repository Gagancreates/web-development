// import UserCard from "./components/UserCard";
// function App(){
//   return(
//   <div>
//     <h1>This was about day 3</h1>
//     <UserCard />

//   </div>
//   );
  

// };
// export default App;


import { useState } from "react";
function App(){
  const [hey, update]=useState({count: 0})
  return(
    <div>

    <h1>Count: {hey.count}</h1>
    <button onClick={()=> { update({count: hey.count+1}) }}>Increase</button>
    {hey.count>0 && (<button onClick={()=> { update({count: hey.count-1}) }}>Decrease</button>)}
    </div>
  );

};

export default App;