import { useState } from 'react'
import './App.css'

function App() {
  const[score,setScore]=useState(0);
  return (
    <>
      <div>
        <h2>Current Score:{score}</h2>
        <button onClick={()=>setScore(score+1)}>Increase</button>
        <button onClick={()=>setScore(score-1)}>Decrease</button>
      </div>
    </>
  )
}

export default App
