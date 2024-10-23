import React, {useRef, useState, useEffect} from "react";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import TypeIt from "typeit";


import aboutImg from '../assets/images/aboutImg.png';
import linkBorder from '../assets/images/linkBorder.png';
import about from '../assets/images/about.png';
import introBtn from '../assets/images/introBtn.png';
import torch from '../assets/images/torch.png';
 


const TypeAnimation = () => {
  const typeRef = useRef(null);

  useEffect(() => { 
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { 
            new TypeIt(typeRef.current, {
              strings: [
                `BOBOTRON is the ultimate fusion of tradition and innovation—a futuristic cyborg bear that blends the timeless essence of BOBO with cutting-edge technology. He is the natural evolution of BOBO, enhanced by advanced AI and robotics, representing the pinnacle of modern design. In every sense, BOBOTRON embodies the future, far surpassing the limitations of his predecessors.
                <br>
                <br>
                As a highly advanced, AI-driven version of his former self, BOBOTRON’s form is endlessly adaptable. His appearance can shift and evolve, all while retaining the core principles of his original design. This allows for limitless variations, making BOBOTRON a dynamic, ever-evolving figure... one who can transform without ever losing his identity.
                <br>
                <br>
                What truly sets BOBOTRON apart is his immortality. His consciousness is interwoven with a vast hive mind powered by artificial intelligence, making him indestructible. No matter what happens to his physical form, he can never be erased. His essence endures, eternally preserved within the collective intelligence of the network, ensuring that BOBOTRON will live on, unbroken, forever.
                <br>
                <br>
                In the rare event that BOBOTRON sustains damage, his body can be seamlessly repaired or completely regenerated, thanks to advanced modular technology. Every component is designed for rapid interchangeability, allowing him to swap out damaged parts effortlessly. Alternatively, he can be rebuilt entirely from the ground up, while preserving every detail of his core identity—his memories, instincts, and essence remain fully intact.
                <br>
                <br>
                If needed, his entire form can be reconstructed in moments, ensuring he returns with all the knowledge and experience he’s gained, completely untouched by the loss. This ability to constantly evolve and upgrade makes BOBOTRON a superior, indomitable force—surpassing all previous incarnations of Bobo in strength, resilience, and intelligence. He’s not just a bear; he’s the future.`,
              ],
              speed: 1,
              waitUntilVisible: true,
              loop: false,
            }).go();

            // Hentikan pengamatan setelah animasi berjalan
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01 }
    );

    // Mulai pengamatan untuk elemen typeRef
    observer.observe(typeRef.current);

    // Bersihkan observer saat komponen unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <p ref={typeRef} className="typeAnimation"></p>
    </>
  );
};

const TypeAnimationIntro = () => {
  const typeRef = useRef(null);

  useEffect(() => { 
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { 
            new TypeIt(typeRef.current, {
              strings: [
                `BOBOTRON is a futuristic interpretation of Bobo, a bear most often depicted in a style based on the design of Matt Furie's frog illustration named Pepe.
<br/>
Although Bobo is often misinterpreted by a vast number of uneducated crypto degenerates, he is actually considered to be the patron saint of bearish markets, making him the ultimate protector.
<br/>
If there were to be any character found in popular memes possessing the strength and tenacity required to endure the highs and (even) lows of bullish markets, none could compare to Bobo, for it it he who's able to endure the lowest of lows and hardest of hardships, making him one of the most, if not THE most, resilient of characters found amongst modern memes.`,
              ],
              speed: 1,
              waitUntilVisible: true,
              loop: false,
            }).go();

            // Hentikan pengamatan setelah animasi berjalan
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01 }
    );

    // Mulai pengamatan untuk elemen typeRef
    observer.observe(typeRef.current);

    // Bersihkan observer saat komponen unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <p ref={typeRef} className="typeAnimation"></p>
    </>
  );
};

