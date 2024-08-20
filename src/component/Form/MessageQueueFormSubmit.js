
import { useSendToQueue } from '../../hook';

const App = (url) => {

    const [sendToQueue, inProgress, error] = useSendToQueue(url);

    const submit = async (data) => {

        sendToQueue({
            messageTypeId: 11,
            name: data.name,
            reference: data.reference
        });
     };

    return [submit, inProgress, error];
};

export default App;


