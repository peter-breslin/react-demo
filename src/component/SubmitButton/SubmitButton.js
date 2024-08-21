import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const App = ({displayText="Submit", onClickHandler, inProgress=false}) =>{

    return(
        <>
            <button className="btn btn-medium"onClick={onClickHandler} disabled={inProgress} >
                {!inProgress ? displayText : <FontAwesomeIcon icon={faSpinner} className="fa-spin" size="lg"/>}
            </button>
        </>
    )
}
    
    
    

export default App;