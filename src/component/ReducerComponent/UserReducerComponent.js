import { useReducer } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faPlus} size="lg"/>
        </button>
        <button onClick={() => {dispatch({ type: UserReducerActionType.Decrement})}}>
        <FontAwesomeIcon icon={faMinus} size="lg"/>
        </button>
        <p>Hello {state.name }. You are {state.age}</p>
    </>
)

}


export default App;

