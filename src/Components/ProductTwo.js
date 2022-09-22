import React from "react";

const ProductTwo = ({counter, setCounter})=>{
    return <>
    <h1>ProductTwo</h1>
    <h1>Product Image {counter}</h1>
      <button onClick={()=>setCounter(counter-1)}>buynow</button>
    </>
}
export {ProductTwo}; 