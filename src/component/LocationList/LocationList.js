
import { useQuery, gql} from '@apollo/client';
import { ErrorMessage, SpinnerComponent } from '../index';
import LocationView from './LocationView';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function DisplayLocations({query}) {
  const { loading, error, data } = useQuery(query);

  if (loading) return <SpinnerComponent/>
  if (error) return <p><ErrorMessage error={error} /></p>;

  return data.locations.map(({ id, name, description, photo }) => 
  <LocationView id={id} name={name} description={description} photo={photo} />);}

const App = () => {
  return(
    <>
    <h4>[GraphQL Example]</h4>
    <p>Apollo Client is connected to React with the ApolloProvider component <i>(See App.js)</i> similar to React's Context.Provider and enables us to fetch data against the Apollo Client Uri via the <i>'useQuery'</i> hook</p>
      <DisplayLocations query={GET_LOCATIONS} />
    </>
  )
  }

  export default App;