import { act, useReducer } from "react";

const ageReducer = (state, action) => {
    if(action.type === 'incremented_age'){
        return {
            age : state.age + 1
        }
    }

    throw Error('Unknown action');
};

const App = () => {

    const [state, dispatch] = useReducer(ageReducer, { age: 42 });

return(
    <>
        <button onClick={() => {dispatch({ type: 'incremented_age'})}}>
            Increment Age
        </button>
        <p>Hello! You are {state.age}</p>
    </>
)

}


export default App;

