import React from "react";

import footer_border from "../assets/images/footer_border.png";
import heroImgCenter from "../assets/images/heroImgCenter.png";
import tron from "../assets/images/tron.png";

  
import twitter from '../assets/icons/Twitter.svg';
import Telegram from '../assets/icons/Telegram.svg';

const Footer = () => {
  return (
    <>
      <footer className="relative w-full h-[90vw] lg:h-[45vw] min-h-[200px]">
        <div className="w-full h-auto px-[5vw] flex_center">
          <div
            className="w-[90%] lg:w-[50%] relative flex flex-col items-center gap-4 lg:gap-[1.5vw]"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <h2 className="primaryClr_text leading-[1] audiowide_font uppercase text-[10vw] lg:text-[5vw]">
              BoBo Tron
            </h2>
            <p className="text-white text-center tracking-[.2vw] text-[.65em] lg:text-[1.1vw]">
              Just as BOBOTRON’s hive mind continually evolves and strengthens,
              BOBO connects you with a collective of forward-thinkers and
              dreamers.
            </p>

            <div className="social flex_center gap-5 w-auto">
              <a
                href="https://tron.network/"
                target="_blank"
                className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn"
              >
                <img
                  src={tron}
                  alt="tron"
                  className="w-[20px] md:w-[3vw] max-w-[100px]"
                />

                <span className="deconNav"></span>
              </a>

              <a
                href="https://x.com/BOBOTRONclub"
                target="_blank"
                className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn"
              >
                <img
                  src={twitter}
                  alt="twitter"
                  className="w-[20px] md:w-[3vw] max-w-[100px]"
                />

                <span className="deconNav"></span>
              </a>

              <a
                href="https://t.me//BOBOTRONclub"
                target="_blank"
                className="relative socialMedia p-3 pt-4 rounded-sm border-[2px] lg:border-[4px] borderClr hoverbtn"
              >
                <img
                  src={Telegram}
                  alt="Telegram"
                  className="w-[20px] md:w-[3vw] max-w-[100px]"
                />
                <span className="deconNav"></span>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- bobotron image --> */}
        <div className="w-[50%] lg:w-[30%] h-auto left-[0%] z-10 absolute walk_animation bottom-0">
          <div className="w-full plane_animation">
            <div className="w-full">
              <img
                src={heroImgCenter}
                alt="bobotron"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* <!-- border img --> */}
        <div className="absolute left-0 bottom-0 h-auto w-full">
          <img
            src={footer_border}
            alt="footer"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
