

const App = ({id, name, photo, description}) =>{
    return(
    <>
     <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
    </>)

}

export default App;