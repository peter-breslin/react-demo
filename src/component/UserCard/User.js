import './User.css';


const App = ({user}) => {
    if(!user)
        return null; // Component hides itself when null is returned.

    return(
        <>
          <div class="grid-container-user">
            <div class="grid-item-1"><span>NAME:</span>{user.name}</div>
            <div class="grid-item-2"><span>EMAIL:</span> {user.email}</div>
            <div class="grid-item-3"><span>PHONE:</span> {user.phone}</div>
          </div>
        </>
    )
}

export default App;