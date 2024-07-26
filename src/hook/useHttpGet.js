
import { useState, useEffect } from 'react';
import axios from 'axios';


const App = (url) => {
    const [data, setData] = useState([]);

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
        .catch((err) => { console.log("Error", err);
        })
    };

    useEffect(() => {
        httpGet();
    },[url]);

    return data;
}

export default App;