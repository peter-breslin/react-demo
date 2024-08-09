import { act, useReducer } from "react";


const ActionType = Object.freeze( {
    Increment: 'incremented_age',
    Decrement: 'decrement_age'
})


const ageReducer = (state, action) => {
    if(action.type === ActionType.Increment){
        return {
            age : state.age + 1
        }
    }

    if(action.type === ActionType.Decrement){
        return {
            age : state.age - 1
        }
    }

    throw Error('Unknown action');
};

const App = () => {

    const [state, dispatch] = useReducer(ageReducer, { age: 42 });

return(
    <>
        <button onClick={() => {dispatch({ type: ActionType.Increment})}}>
            Increment
        </button>
        <button onClick={() => {dispatch({ type: ActionType.Decrement})}}>
            Decrement
        </button>
        <p>Hello! You are {state.age}</p>
    </>
)

}


export default App;

