import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Question1 from './Question1'
import Question2 from './Question2'
import Question5 from './Question5'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/Question1" component={Question1} />
          <Route exact path="/Question2" component={Question2} />
          <Route exact path="/Question5" component={Question5} />
        </div>
      </Router>
    </div>

  );
}

export default App;
