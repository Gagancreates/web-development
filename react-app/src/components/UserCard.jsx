// import { useState, useEffect } from "react";
// const UserCard=()=>{
//     const initialState={ name:"Gagan", age: 10, count: 0, location: "Mysuru"};
//     const[user, setUser]=useState({ name:"Gagan", age: 10, count: 0, location: "Mysuru"});
//     useEffect(()=>{
//         console.log("Component has re rendered");
//     })
//     return(
//         <div>
//             <h2>Name: {user.name}</h2>
//             <h2>Age: {user.age}</h2>
//             <h2>Count: {user.count}</h2>
//             <h2>Location: {user.location}</h2>


//         <input
//             type="text"
//             placeholder="Enter the name"
//             value={user.name}
//             onChange={(e)=>setUser({ ...user, name: e.target.value})}

//          />
//           <input
//             type="number"
//             placeholder="Enter the age"
//             value={user.age}
//             onChange={(e)=>setUser({ ...user, age: Number(e.target.value)})}

//          />
//          <input
//            type="text"
//            value={user.location}
//            placeholder="Enter the location"
//            onChange={(e)=>setUser({...user, location: e.target.value })}
//          />
//          <button onClick={()=>setUser({...user, count: user.count+1})}>Increase Count</button>
//          <button onClick={()=>setUser({...user, count: user.count-1})}>Decrease Count</button>
//          <button onClick={()=>setUser(initialState)}>Reset</button>
//         </div>
//     );



// };
// export default UserCard;