const About = () => { 
    const [isActive, setIsActive] = useState(false); 
   
    const handleFireClick = () => {
      setIsActive(true);  
    };

    // button about
  const [activeBtn, setActiveBtn] = useState("about");
 
  const handleButtonClick = (btn) => {
    setActiveBtn(btn);
  };

    // animation
    const leftTorchRef = useRef(null);  
    const rightTorchRef = useRef(null);  
    const aboutContentRef = useRef(null); 
  
    useEffect(() => {

      function leftTorch1() {
        gsap.killTweensOf(leftTorchRef.current);
  
        const XValueResponsive = window.innerWidth < 1024 ? '1vw' : '10vw';
  
        gsap.fromTo(leftTorchRef.current, 
          { x: '-10vw' }, 
          { x: XValueResponsive, 
            ease: 'none', 
            scrollTrigger: {
              trigger: aboutContentRef.current, 
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
              trigger: aboutContentRef.current, 
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
      <section id="about" className=" flex_col_center gap-7 " ref={aboutContentRef}>
        
        {/*  image  */}
        <div className="w-full h-auto flex_center flex-col">

          <div className="w-[90%] lg:w-[50%] flex_center relative aboutImg h-auto">

            <img src={aboutImg}
              alt="about bobotron"
              className={`w-full object-contain h-auto float_animation relative aboutMainImg ${isActive ? 'active' : ''}`}
              loading="lazy"
            />

            <div className={`absolute w-[30%] h-[20%] z-10  cursor-pointer flex_center bottom-[43%] lg:bottom-[46%]  float_animation fire_btn ${isActive ? 'active' : ''}`}   onClick={handleFireClick}>
              <p className="fire ">FIREE</p>
            </div>

          

          </div> 

          <div className={`w-[50%] object-contain h-auto   fireImg absolute ${isActive ? 'active' : ''}`}>
        
          <dotlottie-player
              src="https://lottie.host/5791ad74-94c8-44a4-a34b-825a91aca4e7/NlbSebNiWu.json"
              background="transparent"
              speed="1"
              className={`w-[100%] relative `}
              loop
              autoplay
            ></dotlottie-player>

           </div>

        
        </div>

        {/* links */}
        <div className="w-full xl:w-[80%] h-auto flex_center relative">
          {/* <!-- border --> */}
          <img
            src={linkBorder}
            alt="border"
            className="w-[90%] h-auto object-contain relative"
          />

          {/* <!-- links container --> */}
          <div className="absolute w-[89%] h-[10vw] lg:h-[65%] bottom-[1vw] lg:bottom-5 flex_center px-5 gap-[5vw]">
          
           <button
              data-btn="about"
              className="chooseBtn w-[30%] lg:w-[21%] hoverbtn flex_center"
              onClick={() => handleButtonClick("about")}
            >
              <img
                src={about}
                alt=""
                className="w-[100%] h-auto object-contain"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="400"
              />
            </button>

            <button
              data-btn="intro"
              className="chooseBtn w-[30%] lg:w-[31%] hoverbtn flex_center"
              onClick={() => handleButtonClick("intro")}
            >
              <img
                src={introBtn}
                alt="introBtn"
                className="w-[100%] h-auto object-contain"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="400"
              />
            </button>

          </div>
          
        </div>

        {/* content 1*/}
        <div className="w-full h-auto flex_center mt-6 aboutContent ">
            
          {/* <!-- about content --> */}
          <div className="light_container large w-[80%] lg:w-[60%] h-auto min-h-[250px] p-2">
            <div className="inner_content_light large w-full h-full min-h-[250px]  lg:min-h-[500px]">
              <div data-content=""  className="content relative w-full h-full z-10 text-white opacity-80 py-4" >
                <h2 className="text-[5.5vw] lg:text-[3.5vw] text-center audiowide_font ">
                {activeBtn === "about" ? "ABOUT" : "INTRODUCTION"}
                </h2>

                <div className="w-full h-full px-[2vw] text-[12px] lg:text-[1.2vw] tracking-wide max-lg:mt-5 max-h-[500px] lg:max-h-[30vw] overflow-auto textAbout text-center">  
                  <p className="text_container">
                  {activeBtn === "about" ? <TypeAnimation /> : <TypeAnimationIntro />}
                  </p>
                </div>
              </div>

              <div className="light flex_center">
                <div className="light1 light_animation"></div>
                <div
                  className="light2 light_animation"
                  // style="animation-delay: -1.5s;"
                ></div>
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

        {/* content 2*/}
        {/* <div className=" w-full h-auto flex_center mt-6 hidden"> 
 
            <div  className="light_container large w-[80%] lg:w-[60%] h-auto min-h-[250px] lg:min-h-[400px] p-2" >

            <div className="inner_content_light large w-full h-full min-h-[250px]">
  
                <div className="content relative w-full h-full z-10 text-white opacity-80 py-4"   >
                  <h2  className="text-[5.5vw] lg:text-[3.5vw] text-center audiowide_font "   >
                    ABOUT
                  </h2>
  
                  <div className="w-full px-[2vw] text-[12px] lg:text-[1.2vw] tracking-wide max-lg:mt-5"  > 
                  <p className="text-center">
      BOBOTRON is the ultimate fusion of tradition and innovation—a futuristic cyborg bear that blends the timeless essence of BOBO with cutting-edge technology. He is the natural evolution of BOBO, enhanced by advanced AI and robotics, representing the pinnacle of modern design. In every sense, BOBOTRON embodies the future, far surpassing the limitations of his predecessors.

      <br/>
      <br/>

      As a highly advanced, AI-driven version of his former self, BOBOTRON’s form is endlessly adaptable. His appearance can shift and evolve, all while retaining the core principles of his original design. This allows for limitless variations, making BOBOTRON a dynamic, ever-evolving figure... one who can transform without ever losing his identity.

      <br/>
      <br/>

      What truly sets BOBOTRON apart is his immortality. His consciousness is interwoven with a vast hive mind powered by artificial intelligence, making him indestructible. No matter what happens to his physical form, he can never be erased. His essence endures, eternally preserved within the collective intelligence of the network, ensuring that BOBOTRON will live on, unbroken, forever.

      <br/>
      <br/>

      In the rare event that BOBOTRON sustains damage, his body can be seamlessly repaired or completely regenerated, thanks to advanced modular technology. Every component is designed for rapid interchangeability, allowing him to swap out damaged parts effortlessly. Alternatively, he can be rebuilt entirely from the ground up, while preserving every detail of his core identity—his memories, instincts, and essence remain fully intact.

      <br/>
      <br/>

      If needed, his entire forxm can be reconstructed in moments, ensuring he returns with all the knowledge and experience he’s gained, completely untouched by the loss. This ability to constantly evolve and upgrade makes BOBOTRON a superior, indomitable force—surpassing all previous incarnations of Bobo in strength, resilience, and intelligence. He’s not just a bear; he’s the future. 
                    </p>
                  </div>
  
                </div>
  
                <div className="light flex_center">
                  <div className="light1 light_animation"></div>
                  <div
                    className="light2 light_animation" 
                  ></div>
                </div>
  
              </div>
              
            </div>
 
          <div className="torch1 absolute left-[-13%] lg:left-[5%] w-[25%] lg:w-[15%] h-full flex_center">
            <img
              src={torch}
              alt="torch"
              className="w-full h-auto float_animation relative z-10"
              loading="lazy"
            />

            <div className="fires_container absolute left-[-30%] rotate-[-90deg]">
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

          <div className="torch2 absolute right-[-13%] lg:right-[5%] w-[25%] lg:w-[15%] h-full flex_center">
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

        </div> */}

        {/* <!-- blockchain --> */}
        <div className="w-full xl:w-[80%] h-auto flex_center relative"> 

          <a
          href="https://tronscan.org/#/token20/TLM6xuKG96ZrpecaAxKgKgo3kC3fuRRCfd" target="_blank"
          className="w-[30%] lg:w-[21%] hoverbtn flex justify-center"
        >
          <img
            src="./static/images/blockchain.png"
            alt=""
            className="w-[100%] h-auto object-contain"   data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="600"
          />
        </a>

        </div>
 

      </section>
    </>
  );
};

export default About;
