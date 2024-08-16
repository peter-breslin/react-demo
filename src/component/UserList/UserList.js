
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
        <div class="grid-container">
            <div><SelectTag data={data} handleChange={handleChange}/></div>
            <div>{ user && <UserCard key={user.id} user={user} /> }</div>
          </div>
     </>
    )
}

export default App;