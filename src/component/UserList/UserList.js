
import { useEffect } from 'react';

import { ErrorMessage, SpinnerComponent } from '../index';
import { useHttpGet } from '../../hook';
import { useState } from 'react';
import UserCard from '../UserCard';



const App = ({url}) => {

    const [user, setUser] = useState();
    const [data, loading, error] = useHttpGet(url);
   

    if (loading) return <SpinnerComponent/>
    if (error) return <p><ErrorMessage error={error} /></p>

    const handleChange = (e) => setUser(data.find(o => o.id == e.target.value));
    
    return(
     <>
        <select onChange={handleChange}>
            <option value="-1">-- Please Select --</option>
            {data.map( o => <option value={o.id}>{o.name}</option>)}
        </select>
        { user && <UserCard user={user} /> }
     </>
    )
}

export default App;