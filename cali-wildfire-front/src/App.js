import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyComponent from "/Users/eanyakpor/Projects/wild-fire-website/California-WildFire/cali-wildfire-front/src/parts/MyComponent.js";

import Header from './parts/HeaderSection/Header';
import Footer from './parts/FooterSection/Footer';

import {Home} from './parts/HomeSection/Home';
// // import { Timeline } from './parts/WildfireTimelineSection/Timeline';


import ComingSoon from './parts/ComingSoon/ComingSoon';
import NotFound from './parts/NotFound/NotFound';


function App() {
  return (
    <div className="no-app">
          {/* I forgot what this means but lets just say its the java main function */}
        <MyComponent />
      <Router>
        <Header/>
          {/* this is a unique thing but all it is the reason the header persists on every page with out it being tied to one specific page */}

        <Routes>
          <Route path="/" element ={<Home />} />  
          {/* <Route path="/WildfireTimelineSection" element={<Timeline />} /> */}
              {/* This is the only thing that you should interact with the most since its where everything is redirected.
              The way I can explain is that think of this as a train station. You start at "/" or http://localhost:3000
              and if you would like to reach the timeline page you will hop on station "/WildfireTimelineSection" or http://localhost:3000/WildfireTimelineSection.
              Hopefully you are starting to notice that these paths look exactly like URL links because they are so, keep track of names because they also play as 
              import names if you deside to link a page directly to another.  */}



          <Route path="/ComingSoon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;