

import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from './Components/Home';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import { useEffect, useState } from 'react';
import { scrollerConfig } from './Components/Scroller';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};


const Education: React.FC = () => {
  return <h1>Education Page</h1>;
};

const NotFound: React.FC = () => {
  return <h1>Makayen walo</h1>;
};


const App: React.FC<Props> = () => {


  const [camParams] = useState(() => ({ x: 0, y:0, z: 0, rotation: 0 }));
    
  useEffect(() => {
    // Example of adjusting the start / end timing
    gsap.to(camParams, {
      x: -Math.PI * 2,
      y: -Math.PI * 2,
      z: -Math.PI * 2,
      rotation: Math.PI * 2,
      repeat: 2,
      scrollTrigger: {
        ...scrollerConfig,
      },
    });
  }, [camParams]);

  return (
    <BrowserRouter>
     
          <ul >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/Experience">Experience</Link>
            </li>
            <li>
              <Link to="/Education">Education</Link>
            </li>
          </ul>
       
      <Routes>      

          <Route path="/" element={<Home/>} />
          <Route path="/*"element={<NotFound/>} />
          <Route path="/Skills" element={<Skills/>} />
          <Route path="/Experience" element={<Experience/>} />
          <Route path="/Education" element={<Education/>} />

          
        </Routes>
    </BrowserRouter>
  );
};




export default App
