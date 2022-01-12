import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes';




function App() {

  const user = true ;

  return (
    <Router>
        <Routes user={user}/>
    </Router>
 );
}

export default App;
