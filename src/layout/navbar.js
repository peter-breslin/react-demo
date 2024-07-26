import  { Outlet, Link} from 'react-router-dom';


const App = () => {

    return(
        <>
          <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user-list">User List</Link>
          </li>
          <li>
            <Link to="/location-list">Apollo Client</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
        </>
    )
};

export default App;