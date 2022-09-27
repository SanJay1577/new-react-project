import React, { Fragment, useMemo, useState } from 'react'

const Memo = () => {
   
    const [state, setState] = useState(0)
  const bigDataProblem = (val1, val2) => {
    for(let i =1; i<10000000000000; i++){
         return val1*val2;;
    }
  }

  const memoizedValue = useMemo( () => bigDataProblem(10, 20), [])

  const handleMemo =  () =>{
      setState(memoizedValue); 
  }
 
//   function memoFunction (fn, context){
//       const store = {}; 
//       return function (...args){
//         var cacheValue = JSON.stringify(args);
//         if(!store[cacheValue]){
//             store[cacheValue] = fn.call(context || this, ...args)
//         }
//         return store[cacheValue]; 
//       }
//   }



//    const MemoizedFunction = (memoFunction(bigDataProblem))

//   console.time("user1 calling");
//   console.log(MemoizedFunction(9851, 8745))
//   console.timeEnd("user1 calling");

//   console.time("user2 calling");
//   console.log(MemoizedFunction(9851, 8745))
//   console.timeEnd("user2 calling");



  return (
    <Fragment>
    <div>Memos value is {state}</div>
    <button onClick={handleMemo}>Click me</button>
    </Fragment>
  )
}

export default Memo


