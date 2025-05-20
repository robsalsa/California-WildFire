import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './parts/HeaderSection/Header';

import {Home} from './parts/HomeSection/Home';
import { Timeline } from './parts/WildfireTimelineSection/Timeline';


function App() {
  return (
    <div className="no-app">
      <Router>
        <Header/>

        <Routes>
          <Route path="/" element ={<Home />} />  
          <Route path="/WildfireTimelineSection" element={<Timeline />} />




          <Route path="*" element={<h1>404 - Page Not found!</h1>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
