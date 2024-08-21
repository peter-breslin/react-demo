
import { useState } from 'react';

const App = (url) => {

    const [error, setError] = useState("");
    const [inProgress, setInProgress] = useState(false);

    const sendToQueue = async (data) => {

        setInProgress(true);

        try
        {
            let options = {
                         mode: "no-cors",
                         method: 'POST',
                         headers: { 'Content-Type': 'text/xml' },
                         body: `<QueueMessage><MessageText>${JSON.stringify(data)}</MessageText></QueueMessage>`
                };
    
              fetch(url, options)
              .catch(err => { setError(err);})
              .finally(() => setInProgress(false));

        } catch(err){
            setError(err);
            setInProgress(false);
        }
    };

    return [sendToQueue, inProgress, error];
}

export default App;