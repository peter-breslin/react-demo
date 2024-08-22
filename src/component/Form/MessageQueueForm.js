
import {SubmitButton} from '..';

import { useState, useEffect} from 'react';
import { useSendToQueue } from '../../hook';
import ErrorMessage from '../ErrorMessage';

import './MessageQueueForm.css';

const App = ({baseUrl, url}) => {

    const [inputs, setInputs] = useState({});
    const [sendToQueue, inProgress, error] = useSendToQueue(baseUrl, url);

    const onChangeMessage = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const onSubmitMessage = (event) =>{
        event.preventDefault();

        sendToQueue({
            messageTypeId: 11,
            name: inputs.name,
            reference: inputs.reference
        });
    }

    // Clear inout
    useEffect(() => {
        if(!error && !inProgress)
            setInputs({});
    },[error, inProgress])

return(
<>  
        <form>

        <div className="grid-container-post-message" >
                 <div className="post-message-1"><span>Name</span></div>
                 <div className="post-message-2"><input disabled={inProgress} type="text" name="name" value={inputs.name || ""} onChange={onChangeMessage}/> </div>
                 <div className="post-message-3"><span>Reference</span></div>
                 <div className="post-message-4"> <input disabled={inProgress} type="text" name="reference" value={inputs.reference || ""} onChange={onChangeMessage} /></div>
                 <div className="post-message-5"> <SubmitButton text="Post Message"onClickHandler={onSubmitMessage} inProgress={inProgress}/>  </div>
                 <div className="post-message-6"> { error && <ErrorMessage error={error} />}</div>
             </div>
        </form>
</>)

}


export default App;