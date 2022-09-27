import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'


import ForwardChild from './ForwardChild';


const ForwardParent = () => {
    const inputRef = useRef(); 
    const [state, setState] = useState(""); 
    const getValue = ()=>{
        console.log(inputRef.current.value); 
        setState(inputRef.current.value)
    }

  return (
    <div>
       <ForwardChild ref={inputRef}/>
         <button
         onClick={getValue}
        >Click me</button>
     <div>The value is {state}</div>
  
    </div>
  )
}

export default ForwardParent
