
import { useEffect } from 'react';
import { createContext,  useCallback,  useReducer, useState } from 'react';
import './App.css';
import Main from './Components/Classes/Main';
import Memo from './Components/Memo';
import Wrapping from './Components/Wrapping';
import { wrapperContext } from './Context/context';
import OptParent from './OptimizingComponents/OptParent';
import { Product1 } from './Product1';
import { Product2 } from './Product2';
import { reducer } from './reducer';
import ForwardParent from './ReferenceComponent/ForwardParent';
import { ResetProduct } from './ResetProduct';


// const counterContext = createContext(null);
export const CounteContext = createContext(null)





function App() {

    const [couter, setCouter] = useState(0); 
    const [number, setNumber] = useState(0); 

  const addCounter = useCallback((value)=>{
    setCouter(couter + value) //5 11 13 14 21
   }, [couter])

   const subCounter = useCallback( (value)=>{
       setCouter (couter - value)
   }, [couter] )

   const addNumber = useCallback(()=>{
       setNumber (number + 1)
   }, [number])


useEffect(()=>{
//batching and scheduling
  addCounter(5);
  console.log(`${couter}`)
}, []);

console.log(`${couter}`)
 


  // creating a state of reducers
  const [state, dispatch] = useReducer(reducer, 
    {counter: 25, demo:"", datas:[], effectData:""}
    )




   // const [state, setState] = useState("")
return (
  //creating a provider with values 
<div> 

  

    <CounteContext.Provider value={[state, dispatch]}>
          <Product1/>
          <Product2/>
          <ResetProduct/>
    </CounteContext.Provider>
  

  <ForwardParent/>


   
      <wrapperContext.Provider value={[state, dispatch]}>
  
      </wrapperContext.Provider>
    

     <h2>Optimizing the Parent</h2>
     <OptParent />

    <h3>Callback functionalities</h3>

    <button
         onClick={addCounter}
         >couter +</button>
         <button
         onClick={subCounter}
         >couter -</button>
         <button
         onClick={addNumber}
         >Set number +</button>

         <Memo/>

         <div>
          <h1>Classes</h1>
          <Main type="Class"/>
          </div>
   
   </div>
  );
}

export default App;


