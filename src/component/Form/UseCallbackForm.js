import { useState, useEffect, useCallback } from "react";


const App = () => {
    // Referential equality demo
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState(0);

    const [num1] = useState(4);
    const [num2] = useState(5);

    const sum = useCallback(() => num1 + num2, [num1,num2]);

    const buildArray = useCallback(() => [num1, num2], [num1, num2]);

    useEffect(() => {
        console.log(`New array. ${buildArray()}`);
        setResult(buildArray());
    },[buildArray]);


return(
    <>
        <input 
    type="text" 
    placeholder="input" 
    value={userInput} 
    onChange={(e) => setUserInput(e.target.value)} 
    />
    <h1>Output: {userInput || "--"}</h1>
    
    </>

)


};


export default App;