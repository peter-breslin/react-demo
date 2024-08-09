import { useState, useCallback} from 'react';
import Todos from './Todos';


// This is an example of "referential equality". Every time a component re-renders, its functions get recreated. 
// Because of this, the addTodo function has actually changed.
// To fix this, we can use the useCallback hok to prevent the function from being recreated unless necessary.
// Use the 'useCallback hook to prevent the Todos component from re-rendering needlessly.
const App = () => {

    const[count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

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
          </div>
        </>
      );

}

export default App;