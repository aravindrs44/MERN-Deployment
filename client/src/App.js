import './App.css';
import { useState } from 'react';
import { Router } from '@reach/router';
import Home from './views/Home';
import Create from './views/Create';
import Details from './views/Details';

function App() {
  const [captainState, setCaptainState] = useState(false);

  return (
    <div className="App">
      <Router>
        <Home captainState = {captainState} setCaptainState = {setCaptainState} path = '/' />
        <Create captainState = {captainState} path = '/pirate/new' />
        <Details path = '/pirate/:id' />
      </Router>
    </div>
  );
}

export default App;
