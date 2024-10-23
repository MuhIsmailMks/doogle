import { useState } from 'react' 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 

// images
import external from './assets/icons/external.svg';
import bgGenerator from './assets/images/bgGenerator.png';


// componext
import Hero from './components/Hero'; 
import About from './components/About'; 
import Tokenomics from './components/Tokenomics'; 
import Roadmap from './components/Roadmap';
import CexListing from './components/CexListing';
import BobotronGenerator from './BobotronGenerator'; 
// css
import './App.css'
import Footer from './components/Footer';
import HowToBuy from './components/HowToBuy';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generator" element={<BobotronGenerator />} />
        </Routes>
    </Router>
  );
}
 



function Home(){

return (

  <div className='w-full min-h-[100vh] h-auto max-w-[100%] relative overflow-hidden flex flex-col items-center gap-[80px] lg:gap-[100px]'> 

    <Navbar/>
    
   <Hero/>

   <About/>
   
   <Tokenomics/>
   
   <HowToBuy/>
   
   <Roadmap/>

   
   {/* <!-- generator --> */}
   <section className="w-[90%] lg:w-[70%] toPage h-[250px] md:h-[400px]   rounded-xl relative border-2 border-[#97000a] flex_center">

      <Link to="/generator" className="absolute w-full h-full z-10 left-0 top-0 flex_center">

        {/* <!-- text --> */}
        <div  className="absolute top-[5%] flex flex-col items-center z-[5] text-white text-center px-5"   >
        <img
          src={external}
          alt="upload"
          className="w-[50px] h-auto object-contain"
        />
        <p className="text-[1rem] md:text-[1.5em]">make your meme</p>
        <p className="text-[1rem] md:text-[1.5em]"> Go To Page</p> 
      </div>

        <div className="absolute bottom-0 w-full h-full z-0 flex_center">
          <img
            src={bgGenerator}
            alt="bgGenerator"
            className="bottom-0 w-[60%] h-auto object-contain absolute z-0"
          />  
        </div>

      </Link>

  </section>
    
   <CexListing/>

   <Footer/>

 

    
  </div>

)
}

export default App
