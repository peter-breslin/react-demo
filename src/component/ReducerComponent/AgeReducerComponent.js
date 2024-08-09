import { act, useReducer } from "react";


const ActionType = Object.freeze( {
    Increment: 'incremented_age',
    Decrement: 'decrement_age',
    ChangeName: 'change_name'
})

// N.B. State is read-only. Don't modify any object or arrays in state. e.g ...state.age = state.age + 1
// Instead, always return new objects from your reducer.
const reducer = (state, action) => {
    if(action.type === ActionType.Increment){
        return {
            name : state.name,
            age : state.age + 1
        }
    }

    if(action.type === ActionType.Decrement){
        return {
            name : state.name,
            age : state.age - 1
        }
    }

    if(action.type === ActionType.ChangeName){
        return {
            name : action.nextName,
            age : state.age - 1
        }
    }

    throw Error('Unknown action');
};

const initialState = { name: 'Peter', age : 45};





const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputChange = (event) => {
        dispatch({
            type: ActionType.ChangeName,
            nextName: event.target.value
        })
    };

return(
    <>
        <input value={state.name} onChange={handleInputChange} />
        <button onClick={() => {dispatch({ type: ActionType.Increment})}}>
            Increment
        </button>
        <button onClick={() => {dispatch({ type: ActionType.Decrement})}}>
            Decrement
        </button>
        <p>Hello {state.name }. You are {state.age}</p>
    </>
)

}


export default App;

