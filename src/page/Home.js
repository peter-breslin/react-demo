
import {  PostMessageToQueue } from "../component";


const App = () => {

  var message = "Hello Wodf";

    return(
      <>
      <PostMessageToQueue url={process.env.REACT_APP_MESSAGE_QUEUE_URL} message={message} />
      </>
    )
  };
  
  export default App;