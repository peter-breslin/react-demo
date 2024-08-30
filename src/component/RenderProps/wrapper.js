import { useState } from "react";




const App = (props) => {

    const [count, setCount] = useState(0);

    const plusCount = () => {
        setCount(v => v + 1);
    }


    return(
        <>
        {props.render(count, plusCount)}
        </>
    )
}

export default App;