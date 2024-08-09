import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'


const App = ({error}) => {
    return  <p><FontAwesomeIcon icon={faExclamationCircle} size="lg"/> {error.message}</p>;
}

export default App;