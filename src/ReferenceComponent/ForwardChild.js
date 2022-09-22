import React, { forwardRef } from 'react'

const ForwardChild = forwardRef(
    (props, ref) => {
  return (
     <input type="text" ref={ref}/>
  )
    }

)

export default ForwardChild

