import { useHttpGet } from '../../hook';
import UserCard from '../UserCard';

const App = ({url}) => {

    const [data, loading, error] = useHttpGet(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return(
     <>
         <h4>[Http Get Example using Axios]</h4>
         {data.map(o => ( <UserCard key={o.id} user={o}/>))}
     </>
    )
}

export default App;