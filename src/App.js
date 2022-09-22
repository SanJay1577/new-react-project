
import { createContext,  useReducer } from 'react';
import './App.css';
import { Product1 } from './Product1';
import { Product2 } from './Product2';
import { reducer } from './reducer';
import ForwardParent from './ReferenceComponent/ForwardParent';
import { ResetProduct } from './ResetProduct';


// const counterContext = createContext(null);
export const CounteContext = createContext(null)


function App() {
  // creating a state of reducers
  const [state, dispatch] = useReducer(reducer, {counter: 25})

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
   
   </div>
  );
}

export default App;



