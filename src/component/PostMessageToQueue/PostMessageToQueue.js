

import { useHttpPostMessageToQueue } from '../../hook';
import { ErrorMessage, SpinnerComponent } from '../index';


const App = ({url, message}) => {

    const [data, loading, error] = useHttpPostMessageToQueue(url, message);
   

    // if (loading) return <SpinnerComponent/>
    if (error) return <ErrorMessage error={error} />


return(
<>

<h1>Post Message</h1>
</>)

}


export default App;