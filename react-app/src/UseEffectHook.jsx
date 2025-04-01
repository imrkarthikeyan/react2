import React, { useEffect, useState } from 'react'

function UseEffectHook(){

    const[count,setCount]=useState(0)
    const[time,setTime]=useState(0)

    //Empty dependency array
    // useEffect(()=>{
    //     console.log("hey user")
    // },[])

    
    //State dependency array
    useEffect(()=>{
        console.log("hey user")
    },[count])


  return (
    <>
        <h1>Count : {count}</h1>
        <h1>Time : {time}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <button onClick={()=>setTime(time+1)}>T</button>
    </>
  )
}

export default UseEffectHook
