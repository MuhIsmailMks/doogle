import React, {useRef, useEffect} from 'react'
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import cex_title from '../assets/images/cex_title.png';
import sunswap from '../assets/images/sunswap.png';
import trons from '../assets/images/trons.png';
import torch from '../assets/images/torch.png';

import dextools from '../assets/icons/dextools-seeklogo.svg';
import dexscreen from '../assets/icons/dex-screener-seeklogo.svg';
import twitter from '../assets/icons/Twitter.svg';
import Telegram from '../assets/icons/Telegram.svg';

const CexListing = () => {
      // animation
      const leftTorchRef = useRef(null);  
      const rightTorchRef = useRef(null);  
      const parnertContentRef = useRef(null); 
    
      useEffect(() => {
  
        function leftTorch1() {
          gsap.killTweensOf(leftTorchRef.current);
    
          const XValueResponsive = window.innerWidth < 1024 ? '1vw' : '10vw';
    
          gsap.fromTo(leftTorchRef.current, 
            { x: '-10vw' }, 
            { x: XValueResponsive, 
              ease: 'none', 
              scrollTrigger: {
                trigger: parnertContentRef.current, 
                start: '0% 100%',
                end: '100% 100%',
                scrub: 3,
              }
            }
          );
        }
        
        function rightTorch1() {
          gsap.killTweensOf(rightTorchRef.current);
    
          const XValueResponsive = window.innerWidth < 1024 ? '-1vw' : '-10vw';
    
          gsap.fromTo(rightTorchRef.current, 
            { x: '10vw' }, 
            { x: XValueResponsive, 
              ease: 'none', 
              scrollTrigger: {
                trigger: parnertContentRef.current, 
                start: '0% 100%',
                end: '100% 100%',
                scrub: 3,
              }
            }
          );
        }
    
        leftTorch1();
        rightTorch1();
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);
  
      
  return (
    <>
      <section ref={parnertContentRef} id="partnert" className=" cex_partnert">
        {/* <!-- title --> */}
        <div className="w-full flex_center mb-[10vw]">
          <img
            src={cex_title}
            alt="cex_title"
            className="w-[70%] h-auto object-contain"
          />
        </div>

        {/* <!-- partner --> */}
        <div className="w-full h-auto flex_center mt-6">
          
          {/* <!-- cex content --> */}
          <div  className="light_container large w-[80%] lg:w-[60%] h-auto min-h-[250px] lg:h-[23vw] p-2"   >
          
            <div className="inner_content_light large w-full h-full min-h-[250px]">

              <div className="content relative w-full h-full z-10 text-white  py-4 px-4"  
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="200">
              
                <div className="linksCex flex_center flex-wrap gap-5 w-full h-full">

                  <a href="https://www.dextools.io/app/en"   target="_blank"
                  className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn"   >
                  <img
                    src={dextools}
                    alt="dextools"
                    className="w-[20px] md:w-[3vw] max-w-[100px]"
                  />
      
                  <span className="deconNav"></span>
                </a>

                  <a href="https://dexscreener.com/tron/TLM6xuKG96ZrpecaAxKgKgo3kC3fuRRCfd"   target="_blank"
                  className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn"   >
                  <img
                    src={dexscreen}
                    alt="dexscreener"
                    className="w-[20px] md:w-[3vw] max-w-[100px]"
                  />
      
                  <span className="deconNav"></span>
                </a>

                  <a href="https://sunswap.com/"   target="_blank"
                  className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn" >
                  <img
                    src={sunswap}
                    alt="sunswap"
                    className="w-[20px] md:w-[3vw] max-w-[100px]"
                  />
      
                  <span className="deconNav"></span>
                </a> 
                
                <a href="https://tronscan.org/#/token20/TLM6xuKG96ZrpecaAxKgKgo3kC3fuRRCfd"   target="_blank"
                className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn " >
                <img
                  src={trons}
                  alt="tronscan"
                  className="w-[20px] md:w-[3.5vw] max-w-[100px]"
                />
    
                <span className="deconNav"></span>
              </a>

              <a href="https://x.com/BOBOTRONclub"   target="_blank"
              className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn"   >
              <img
                src={twitter}
                alt="twitter"
                className="w-[20px] md:w-[3vw] max-w-[100px]"
              />
    
              <span className="deconNav"></span>
            </a>
    
              <a href="https://t.me//BOBOTRONclub"  target="_blank"  className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn"  >
                <img
                  src={Telegram}  alt="Telegram"     className="w-[20px] md:w-[3vw] max-w-[100px]"    />
                   <span className="deconNav"></span>
              </a>
         
                </div>

              </div>

              <div className="light flex_center">
                <div className="light1 light_animation">

                </div>
                <div className="light2 light_animation"
                //   style="animation-delay: -1.5s;"
                  >
              </div>

              </div>

            </div>

          </div>

          {/* <!-- image --> */}
          <div ref={leftTorchRef} className="torch1 absolute left-[-13%] lg:left-[-5%] w-[25%] lg:w-[15%] h-full flex_center leftTorch">
            <img
              src={torch}
              alt="torch"
              className="w-full h-auto float_animation relative z-10"
              loading="lazy"
            />
            
            <div className="fires_container absolute left-[-30%] rotate-[-90deg]">
              <div className="fire_container">
                <div className="red flame"></div>
                <div className="orange flame"></div>
                <div className="yellow flame"></div>
                <div className="white flame"></div>
                <div className="blue circle"></div>
                <div className="black circle"></div>
              </div>
            </div>
          </div>

          <div ref={rightTorchRef} className="torch2 absolute right-[-13%] lg:right-[-5%] w-[25%] lg:w-[15%] h-full flex_center rightTorch">
            <div className="w-full mirror relative z-10">
              <img
                src={torch}
                alt="torch"
                className="w-full h-auto float_animation"
                // style="animation-delay: -4s;"
                loading="lazy"
              />
            </div>

            <div className="fires_container absolute right-[-30%] rotate-[90deg]">
              <div className="fire_container ">
                <div className="red flame"></div>
                <div className="orange flame"></div>
                <div className="yellow flame"></div>
                <div className="white flame"></div>
                <div className="blue circle"></div>
                <div className="black circle"></div>
              </div>
            </div>
          </div>

        </div>

      </section> 
    </>
  )
}

export default CexListing
