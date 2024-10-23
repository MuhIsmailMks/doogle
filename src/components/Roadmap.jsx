import React, {useRef, useEffect} from 'react'

import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import roadmapTitle from '../assets/images/roadmapTitle.png';
import roadmapImg from '../assets/images/roadmapImg.png';
import torch from '../assets/images/torch.png';
import decorTitle from '../assets/icons/decorTitle.svg';

const Roadmap = () => {
  const rocketRef = useRef(null);  
  const howToRef = useRef(null); 
  const col1StartRef = useRef(null); 

 
  useEffect(() => {
    const initRocketAnimation = () => {
      gsap.killTweensOf(rocketRef.current);

      const triggerElement = window.innerWidth < 1024 ? col1StartRef.current : howToRef.current;
      const YValueResponsive = window.innerWidth < 1024 ? '-50vw' : '-20vw';
      const startRocket = window.innerWidth < 1024 ? '10vw' : '50vw';

      gsap.fromTo(rocketRef.current, 
        { y: startRocket }, 
        { 
          y: YValueResponsive, 
          ease: 'none', 
          scrollTrigger: {
            trigger: triggerElement,
            start: '50% 100%',
            end: '100% 50%',
            scrub: 5,
          }
        }
      );
    };

    initRocketAnimation();
 
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);  


  return (
    <>
      <section ref={col1StartRef} id="roadmap" className=" mt-12 lg:mt-40 ">
      
      {/* <!-- title --> */}
      <div className="w-full flex_center">
        <img src={roadmapTitle} alt="roadmap"   className="w-[70%] h-auto  object-contain"/> 
      </div>

      {/* <!-- content roadmap --> */}
      <div ref={howToRef} className="howTo relative w-full h-auto flex flex-col items-center justify-center lg:items-start max-lg:px-4 lg:pr-6 gap-6 mt-10 lg:mt-32 min-[1500px]:gap-[3vw] pb-[10vw] contentContainer">

        {/* <!-- image --> */}
        <div className="w-full lg:w-[40%] relative lg:absolute z-20 right-0 lg:bottom-[40%]">
          <img
          ref={rocketRef}
            src={roadmapImg}
            alt="roadmap"
            className="w-full h-auto object-contain rocket"
          />
        </div>

        {/* <!-- col 1 --> */}
        <div
          className="w-full lg:w-[70%] h-auto flex justify-end items-center relative col1_start" data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          {/* <!-- about content --> */}
             <div className="light_container w-[79%] lg:w-[73%] h-[180px] lg:h-[250px] min-[1500px]:h-[14vw] p-2"  >

            <div className="inner_content_light w-full h-full">

              <div className="content p-4 xl:p-8">
                   <div className="title_content">
                    <span>
                      <img src={decorTitle} alt="rotate" />
                    </span>
                    <h3>step 1</h3>
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos provident odit maiores aliquid modi ipsa. Facere possimus repellendus nulla blanditiis saepe.</p> 

              </div>

              <div className="light flex_center">
                <div className="light1 light_animation"></div>
              </div>

            </div>

          </div>

          {/* <!-- image --> */}
          <div
            className="torch1 absolute left-[-3%] lg:left-[3%] w-[23%] h-full flex_center"
          >
            <img
              src={torch}
              alt="torch"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* <!-- col 2 --> */}
        <div
          className="w-full lg:w-[70%] h-auto flex justify-end items-center relative" data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="300"
        >
          {/* <!-- about content --> */}
             <div className="light_container w-[79%] lg:w-[73%] h-[180px] lg:h-[250px] min-[1500px]:h-[14vw] p-2"  >

            <div className="inner_content_light w-full h-full">

              <div className="content p-4 xl:p-8">
                   <div className="title_content">
                    <span>
                      <img src={decorTitle} alt="rotate" />
                    </span>
                    <h3>step 2</h3>
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos provident odit maiores aliquid modi ipsa. Facere possimus repellendus nulla blanditiis saepe.</p> 

              </div>

              <div className="light flex_center">
                <div className="light1 light_animation"></div>
              </div>

            </div>

          </div>

          {/* <!-- image --> */}
          <div
            className="torch1 absolute left-[-3%] lg:left-[3%] w-[23%] h-full flex_center"
          >
            <img
             src={torch}
              alt="torch"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* <!-- col 3 --> */}
        <div
          className="w-full lg:w-[70%] h-auto flex justify-end items-center relative" data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          {/* <!-- about content --> */}
             <div className="light_container w-[79%] lg:w-[73%] h-[180px] lg:h-[250px] min-[1500px]:h-[14vw] p-2"  >

            <div className="inner_content_light w-full h-full">

              <div className="content p-4 xl:p-8">
                   <div className="title_content">
                    <span>
                      <img src={decorTitle} alt="rotate"/>
                    </span>
                    <h3>step 3</h3>
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos provident odit maiores aliquid modi ipsa. Facere possimus repellendus nulla blanditiis saepe.</p> 

              </div>

              <div className="light flex_center">
                <div className="light1 light_animation"></div>
              </div>

            </div>

          </div>

          {/* <!-- image --> */}
          <div
            className="torch1 absolute left-[-3%] lg:left-[3%] w-[23%] h-full flex_center"
          >
            <img
              src={torch}
              alt="torch"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* <!-- col 4 --> */}
        <div
          className="w-full lg:w-[70%] h-auto flex justify-end items-center relative" data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="500"
        >
          {/* <!-- about content --> */}
             <div className="light_container w-[79%] lg:w-[73%] h-[180px] lg:h-[250px] min-[1500px]:h-[14vw] p-2"  >

            <div className="inner_content_light w-full h-full">

              <div className="content p-4 xl:p-8">

                  <div className="title_content">  
                    <span>
                      <img src={decorTitle} alt="rotate" />
                    </span>
                    <h3>step 4</h3>
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos provident odit maiores aliquid modi ipsa. Facere possimus repellendus nulla blanditiis saepe.</p> 

              </div>

              <div className="light flex_center">
                <div className="light1 light_animation"></div>
              </div>

            </div>

          </div>

          {/* <!-- image --> */}
          <div
            className="torch1 absolute left-[-3%] lg:left-[3%] w-[23%] h-full flex_center"
          >
            <img
              src={torch}
              alt="torch"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

      </div>

    </section> 
    </>
  )
}

export default Roadmap
