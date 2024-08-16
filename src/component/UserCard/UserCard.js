import './UserCard.css';


import User from './User'
import Company from './Company';
import Address from './Address';
import Geo from './Geo';


const App = ({user}) => {

    return(
        <>
             <div class="grid-container-user-card" >
                <div class="grid-item item1"><User user={user} /></div>
                 <div class="grid-item item2"><Address address={user.address} /> </div>
                <div class="grid-item item3"><Company company={user.company} /></div>
                <div class="grid-item item4"><Geo geo={user.address.geo}/></div>
             </div>
        </>
    )
};

export default App;