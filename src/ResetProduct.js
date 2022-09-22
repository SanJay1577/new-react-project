import { useContext } from 'react';
import { CounteContext } from './App';

function ResetProduct() {
  const [state, dispatch] = useContext(CounteContext);
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "reset-product", payload: 25 })}
      >Reset Product</button>
    </div>
  );
}

export {ResetProduct}

//Create a context 
//Create your states
// have your state values in context.provider
//use the context to acces the state variable
