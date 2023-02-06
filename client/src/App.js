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
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectRoute from './components/ProtectRoute';
import Navbar from "./components/Nav/navbar";

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
//   return (
//     <Navbar />
//   )
  
// };
function App() {
  return (
    <ApolloProvider client={client}>
       
      <Router>
      <Navbar />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='dashboard'
            element={Auth.loggedIn() ? <Dashboard /> : <ProtectRoute />}
          />
        </Routes> 
       </Router>
    </ApolloProvider>
  ); 
}
export default App;
