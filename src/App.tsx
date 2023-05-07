

import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from './Components/Home';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};



const Skills: React.FC = () => {
  return <h1>Skills Page</h1>;
};
const Experience: React.FC = () => {
  return <h1>Experience Page</h1>;
};
const Education: React.FC = () => {
  return <h1>Education Page</h1>;
};

const NotFound: React.FC = () => {
  return <h1>Makayen walo</h1>;
};


const App: React.FC<Props> = () => {

  return (
    <BrowserRouter>
      <div>
       
          <ul>
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
       

        

      </div>
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
