import React, {useState, useRef, useMemo} from 'react'


import menuImg from '../assets/images/menu.png';
import twitter from '../assets/icons/Twitter.svg';
import telegram from '../assets/icons/Telegram.svg';
import decorNavImg from '../assets/icons/decorNav.svg';
import close from '../assets/icons/closeBtn.svg';
import tronIcon from '../assets/images/tron.png';  
import starIcon from '../assets/images/Star.png';  
import {CometAnimation} from './Animations'

import { Canvas,useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';


function Stars() {
  const mesh = useRef();

  // Load texture bintang
  const star = useLoader(THREE.TextureLoader, starIcon);

  // Membuat posisi bintang secara acak
  const starPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 5000; i++) {
      positions.push((Math.random() - 0.5) * 2000);
      positions.push((Math.random() - 0.5) * 2000);
      positions.push((Math.random() - 0.5) * 2000);
    }
    return new Float32Array(positions);
  }, []);

  useFrame(() => {
    // Memutar bintang agar terlihat seperti berputar
    mesh.current.rotation.x += 0.001;
    mesh.current.rotation.y += 0.001;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={starPositions}
          count={starPositions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={star} // Menggunakan texture bintang
        size={5} // Atur ukuran bintang
        sizeAttenuation
        transparent
        alphaTest={0.5} // Menghilangkan latar belakang yang tidak transparan
      />
    </points>
  );
}

const Navbar = () => { 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const openMenu = () => {
    setIsMenuOpen(true);
    };

    const closeMenu = () => {
    setIsMenuOpen(false);
    };

  return (
    <>
       {/* navbar */}
       <nav className="w-full items-center flex_between px-4 lg:px-6 pt-6">

          {/* <!-- menu --> */}
          <div data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="100">
            <div onClick={openMenu} className="menuBtn rounded-sm border-[2px] lg:border-[4px] borderClr relative px-2 h-[50px] lg:h-[70px] flex_center cursor-pointer hoverbtn"  >
          
              <img
                src={menuImg}
                alt=""
                className="w-[90px] h-auto object-contain"
              />

              <span className="decorNav">
              <img src={decorNavImg} alt="decor"/>
              </span>

            </div>
          </div>


          {/* <!-- social media --> */}
          <div className="social flex_center gap-5" data-aos="fade-left"
          data-aos-duration="600"
          data-aos-delay="100">

            <a href="https://x.com/BOBOTRONclub"   target="_blank"
            className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn"   >
            <img
              src={twitter}
              alt="twitter"
              className="w-[20px] md:w-[3vw] max-w-[100px]"
            />

            <span className="decorNav">
              <img src={decorNavImg} alt="decor"/>
            </span>

          </a>

            <a href="https://t.me//BOBOTRONclub"  target="_blank"  className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn"  >
              <img src={telegram} alt="twitter" className="w-[20px] md:w-[3vw] max-w-[100px]" />

                <span className="decorNav">
                  <img src={decorNavImg} alt="decor"/>
                </span>
            </a>

          </div>

      </nav> 

      {/* menu container*/} 
      <div className={`menu_links_container absolute z-[999] w-full h-auto left-0 top-0 p-[5vw] xl:p-[2vw] overflow-hidden ${isMenuOpen ? "active" : ""}`}>
        
        <div className="flex_between w-full h-auto  relative z-10">

          <div className="social flex_center gap-5">
            
            <a href="https://x.com/BOBOTRONclub"   target="_blank"
              className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn"   >
              <img
                src={twitter}
                alt="twitter"
                className="w-[20px] md:w-[3vw] max-w-[100px]"
              />

                <span className="decorNav">
                  <img src={decorNavImg} alt="decor"/>
              </span>

            </a>

            <a href="https://t.me//BOBOTRONclub"  target="_blank"  className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn"  >
              <img
                src={telegram} alt="twitter"     className="w-[20px] md:w-[3vw] max-w-[100px]"    />
                  <span className="decorNav">
                  <img src={decorNavImg} alt="decor"/>
              </span>

            </a>

            <a href="https://tron.network/"   target="_blank"
            className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn"   >
            <img
              src={tronIcon}
              alt="tron"
              className="w-[20px] md:w-[3vw] max-w-[100px]"
            />

              <span className="decorNav">
                  <img src={decorNavImg} alt="decor"/>
              </span>

          </a>

          </div>

          <div className="flex_center gap-5"  onClick={closeMenu}> 

            <button  
              className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn closeBtn" >

              <img
                src={close}
                alt="close"
                className="w-[20px] md:w-[3vw] max-w-[100px]"
              />

                <span className="decorNav">
                  <img src={decorNavImg} alt="decor"/>
              </span>


            </button>


          </div>

        </div>

        <div className="links_nav mt-6 relative z-10">
          <ul className="flex flex-wrap w-full gap-[4vw]">
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#tokenomics">tokenomics</a>
            </li>
            <li>
              <a href="#howtobuy">how to buy</a>
            </li>
            <li>
              <a href="#roadmap">roadmap</a>
            </li>
            <li>
              <a href="#partnert">partnert</a>
            </li>
          </ul>
        </div>

        
        {/* <ParticleComponent/>   */}
        <div className="absolute left-0 top-0 w-full h-full z-0">
                <Canvas
              gl={{ alpha: true }} // Membuat background canvas transparan
              camera={{ position: [0, 0, 500], fov: 75 }}
            >
              <Stars />
            </Canvas>
        </div>

        <CometAnimation/>

      </div>
    </>
  )
}

export default Navbar
