import React from 'react'

export const NewElement = ({ dataImage, dataClass, imgSrc, indexTop, indexBottom, mirrorMode, deleteI, rotate, resize, position }) => {
    return (
      <div
        className={`draggableOverlay ${dataClass}`}
        data-image={dataImage}
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <img src={imgSrc} alt="" className="main_image" />
        <div className="settingImage absolute w-full h-full left-0 top-0">
          {/* Left */}
          <div className="left">
            <div className="indexTop cursor-pointer w-[70%] relative">
              <img src={indexTop} alt="" className="w-full h-auto object-contain" />
            </div>
  
            <div className="indexBottom cursor-pointer w-[70%] relative">
              <img src={indexBottom} alt="" className="w-full h-auto object-contain" />
            </div>
  
            <div className="mirrorMode cursor-pointer w-[70%] relative">
              <img src={mirrorMode} alt="" className="w-full h-auto object-contain" />
            </div>
  
            <div className="mirrorTopMode cursor-pointer w-[70%] relative">
              <img src={mirrorMode} alt="" className="w-full h-auto object-contain rotate-[90deg]" />
            </div>
  
            <div className="deleteBtn cursor-pointer w-[70%] relative">
              <img src={deleteIcon} alt="" className="w-full h-auto object-contain" />
            </div>
          </div>
  
          {/* Right */}
          <div className="right-[0%] absolute h-full w-[25%]">
            <div className="rotate rotateResizeElement rounded-lg top-0">
              <img src={rotateIcon} alt="" className="w-[70%] h-auto object-contain" />
            </div>
  
            <div className="resize rotateResizeElement rounded-lg bottom-0">
              <img src={resizeIcon} alt="" className="w-[70%] h-auto object-contain mirror_image" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  

const GeneratorCom = () => {
  return (
    <div>
      
    </div>
  )
}

export default GeneratorCom
