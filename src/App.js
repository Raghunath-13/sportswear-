import React, { useState,useEffect } from 'react';


const App = () => {
  const [count, setcount] = useState(0)
  
  
  
  // function increasecounter(){
  //   setcount(count+1)

  // }
  // function decreasecount(){
  //   setcount(count-1)
  // }
  if(count===-1){
    setcount(0)
  }

  
  return (
    <div>

     <button onClick={()=>{setcount(count+1)}}>Add count</button>
     <button onClick={()=>{setcount(count-1)}}>lower  count</button>

     <h1>Counter:{count} </h1>

  
    </div>
  )
}

export default App



