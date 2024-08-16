
const App = ({user}) => {
    if(!user)
        return null; // Component hides itself when null is returned.

    return(
        <>
          <div class="grid-container">
            <div><span>Name</span>{user.name}</div>
            <div><span>Email</span>{user.email}</div>
            <div><span>Phone</span>{user.phone}</div>
          </div>
        </>
    )
}

export default App;