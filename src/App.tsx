import React from 'react';
// routes
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
// global styles
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App;
