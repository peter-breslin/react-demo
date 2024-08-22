
import { useState } from 'react';
import axios from 'axios';

const App = (baseUrl, url) => {

    const [error, setError] = useState("");
    const [inProgress, setInProgress] = useState(false);

    const sendToQueue = (jsonObject) => {

            setInProgress(true);
            setTimeout( async () => {

            try
            {
                var data = `<QueueMessage><MessageText>${JSON.stringify(jsonObject)}</MessageText></QueueMessage>`;

                url = "https://httpstat.us/404";
                await axios.post(url, data, {
                    "Content-Type": "text/xml",
                    "Access-Control-Allow-Origin" : baseUrl
                });
            }
            catch(err){
                setError(err.message);
            }
            finally{
               setInProgress(false);
            }

            }, 3000);
    };

    return [sendToQueue, inProgress, error];
}

export default App;