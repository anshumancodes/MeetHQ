
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
// import './App.css'
import Home from './components/pages/Home';
import { Signup } from './components/globals/Signup';
import { Signin } from './components/globals/Signin';
import Meet from './components/pages/Meet';

function App() {


  return (
    <Router>
    <Routes>
    <Route
        path="/"
        exact
        element={<Home />}
      />
       <Route
        path="/signup"
        exact
        element={<Signup/>}
      />
        <Route
        path="/signin"
        exact
        element={<Signin/>}
      />
      <Route
        path="/meet"
        exact
        element={<Meet/>}
      />
    </Routes>
      
      {/* Add more routes as needed */}
    
  </Router>
  )
}

export default App
