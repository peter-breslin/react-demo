
import { useState, useEffect } from 'react';
import axios from 'axios';


const App = ({url, message}) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    let axiosConfig = {
        headers: {
             "Content-Type": "text/xml"
        }
      };

     

      const xmlData = `<QueueMessage><MessageText>${message}</MessageText></QueueMessage>`;

    
    useEffect(() => {
        axios.post(url, xmlData, axiosConfig)
        .then(response => response.data)
        .then(response => setData(response))
        .then(() => setLoading(false))
        .catch((err) => { setError(err)})
    },[message]);

    return [data, loading, error];
}

export default App;