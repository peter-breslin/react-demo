


const App = (props) => {


    return(
        <>
        <button style={{ color:"blue"}}onClick={props.plusCount}>{props.count}</button>
        </>
    )
}

export default App;