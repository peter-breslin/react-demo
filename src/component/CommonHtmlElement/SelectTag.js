


const App = ({data, handleChange}) => {

    return(
        <>
        <select onChange={handleChange}>
            <option value="-1">Please Select</option>
            {data.map( o => <option value={o.id}>{o.name}</option>)}
        </select>
        </>
    )
}

export default App;