
import { useQuery, gql} from '@apollo/client';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

const App = () => {
  return(
    <>
    <h4>GraphQL Example</h4>
    <p>Apollo Client is connected to React with the ApolloProvider component <i>(See App.js)</i> similar to React's Context.Provider and enables us to execute any query against the Apollo Client Uri via the <i>'useQuery'</i> hook</p>
    <p></p>
      <DisplayLocations query={GET_LOCATIONS} />
    </>
  )
  }

  export default App;