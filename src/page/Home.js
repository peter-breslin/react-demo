
import {  MessageQueueForm } from "../component";


const App = () => {

    return(
      <>
      <MessageQueueForm url={process.env.REACT_APP_MESSAGE_QUEUE_URL} />
      </>
    )
  };
  
  export default App;