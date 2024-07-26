import User from './User'
import Company from './Company';
import Address from './Address';
import Geo from './Geo';


const App = ({user}) => {

    return(
        <>
            <User user={user} />
            <Company company={user.company} />
            <Address address={user.address} />
            <Geo geo={user.address.geo}/>
        </>
    )
};

export default App;