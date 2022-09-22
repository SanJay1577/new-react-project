import { useContext } from 'react';
import { CounteContext } from './App';

export function Product2() {
  const [state, dispatch] = useContext(CounteContext);
  return (
    <div>
      <h1> Remaining Products {state.counter}</h1>
      <button onClick={() => dispatch({ type: "buy-product" })}>Buy now</button>
    </div>
  );
}
