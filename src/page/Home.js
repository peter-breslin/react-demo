
import {  MessageQueueForm, UserCallbackForm } from "../component";


const App = () => {

    return(
      <>
      <UserCallbackForm />
      {/* <MessageQueueForm baseUrl={process.env.REACT_APP_MESSAGE_QUEUE_BASE_URL} url={process.env.REACT_APP_MESSAGE_QUEUE_URL}/> */}
      </>
    )
  };
  
  export default App;