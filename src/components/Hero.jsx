import React from 'react'

import heroImg from '../assets/images/hero_img.png';
import heroImgCenter from '../assets/images/heroImgCenter.png';
import chart from '../assets/images/chart.png';
import buy from '../assets/images/buy.png';

const Hero = () => {
  return (
    <div>
       {/* <!-- hero --> */}
       <section className="flex_center px-3 md:px-6 ">
       
       <div className="content_container border_hero rounded-xl w-full h-auto relative flex_center"
       >

         <div
           className="inner-bg relative border_hero rounded-2xl w-[98%] xl:w-[65%] h-auto flex_center"
         >
           <img src={heroImg} alt={heroImg} />
         </div>

         <div   className="inner-content absolute w-[98%] xl:w-[65%] h-full flex_center max-w-[3000px]"
         >
           {/* <!-- image center --> */}
           <div className="w-[84%] h-auto left-[3%] absolute z-0">
             <img
               src={heroImgCenter}
               alt="bobotron"
               className="w-full h-auto relative float_animation" style={{ animationDelay:'-15s' }}          />
           </div>

           {/* <!-- left img --> */}
           <a href="
           https://dexscreener.com/tron/TLM6xuKG96ZrpecaAxKgKgo3kC3fuRRCfd" target="_blank" className="w-[20%] h-auto left-[3%] absolute z-10 hero_link_animation">
             <div className="">
               <img
                 src={chart}
                 alt="chart bobotron"
                 className="w-full h-auto relative"
               />
             </div>
           </a>

           {/* <!-- right img --> */}
           <div className="w-[40%] h-auto right-[0%] bottom-[20%] absolute z-10 hero_link_animation" style={{ animationDelay: '-1s' }}>
             <a target="_blank" href="https://sun.io/#/sun_swap/v2?t0=T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb&t1=TLM6xuKG96ZrpecaAxKgKgo3kC3fuRRCfd&type=swap" className="">
               <img
                 src={buy}
                 alt="buy bobotron"
                 className="w-full h-auto relative"
               /> 
             </a>
           </div>
         </div>

       </div>

     </section>
    </div>
  )
}

export default Hero
