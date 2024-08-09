import { ErrorMessage, SpinnerComponent } from '../index';
import { useHttpGet } from '../../hook';
import UserCard from '../UserCard';



const App = ({url}) => {

    const [data, loading, error] = useHttpGet(url);

    if (loading) return <SpinnerComponent/>
    if (error) return <p><ErrorMessage error={error} /></p>

    return(
     <>
         <h4>[Http Get Example using Axios]</h4>
         {data.map(o => ( <UserCard key={o.id} user={o}/>))}
     </>
    )
}

export default App;