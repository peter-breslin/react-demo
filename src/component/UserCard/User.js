
const App = ({user}) => {

    return(
        <>
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
            <h4>{user.phone}</h4>
        </>
    )
}

export default App;