import { useContext } from 'react';
import { CounteContext } from './App';

export function Product1() {
  //use the context using use context hook
  const [state, dispatch] = useContext(CounteContext);
  return (
    <div>
      <h1> Remaining Products {state.counter}</h1>
      <button onClick={() => dispatch({ type: "buy-product" })}>Buy now</button>
    </div>
  );
}

//class components constructos to manage state - 1
// functional componets - hooks
// hook -> useState - multiple states
// desturcturing mathed to have a single state 
// state from one to another state (props)