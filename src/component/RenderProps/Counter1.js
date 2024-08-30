


const App = (props) => {


    return(
        <>
        <button style={{ color:"red"}}onClick={props.plusCount}>{props.count}</button>
        </>
    )
}

export default App;