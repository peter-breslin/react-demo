const App = ({geo}) => {
    if(!geo)
        return null;

    return(
        <>
        <h4>GEO</h4>
            <h4>{geo.lat}</h4>
            <h4>{geo.lng}</h4>
        </>
    )
    };
    
    export default App;