import React, { memo } from 'react'
import { useState } from 'react'
import OptChild from './OptChild';


const OptParent =  () => {
    console.log("The parent is renderd")
    const [state, setState] = useState(""); 
  return (
    <div>

        <input 
        type="text" 
        value= {state}
        onChange={(event)=>setState(event.target.value)}/>
        <OptChild/>
    </div>
  )
}; 

export default memo(OptParent)