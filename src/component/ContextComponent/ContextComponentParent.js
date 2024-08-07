import { useState } from "react"
import { UserContext } from "../../context";
import ContextComponentChild from './ContextComponentChild';


const App = ({userName}) =>{

    const [user, setUser] = useState(userName)

    return(
    <>
    <UserContext.Provider value={user}>
        <h3>{`${user}!`}</h3>
        <ContextComponentChild />
    </UserContext.Provider>

    </>)
}

export default App;