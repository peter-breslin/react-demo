
import { useState, useEffect } from 'react';
import axios from 'axios';


const App = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    let axiosConfig = {
        headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
        }
      };

    const httpGet= () => {
        axios.get(url, axiosConfig)
        .then(response => response.data)
        .then(response => setData(response))
        .catch((err) => { setError(err)})
        .finally(() => setLoading(false))
    };

    useEffect(() => {
        httpGet();
    },[url]);

    return [data, loading, error];
}

export default App;