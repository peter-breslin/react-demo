import { UserList } from '../component';

const App = () => {
    return(
      <>
       <UserList url={process.env.REACT_APP_URL_USERS} />
      </>
    )
  };
  
  export default App;