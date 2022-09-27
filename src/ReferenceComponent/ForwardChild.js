import React, { forwardRef } from 'react'



const ForwardChild = forwardRef(
    (props, ref) => {
  return (
    <div>
      {props.children}
     <input type="text" ref={ref}/>
       
     </div>
  )
    }
   
)

export default ForwardChild

