

import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Experience from './Components/Experience';


// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};


const Education: React.FC = () => {
  return <h1>Education Page</h1>;
};

const NotFound: React.FC = () => {
  return <h1>Makayen walo</h1>;
};


const App: React.FC<Props> = () => {



  return (

    <>




        <BrowserRouter>

          <div className="overlay">
            <Menu active={true} />
          </div>
          {/*
           
              <Link to="/Education">Education</Link>
              <Link to="/Education">Education</Link>
            */}

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Education" element={<Education />} />


          </Routes>
        </BrowserRouter>

      




    </>



  );
};




export default App
