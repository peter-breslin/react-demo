import './UserCard.css';


import User from './User'
import Company from './Company';
import Address from './Address';
import Geo from './Geo';


const App = ({user}) => {

    return(
        <>
             <div class="grid-container-user">
                <div class="grid-item item1"><User user={user} /></div>
                <div class="grid-item item2"><Company company={user.company} /></div>
                <div class="grid-item item3"><Address address={user.address} /></div>
                <div class="grid-item item4"></div>
                <div class="grid-item item5"><Geo geo={user.address.geo}/></div>
             </div>
        </>
    )
};

export default App;