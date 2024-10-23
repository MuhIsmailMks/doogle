
import React, { useCallback, useRef, useEffect } from 'react'; 

 

export const CometAnimation = () => {
    const cometsRef = useRef(null); 
    let cometInterval;
   
    const createComet = () => {
      const cometsContainer = cometsRef.current;
      if (cometsContainer.children.length > 100) {
        cometsContainer.children[0].remove();
      }
      let cometX = Math.round(Math.random() * window.innerWidth);
      let cometY = Math.round(Math.random() * window.innerHeight);
      let comet = document.createElement('div');
      comet.setAttribute('class', 'comet');
      comet.style.left = cometX + 'px';
      comet.style.top = cometY + 'px';
  
      cometsContainer.append(comet);
    };
   
    const startCometAnimation = () => {
      cometInterval = setInterval(createComet, 1000);
    };
   
    const stopCometAnimation = () => {
      clearInterval(cometInterval);
    };
   
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startCometAnimation();
      } else {
        stopCometAnimation();
      }
    };
   
    useEffect(() => {
      startCometAnimation();
   
      document.addEventListener('visibilitychange', handleVisibilityChange);
   
      return () => {
        stopCometAnimation();
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }, []);  
  
    return (
      <div className="comect absolute left-0 top-0 sky">

        <div ref={cometsRef} className="comets"></div>
        {/* Pastikan ada styling untuk class "comet" dan "comets" */}
      </div>
    );
  };
  
export default CometAnimation;


// export default ParticleComponent;
