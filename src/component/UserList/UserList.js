import { useHttpGet } from '../../hook';
import UserCard from '../UserCard';

const App = ({url}) => {

    const data = useHttpGet(url);

    return(
     <>
    <ul>
        {data.map(o => ( <UserCard key={o.id} user={o}/>))}
    </ul> 
     </>

    )
}

export default App;