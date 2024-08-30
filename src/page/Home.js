
import {  Wrapper, Counter1, Counter2} from "../component";


const App = () => {

    return(
      <>
      <Wrapper render={(count, plusCount) => {
        return <Counter1 count={count} plusCount={plusCount}/>
      }}/>

<Wrapper render={(count, plusCount) => {
        return <Counter2 count={count} plusCount={plusCount}/>
      }}/>
     
      {/* <MessageQueueForm baseUrl={process.env.REACT_APP_MESSAGE_QUEUE_BASE_URL} url={process.env.REACT_APP_MESSAGE_QUEUE_URL}/> */}
      </>
    )
  };
  
  export default App;