import  { Outlet, Link} from 'react-router-dom';

const App = () => {

    return(
        <>
      <nav>
        <ul className='nav'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user-list">User List</Link>
          </li>
          <li>
            <Link to="/location-list">Location List</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
        </>
    )
};

export default App;