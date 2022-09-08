import { useEffect, useReducer, useState } from 'react';
import './App.css';

//having your reducer functionality - step 2
function reducerFunction(state, action){

  switch (action.type) {
    case 'increment' :
      return ({...state, count : state.count +1})
      case 'decrement' :
        return ({...state, count : state.count -1})
      default:

  }

}

function App() {




  // const [count, setCount] = useState(0); 
  // const [noncount, setNonCount] = useState(0);

  // initial state with dispatch - step1
  const [state, dispatch] = useReducer(reducerFunction, {count : 0})
   

 //side effect 
  useEffect(()=>{

    
    console.log("Mounted")

    // This is just going to un mount your component and clean it
    return () => {
      console.log("unmonuting the component server")

     
    }; 
 
   }, []);

  

  // const countFunction = () =>{
  //   setCount(count+1); 
  // }

  // const nonCountFunction = () =>{
  //   setNonCount(noncount+1); 
  // }



  return (
   <div>
    <div>
       <p >Dependent Counter : {state.count}</p>

       {/* passing your action */}

      <button onClick={()=>dispatch({type :"increment"})}>+Add</button>
      <button onClick={()=>dispatch({type :"decrement"})}>-Sub</button>

      {/* <p className='clean'>Non Dependent Counter : {noncount}</p>
      <button onClick={nonCountFunction}>Non Dependency Button</button> */}

    </div>
   </div>
  );
}

export default App;
//  Brain stroming for new app
// terminal codes
// ##################
// git clone https://github.com/SanJay1577/new-react-project.git
// cd new-react-project
// code . 
// npm start
// ###########
// Reducer Steps 
// Creating a initial state with dispatch 
// having your reducer functinality
// passing your action
//############################

