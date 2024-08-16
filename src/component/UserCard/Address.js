

const App = ({address}) => {
    if(!address)
        return null;

    return(
        <>
            <div class="grid-container">
            <div><span>Address</span>{address.street},{address.suite},{address.city},{address.zipcode}</div>
            </div>
        </>
    )
    };
    
    export default App;