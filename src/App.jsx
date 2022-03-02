import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes';




function App() {

  const user = useSelector(state => state.user.currentUser) ;

  return (
    <Router>
        <Routes user={user}/>
    </Router>
 );
}

export default App;
