
import { useState } from 'react';

import { ErrorMessage, SpinnerComponent } from '../index';
import { useHttpGet } from '../../hook';
import UserCard from '../UserCard';
import { SelectTag } from '../CommonHtmlElement';



const App = ({url}) => {

    const [user, setUser] = useState();
    const [data, loading, error] = useHttpGet(url);
   

    if (loading) return <SpinnerComponent/>
    if (error) return <p><ErrorMessage error={error} /></p>

    const handleChange = (e) => setUser(data.find(o => o.id == e.target.value));
    
    return(
     <>
        <SelectTag data={data} handleChange={handleChange}/>
        { user && <UserCard key={user.id} user={user} /> }
     </>
    )
}

export default App;