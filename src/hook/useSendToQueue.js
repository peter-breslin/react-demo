
import { findAllByAltText } from '@testing-library/react';
import { useState } from 'react';

const App = (url) => {

    const [error, setError] = useState("");
    const [inProgress, setInProgress] = useState(false);

    const sendToQueue = async (data) => {

        // Always use with useEffect. Kinda like dispose in C#
        // const controller = new AbortController();
        // fetch(url, { signal: controller.signal})
        // return() => controller.abort()
        setInProgress(true);
        setTimeout(() => httpPostQueueMessage(data), 5000);
    };

    const httpPostQueueMessage = async (data) => {
        try
        {
            let options = {
                         mode: "no-cors",
                         method: 'POST',
                         headers: { 'Content-Type': 'text/xml' },
                         body: `<QueueMessage><MessageText>${JSON.stringify(data)}</MessageText></QueueMessage>`
                };
    
              fetch(url, options).catch(err => { setError(err);})
        } catch(err){
            setError(err);
        }
        finally{
            setInProgress(false);
        }
    };


    return [sendToQueue, inProgress, error];
}

export default App;