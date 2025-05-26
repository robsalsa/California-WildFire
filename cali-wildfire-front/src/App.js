import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './parts/HeaderSection/Header';
import Footer from './parts/FooterSection/Footer';

import {Home} from './parts/HomeSection/Home';
import { Timeline } from './parts/WildfireTimelineSection/Timeline';

import ComingSoon from './parts/ComingSoon/ComingSoon';
import NotFound from './parts/NotFound/NotFound';



function App() {
  return (
    <div className="no-app">
      <Router>
        <Header/>

        <Routes>
          <Route path="/" element ={<Home />} />  
          <Route path="/WildfireTimelineSection" element={<Timeline />} />



          <Route path="/ComingSoon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />


        </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
