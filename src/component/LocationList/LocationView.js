

const App = ({id, name, photo, description}) =>{
    return(
    <>
     <div>
      <div class="header-medium">{name}</div>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <div class="header-medium">About this location:</div>
      <p>{description}</p>
      <br />
    </div>
    </>)

}

export default App;