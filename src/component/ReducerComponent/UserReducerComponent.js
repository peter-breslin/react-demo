import { useReducer } from "react";

import User from './User';
import { UserReducer, UserReducerActionType } from './UserReducer';


const App = () => {

    const [state, dispatch] = useReducer(UserReducer, User);

    const handleInputChange = (event) => {
        dispatch({
            type: UserReducerActionType.ChangeName,
            nextName: event.target.value
        })
    };

return(
    <>
        <input value={state.name} onChange={handleInputChange} />
        <button onClick={() => {dispatch({ type: UserReducerActionType.Increment})}}>
            Increment
        </button>
        <button onClick={() => {dispatch({ type: UserReducerActionType.Decrement})}}>
            Decrement
        </button>
        <p>Hello {state.name }. You are {state.age}</p>
    </>
)

}


export default App;

