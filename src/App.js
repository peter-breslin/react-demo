import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {UserList, LocationList, Home, NoPage} from './page';
import {Navbar} from './layout';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="user-list" element={<UserList />} />
              <Route path="location-list" element={<LocationList />} />
              <Route path="*" element={ <NoPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
        </ApolloProvider>
    </>

  );
}

export default App;
