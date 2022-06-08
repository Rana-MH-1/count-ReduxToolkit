import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  Decrement,
  getDataUsers,
  increment,
  IncrementByReference,
} from "./Slices/CountSlice";

function App() {
  const count = useSelector((state) => state.count.count);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getDataUsers())
  },[])
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(Decrement())}>-</button>
      <input
        type="text"
        defaultValue={0}
        onChange={(e) => dispatch(IncrementByReference(+e.target.value))}
      />
    </div>
  );
}

export default App;
