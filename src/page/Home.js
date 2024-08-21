
import {  MessageQueueForm, SimpleForm } from "../component";


const App = () => {

    return(
      <>
      <SimpleForm />
      <MessageQueueForm url={process.env.REACT_APP_MESSAGE_QUEUE_URL} />
      </>
    )
  };
  
  export default App;