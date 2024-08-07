
import { useContext } from "react";
import { UserContext } from '../../context'

const App = () =>{

    const user = useContext(UserContext)

    return(
    <>
        <h5>{`${user} again!`}</h5>
    </>)
}

export default App;