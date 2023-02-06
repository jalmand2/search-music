import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React, {useState} from 'react';
import './App.css';
import Auth from './utils/auth';
import Nav from './components/Nav';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectRoute from './components/ProtectRoute';

const httpLink = createHttpLink({
  uri: '/graphql',
});

/// SET CONTEXT ///
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

/// SET UP CLIENT ///
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// function App() {
//   const [pageIndex, setPageIndex] = useState(0);

//   return (

//     <div id="canvas" class="root">
     
//       <Nav
//         showHome={() => setPageIndex(0)} />

//       {pageIndex === 0 ? (
//         <Home />
//       ) : (
//         <Home />
//       )}
//       <footer className='text-center text-lg-left'>
//                 <div className='text-center p-3'>
//                 <a style={{color: 'black'}} href="https://github.com/jalmand2"><iconify-icon icon="ri:github-fill" width="100" height="100"></iconify-icon></a>
//                 <a style={{color: 'black'}} href="https://www.linkedin.com/in/jessicaalmand/"><iconify-icon icon="mdi:linkedin" width="100" height="100"></iconify-icon></a>
//                 <a style={{color: 'black'}} href="https://www.facebook.com/jessica.almand/"><iconify-icon icon="ic:baseline-facebook" width="100" height="100"></iconify-icon></a>
//                 <p style={{color: 'black'}}>© Developed by Jessica Almand</p>
//                 </div>
//               </footer>

              
//     </div>
                  
// );
// }
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='dashboard'
            element={Auth.loggedIn() ? <Dashboard /> : <ProtectRoute />}
          />
        </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
