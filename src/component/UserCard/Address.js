const App = ({address}) => {

    return(
        <>
            <h4>{address.street}</h4>
            <h4>{address.suite}</h4>
            <h4>{address.city}</h4>
            <h4>{address.zipcode}</h4>
        </>
    )
    };
    
    export default App;