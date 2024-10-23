import React, {useRef, useEffect}  from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


import howToTitle from "../assets/images/howToTitle.png";
import howToBuyGif from "../assets/images/howToBuy.gif";
import torch from '../assets/images/torch.png';
import decorTitle from '../assets/icons/decorTitle.svg';


const HowToBuy = () => { 
  const boxRef = useRef(null);
  const howToImgRef  = useRef(null);
  const howToBuyContainerRef = useRef(null);

  useEffect(() => {

    const initBoxAnimation = () => {
      gsap.killTweensOf(boxRef.current);
      gsap.killTweensOf(howToImgRef.current);
      
      if (window.innerWidth > 1023) { 
        ScrollTrigger.create({
          trigger: boxRef.current,   
          pin: true,
          start: "top top",
          end: "+=700 top", 
        });
 
        gsap.fromTo(howToImgRef.current, 
            { scale: '0' }, 
            { 
              scale: '1',
              ease: 'none',
              scrollTrigger: {
                trigger: boxRef.current,
                start: '0% 100%',
                end: '100% 100%',
                scrub: 3,
              }
            }
        );

      } else { 
        gsap.fromTo(boxRef.current, 
          { y: '10vw' }, 
          { 
            y: '-100vw', 
            ease: "none", 
            scrollTrigger: {
              trigger: howToBuyContainerRef.current, 
              start: "50% 100%",
              end: "100% 50%",
              scrub: 5,
            }
          }
        );
      }

    };

    initBoxAnimation();
 
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section  id="howtobuy" className=" mt-12 lg:mt-40 "  ref={howToBuyContainerRef}>
        {/* <!-- title --> */}
        <div className="w-full flex_center start_img">
          <img
            src={howToTitle}
            alt="howToTitle"
            className="w-[70%] h-auto object-contain"
          />
        </div>

        {/* <!-- content how --> */}
        <div className="w-full h-auto flex flex-col items-center justify-center lg:items-end pr-6 gap-6 mt-10 lg:mt-32 min-[1500px]:gap-[3vw]  contentContainer" >
          
          {/* <!-- image --> */}
          <div className="w-[80%] lg:w-[40%] h-[97%] relative lg:absolute z-10 left-0">
            <div
              id="lottie-container"
              ref={boxRef}
              className="w-full   flex_center relative h-[200px] box_fix max-lg:mt-[-10vw] max-lg:mb-[10vw] lg:pt-[15vw]  "
            >  

            <img src={howToBuyGif} ref={howToImgRef} alt="" className="w-[70%] h-auto object-contain"/>

            </div>
          </div>

          {/* <!-- col 1 --> */}
          <div
            className="w-full lg:w-[70%] h-auto flex justify-end items-center relative"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {/* <!-- how to content --> */}
            <div className="light_container w-[79%] lg:w-[73%] h-[180px] lg:h-[250px] min-[1500px]:h-[14vw] p-2">
              <div className="inner_content_light w-full h-full">
                <div className="content p-4 xl:p-8">
                  <div className="title_content">
                    <span>
                      <img src={decorTitle} alt="rotate" />
                    </span>
                    <h3>Connect Your Wallet</h3>
                  </div>

                  <p>
                    You’ll need a Tron wallet to interact with Sunswap. Common
                    wallets include TronLink and Trust Wallet. Click on the
                    wallet icon and follow the instructions to connect your
                    wallet to Sunswap.
                  </p>
                </div>

                <div className="light flex_center">
                  <div className="light1 light_animation"></div>
                </div>
              </div>
            </div>

            {/* <!-- image --> */}
            <div className="torch1 absolute left-[-3%] lg:left-[3%] w-[23%] h-full flex_center">
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
            className="w-full lg:w-[70%] h-auto flex justify-end items-center relative"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            {/* <!-- how to  content --> */}
            <div className="light_container w-[79%] lg:w-[73%] h-[180px] lg:h-[250px] min-[1500px]:h-[14vw] p-2">
              <div className="inner_content_light w-full h-full">
                <div className="content p-4 xl:p-8">
                  <div className="title_content">
                    <span>
                      <img src={decorTitle} alt="rotate" />
                    </span>
                    <h3>Select the BoBoTron</h3>
                  </div>

                  <p>
                    Choose the BoBoTron you want to buy. Sunswap will show a
                    list of available BoBoTron. You can either select from the
                    list or enter the BoBo tron's contract address if it’s not
                    listed.
                  </p>
                </div>

                <div className="light flex_center">
                  <div className="light1 light_animation"></div>
                </div>
              </div>
            </div>

            {/* <!-- image --> */}
            <div className="torch1 absolute left-[-3%] lg:left-[3%] w-[23%] h-full flex_center">
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
            className="w-full lg:w-[70%] h-auto flex justify-end items-center relative"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            {/* <!-- about content --> */}
            <div className="light_container w-[79%] lg:w-[73%] h-[180px] lg:h-[250px] min-[1500px]:h-[14vw] p-2">
              <div className="inner_content_light w-full h-full">
                <div className="content p-4 xl:p-8">
                  <div className="title_content">
                    <span>
                      <img src={decorTitle} alt="rotate" />
                    </span>
                    <h3>Enter Amount</h3>
                  </div>

                  <p>
                    Enter the amount of the token you want to purchase. Sunswap
                    will automatically show you the amount you’ll receive and
                    the estimated fees.
                  </p>
                </div>

                <div className="light flex_center">
                  <div className="light1 light_animation"></div>
                </div>
              </div>
            </div>

            {/* <!-- image --> */}
            <div className="torch1 absolute left-[-3%] lg:left-[3%] w-[23%] h-full flex_center">
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
            className="w-full lg:w-[70%] h-auto flex justify-end items-center relative"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            {/* <!-- about content --> */}
            <div className="light_container w-[79%] lg:w-[73%] h-[180px] lg:h-[250px] min-[1500px]:h-[14vw] p-2">
              <div className="inner_content_light w-full h-full">
                <div className="content p-4 xl:p-8">
                  <div className="title_content">
                    <span>
                      <img src={decorTitle} alt="rotate" />
                    </span>
                    <h3>Confirm and Swap</h3>
                  </div>

                  <p>
                    Review the details of your transaction. If everything looks
                    correct, click the “Swap” button. You might need to confirm
                    the transaction in your wallet.
                  </p>
                </div>

                <div className="light flex_center">
                  <div className="light1 light_animation"></div>
                </div>
              </div>
            </div>

            {/* <!-- image --> */}
            <div className="torch1 absolute left-[-3%] lg:left-[3%] w-[23%] h-full flex_center">
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
  );

};

export default HowToBuy;
