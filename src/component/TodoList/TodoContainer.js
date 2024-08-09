import { useState, useCallback, useMemo} from 'react';
import Todos from './Todos';





// This is an example of "referential equality". Every time a component re-renders, its functions get recreated. 
// Because of this, the addTodo function has actually changed.
// To fix this, we can use the useCallback hok to prevent the function from being recreated unless necessary.
// Use the 'useCallback hook to prevent the Todos component from re-rendering needlessly.
const App = () => {

    const[count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    }

    // const addTodo = () => {setTodos((t) => [...t, "New Todo"]);};
    const addTodo = useCallback(() => { setTodos((t) => [...t, "New Todo"]);}, [todos]);

      return (
        <>
          <Todos todos={todos} addTodo={addTodo} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            { calculation}
          </div>
        </>
      );
}

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for(let i = 0; i < 1000000000; i++){
    num +=1;
  }
  return num;
}

export default App;