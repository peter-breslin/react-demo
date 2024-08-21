import { useRef } from 'react';

const App = () => {

    const name = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name.current.value}`)
    }
return(
    <>
    <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
            type="text" 
            ref={name} />
        </label>
        <input type="submit" />
    </form>
    
    </>
)
}

export default App;