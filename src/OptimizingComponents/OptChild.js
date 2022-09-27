import React, { memo } from 'react'
import { useState } from 'react'

const OptChild = () => {
    console.log("The child is rendered")
    const [name, setName] = useState("initial")
  return (
    <div>
        <h2>{name}</h2>
        <button 
        onClick={()=>setName(name === "initial" ? "changed" : "initial")}
        >REnder child</button>
    </div>
  )
}

export default memo(OptChild)