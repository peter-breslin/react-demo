import './UserCard.css';


import User from './User'
import Company from './Company';
import Address from './Address';
import Geo from './Geo';


const App = ({user}) => {

    return(
        <>
             <div class="grid-container-user">
                <div><User user={user} /></div>
                <div><Company company={user.company} /></div>
                <div><Address address={user.address} /></div>
                <div><Geo geo={user.address.geo}/></div>
             </div>

            
           
         
          
        </>
    )
};

export default App;