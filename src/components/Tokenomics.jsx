import React, {useRef, useState} from 'react'

import token_title from '../assets/images/token_title.png';
import tokenImg from '../assets/images/tokenImg.png';
import copyIcon from '../assets/icons/copyIcon.svg';

const Tokenomics = () => {
    const [copyStatus, setCopyStatus] = useState('TLM6xuKG96ZrpecaAxKgKgo3kC3fuRRCfd'); // Teks asli
  const textRef = useRef(null);

   
  const handleCopy = () => {
    const textToCopy = textRef.current.getAttribute('data-text');
     
    navigator.clipboard.writeText(textToCopy).then(() => { 
      setCopyStatus('COPIED');
       
      setTimeout(() => {
        setCopyStatus(textToCopy);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };


  return (
    <>
       <section id="tokenomics" className=" flex_center flex-col gap-20 ">
    
            {/* <!-- title --> */}
            <div className="w-full flex_center">
            <img
                src={token_title}
                alt="token"
                className="w-[70%] h-auto object-contain"
            />
            </div>

            {/* <!-- token container --> */}
            {/* <!-- image --> */}
            <div className="w-[70%] lg:w-[40%] flex_center relative">
            
            <div className="w-full relative token_img">
                <img
                src={tokenImg}
                alt=""
                className="w-full h-auto object-contain relative "
            />

                    {/* <!-- left top --> */}
                    <span className="absolute bg-[#DE6219] w-[20%] h-[7%] left-[4%] top-[12%] rotate-[45deg] rounded-xl openClose"></span>

                    {/* <!-- right top --> */}
                    <span className="absolute bg-[#DE6219] w-[20%] h-[7%] right-[8%] top-[12%] rotate-[-45deg] rounded-xl openClose"></span>
        
                    {/* <!-- left bottom --> */}
                    <span className="absolute bg-[#DE6219] w-[23%] h-[7%] left-[5%] bottom-[10%] rotate-[-45deg] rounded-xl openClose"></span>
        
                    {/* <!-- right bottom --> */}
                    <span className="absolute bg-[#DE6219] w-[21%] h-[7%] right-[5%] bottom-[12%] rotate-[45deg] rounded-xl openClose"></span>

            </div>



            </div>

            {/* <!-- token --> */}
            <div  className="token_container relative flex_between max-lg:justify-center w-full pr-6 lg:px-[7vw] flex-wrap max-lg:gap-4 gap-10"  >

            {/* <!-- left --> */}
            <div className="w-[87%] lg:w-[40%] min-[1500px]:w-[30%] h-auto relative flex_center flex-col gap-4 lg:gap-10"  >

                <div className="token_content w-full relative h-[100px] lg:h-[170px] flex_center bg-[#595F6A] rounded-xl"    data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="200" >

                <div className="copy_btn cursor-pointer z-10 relative"   onClick={handleCopy}>
                    <img src={copyIcon} alt="" className="w-[35px] xl:w-[50px] h-auto object-contain"/>
                </div>

                <p ref={textRef} className="copy-box__text glitch" data-text="TLM6xuKG96ZrpecaAxKgKgo3kC3fuRRCfd">
                {copyStatus}
                </p>

                </div>

                <div  className="token_content w-full relative h-[100px] lg:h-[170px] flex_center bg-[#595F6A] rounded-xl"    data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="400" >

                    <h2>TOTAL SUPPLY</h2>

                    <p className="glitch" data-text="10.000.000">10.000.000</p>

                </div>

            </div>

            {/* <!-- right --> */}
            <div
                className="w-[87%] lg:w-[40%] min-[1500px]:w-[30%] h-auto relative flex_center flex-col gap-4 lg:gap-10"
            >

            <div  className="token_content w-full relative h-[100px] lg:h-[170px] flex_center bg-[#595F6A] rounded-xl"    data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="200" >

                <h2>LIQUIDITY</h2>

                <p className="glitch" data-text="BURNT">BURNT</p>

            </div>
            
            <div  className="token_content w-full relative h-[100px] lg:h-[170px] flex_center bg-[#595F6A] rounded-xl"    data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="400" >

                <h2>0/0 TAXES</h2>

                {/* <!-- <p>10.000.000</p> --> */}

            </div>


            </div>
            
            </div>

            {/* <!-- groove out--> */}
            <div
            className="absolute w-[94%] h-[80%] lg:h-[73%] bottom-[0%] lg:bottom-[4.5vw]"
            >
            {/* <!-- left --> */}
            <div
                className="w-full h-[62%] min-[600px]:h-[75%] lg:h-full absolute left-0 top-0 border-white border-l-2 lg:border-l-[3px]"
            >
                {/* <!-- top --> */}
                <span
                className="bg-white left-0 top-0 absolute h-[2px] lg:h-[3px] w-[15%] xl:w-[27%] flex_center"
                >
                <div className="circle right-0"></div>
                </span>

                {/* <!-- bottom --> */}
                <span
                className="bg-white left-0 bottom-0 absolute h-[4px] w-0 lg:w-[3%] flex_center"
                >
                <div className="circle lg:right-0"></div>
                </span>
            </div>

            {/* <!-- right --> */}
            <div
                className="w-full h-[93%] lg:h-full absolute right-0 top-0 border-r-2 lg:border-r-[3px] border-white"
            >
                <span
                className="bg-white right-0 top-0 absolute h-[2px] lg:h-[3px] w-[15%] xl:w-[27%] flex_center"
                >
                <div className="circle left-0"></div>
                </span>

                <span
                className="bg-white right-0 bottom-0 absolute h-[4px] w-[5%] lg:w-[3%] flex_center"
                >
                <div className="circle left-0"></div>
                </span>
                
            </div>

            </div>

            {/* <!-- groove in--> */}
            <div
            className="absolute w-[85%] lg:w-[80%] h-[50%] sm:h-[45%] lg:h-[10%] max-sm:bottom-[10%] sm:bottom-[5%] lg:bottom-[400px]"
            >
            {/* <!-- left --> */}
            <div
                className="h-[23%] min-[500px]:h-[28%] sm:h-[20%] lg:h-full w-full absolute left-0 top-0 border-white border-l-2 lg:border-l-[3px]"
            >
                {/* <!-- top --> */}
                <span
                className="bg-white left-0 top-0 absolute h-[2px] lg:h-[3px] w-[12%] lg:w-[24%] flex_center"
                >
                <div className="circle right-0"></div>
                </span>

                {/* <!-- bottom --> */}
                <span className="bg-white left-0 bottom-0 absolute h-[4px] flex_center">
                <div className="circle"></div>
                </span>
            </div>

            {/* <!-- right --> */}
            <div
                className="h-[83%] lg:h-full w-full absolute left-0 top-0 border-white border-r-2 lg:border-r-[3px]"
            >
                <span
                className="bg-white right-0 top-0 absolute h-[2px] lg:h-[3px] w-[12%] lg:w-[24%] flex_center"
                >
                <div className="circle left-0"></div>
                </span>

                <span
                className="bg-white right-0 bottom-0 absolute h-[4px] w-[0%] flex_center"
                >
                <div className="circle"></div>
                </span>
            </div>

            </div>

     </section> 

    </>
  )
}

export default Tokenomics
