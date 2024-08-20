import useSubmitForm from './MessageQueueFormSubmit';
import {SpinnerComponent, ErrorMessage} from '..';
import MessageQueueFormSubmit from './MessageQueueFormSubmit';

import { useState} from 'react';

// Great Example: https://stackoverflow.com/questions/65210569/submit-a-form-with-data-using-a-custom-react-hook


const App = ({url}) => {

    const [inputs, setInputs] = useState({});
    const [submit, inProgress, error] = MessageQueueFormSubmit(url);

    const onChangeMessage = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const onSubmitMessage = (event) =>{
        event.preventDefault();
        submit(inputs);

        if(!error)
            setInputs([]);
    }

    let inputButton;

    if(inProgress)
        inputButton = <SpinnerComponent/>;
    else
        inputButton =  <input type="submit" value="Post Message" />

   // if (inProgress) return <SpinnerComponent/>
   // if (error) return <ErrorMessage error={error} />

return(
<>  
        <form onSubmit={onSubmitMessage}>
                <label>Enter your name:
                    <input type="text" name="name" value={inputs.name || ""} onChange={onChangeMessage}/>
                </label>
                <label>Enter your reference:
                    <input type="text" name="reference" value={inputs.reference || ""} onChange={onChangeMessage} />
                </label>
                
                { inputButton }
        </form>
</>)

}


export default App;