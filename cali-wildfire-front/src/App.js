import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './parts/HeaderSection/Header';

import {Home} from './parts/HomeSection/Home';


function App() {
  return (
    <div className="no-app">
      <Router>
        <Header/>

        <Routes>
          <Route path="/" element ={<Home />} />   


        </Routes>
      </Router>
    </div>
  );
}

export default App;
