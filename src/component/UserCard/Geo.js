const App = ({geo}) => {
    if(!geo)
        return null;

    return(
        <>
            <div class="grid-container">
            <div><span>Latitude/Longitude</span>{geo.lat}/{geo.lng}</div>
          </div>
        </>
    )
    };
    
    export default App;