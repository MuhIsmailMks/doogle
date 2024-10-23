import React, { useRef, useState } from 'react';

function DraggableOverlay() { 
  const [isDragging, setIsDragging] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [initialRotation, setInitialRotation] = useState(0);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const [isMirroredX, setIsMirroredX] = useState(false);
  const [isMirroredY, setIsMirroredY] = useState(false);
  const [initialWidth, setInitialWidth] = useState(0);
  const [initialHeight, setInitialHeight] = useState(0);
  const [initialMouseX, setInitialMouseX] = useState(0);
  const [initialMouseY, setInitialMouseY] = useState(0);

  const handleMouseDown = (e) => {
    if (isRotating || isResizing) return;

    setIsDragging(true);
    const rect = draggableOverlayRef.current.getBoundingClientRect();
    setOffsetX(e.clientX - rect.left);
    setOffsetY(e.clientY - rect.top);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const newLeft = e.clientX - containerRect.left - offsetX;
    const newTop = e.clientY - containerRect.top - offsetY;

    draggableOverlayRef.current.style.left = `${newLeft}px`;
    draggableOverlayRef.current.style.top = `${newTop}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleRotateStart = (e) => {
    e.preventDefault();
    setIsRotating(true);

    const rect = draggableOverlayRef.current.getBoundingClientRect();
    setCenterX(rect.left + rect.width / 2);
    setCenterY(rect.top + rect.height / 2);

    const currentTransform = window.getComputedStyle(draggableOverlayRef.current).transform;
    if (currentTransform !== 'none') {
      const matrix = currentTransform.match(/matrix\((.+)\)/);
      if (matrix) {
        const values = matrix[1].split(', ');
        setInitialRotation(Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI)));
      }
    } else {
      setInitialRotation(0);
    }

    document.addEventListener('mousemove', handleRotateMove);
    document.addEventListener('mouseup', handleRotateEnd);
  };

  const handleRotateMove = (e) => {
    if (!isRotating) return;

    const currentMouseX = e.clientX;
    const currentMouseY = e.clientY;
    const angle = Math.atan2(currentMouseY - centerY, currentMouseX - centerX) * (180 / Math.PI);

    draggableOverlayRef.current.style.transform = `rotate(${angle - initialRotation}deg)`;
  };

  const handleRotateEnd = () => {
    setIsRotating(false);
    document.removeEventListener('mousemove', handleRotateMove);
    document.removeEventListener('mouseup', handleRotateEnd);
  };

  const handleResizeStart = (e) => {
    e.preventDefault();
    setIsResizing(true);

    setInitialWidth(draggableOverlayRef.current.offsetWidth);
    setInitialHeight(draggableOverlayRef.current.offsetHeight);
    setInitialMouseX(e.clientX);
    setInitialMouseY(e.clientY);

    document.addEventListener('mousemove', handleResizeMove);
    document.addEventListener('mouseup', handleResizeEnd);
  };

  const handleResizeMove = (e) => {
    if (!isResizing) return;

    const dx = e.clientX - initialMouseX;
    const dy = e.clientY - initialMouseY;

    const newWidth = initialWidth + dx;
    const newHeight = initialHeight + dy;

    const newSize = Math.max(newWidth, newHeight);

    if (newSize > 50) {
      draggableOverlayRef.current.style.width = `${newSize}px`;
      draggableOverlayRef.current.style.height = `${newSize}px`;
    }
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeEnd);
  };

  const handleMirrorX = () => {
    setIsMirroredX(!isMirroredX);
    updateTransform();
  };

  const handleMirrorY = () => {
    setIsMirroredY(!isMirroredY);
    updateTransform();
  };

  const updateTransform = () => {
    const mainImg = draggableOverlayRef.current.querySelector('.main_image');
    const scaleX = isMirroredX ? -1 : 1;
    const scaleY = isMirroredY ? -1 : 1;

    mainImg.style.transform = `scale(${scaleX}, ${scaleY})`;
  };

  return (
    <div ref={containerRef} className="container">
      <div
        ref={draggableOverlayRef}
        className="draggableOverlay"
        onMouseDown={handleMouseDown}
      >
        <div className="main_image"> {/* Image element here */} </div>
        <div className="rotate" onMouseDown={handleRotateStart}></div>
        <div className="resize" onMouseDown={handleResizeStart}></div>
        <button className="mirrorMode" onClick={handleMirrorX}>Mirror X</button>
        <button className="mirrorTopMode" onClick={handleMirrorY}>Mirror Y</button>
      </div>
    </div>
  );
}

 
function DraggableOverlay() {
    let offsetX = 0, offsetY = 0, isDragging = false, isRotating = false, isResizing = false;
    let initialRotation = 0, centerX, centerY, initialWidth, initialHeight, initialMouseX, initialMouseY;


  useEffect(() => {
    const draggableOverlay = draggableRef.current;

    // Dragging logic
    const handleMouseDown = (e) => {
      setIsDragging(true);
      const rect = draggableOverlay.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const handleMouseMove = (e) => {
        if (!isDragging) return;

        const container = draggableOverlay.parentElement;
        const containerRect = container.getBoundingClientRect();
        const newLeft = e.clientX - containerRect.left - offsetX;
        const newTop = e.clientY - containerRect.top - offsetY;

        setPosition({ left: newLeft, top: newTop });
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    // Add mouse down listener
    draggableOverlay.addEventListener('mousedown', handleMouseDown);

    // Cleanup
    return () => {
      draggableOverlay.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isDragging]);

  // Rotate logic
  const handleRotate = (e) => {
    setIsRotating(true);

    const centerX = draggableRef.current.offsetLeft + draggableRef.current.offsetWidth / 2;
    const centerY = draggableRef.current.offsetTop + draggableRef.current.offsetHeight / 2;

    const handleMouseMove = (e) => {
      if (!isRotating) return;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
      setRotation(angle);
    };

    const handleMouseUp = () => {
      setIsRotating(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Mirror logic
  const toggleMirrorX = () => {
    setIsMirroredX((prev) => !prev);
  };

  const toggleMirrorY = () => {
    setIsMirroredY((prev) => !prev);
  };

  // Resize logic
  const handleResize = (e) => {
    setIsResizing(true);
    const initialWidth = draggableRef.current.offsetWidth;
    const initialHeight = draggableRef.current.offsetHeight;
    const initialMouseX = e.clientX;
    const initialMouseY = e.clientY;

    const handleMouseMove = (e) => {
      if (!isResizing) return;

      const dx = e.clientX - initialMouseX;
      const dy = e.clientY - initialMouseY;

      const newSize = Math.max(initialWidth + dx, initialHeight + dy);

      setSize({ width: newSize, height: newSize });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={draggableRef}
      className="draggableOverlay"
      style={{
        left: position.left,
        top: position.top,
        width: size.width,
        height: size.height,
        transform: `rotate(${rotation}deg) scale(${isMirroredX ? -1 : 1}, ${isMirroredY ? -1 : 1})`,
        position: 'absolute',
        zIndex: 1,
      }}
    >
      <img src={imgSrc} alt="" className="main_image" />
      <div className="rotate" onMouseDown={handleRotate}>
        <img src={rotateIcon} alt="rotate" />
      </div>
      <div className="resize" onMouseDown={handleResize}>
        <img src={resizeIcon} alt="resize" />
      </div>
      <div className="mirrorMode" onClick={toggleMirrorX}>
        <img src={mirrorMode} alt="mirror" />
      </div>
      <div className="deleteBtn" onClick={() => draggableRef.current.remove()}>
        <img src={deleteIcon} alt="delete" />
      </div>
    </div>
  );
}
 

import { useEffect, useRef } from 'react';

const CanvasComponent = () => {
  const canvasContainerRef = useRef();

  const makeDraggable = (draggableOverlay) => {
    const draggableOverlayRef = useRef(null);
    const containerRef = useRef(null);
  
    const [isDragging, setIsDragging] = useState(false);
    const [isRotating, setIsRotating] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [initialRotation, setInitialRotation] = useState(0);
    const [centerX, setCenterX] = useState(0);
    const [centerY, setCenterY] = useState(0);
    const [isMirroredX, setIsMirroredX] = useState(false);
    const [isMirroredY, setIsMirroredY] = useState(false);
    const [initialWidth, setInitialWidth] = useState(0);
    const [initialHeight, setInitialHeight] = useState(0);
    const [initialMouseX, setInitialMouseX] = useState(0);
    const [initialMouseY, setInitialMouseY] = useState(0);
  
    const handleMouseDown = (e) => {
      if (isRotating || isResizing) return;
  
      setIsDragging(true);
      const rect = draggableOverlayRef.current.getBoundingClientRect();
      setOffsetX(e.clientX - rect.left);
      setOffsetY(e.clientY - rect.top);
  
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const newLeft = e.clientX - containerRect.left - offsetX;
      const newTop = e.clientY - containerRect.top - offsetY;
  
      draggableOverlayRef.current.style.left = `${newLeft}px`;
      draggableOverlayRef.current.style.top = `${newTop}px`;
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  
    const handleRotateStart = (e) => {
      e.preventDefault();
      setIsRotating(true);
  
      const rect = draggableOverlayRef.current.getBoundingClientRect();
      setCenterX(rect.left + rect.width / 2);
      setCenterY(rect.top + rect.height / 2);
  
      const currentTransform = window.getComputedStyle(draggableOverlayRef.current).transform;
      if (currentTransform !== 'none') {
        const matrix = currentTransform.match(/matrix\((.+)\)/);
        if (matrix) {
          const values = matrix[1].split(', ');
          setInitialRotation(Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI)));
        }
      } else {
        setInitialRotation(0);
      }
  
      document.addEventListener('mousemove', handleRotateMove);
      document.addEventListener('mouseup', handleRotateEnd);
    };
  
    const handleRotateMove = (e) => {
      if (!isRotating) return;
  
      const currentMouseX = e.clientX;
      const currentMouseY = e.clientY;
      const angle = Math.atan2(currentMouseY - centerY, currentMouseX - centerX) * (180 / Math.PI);
  
      draggableOverlayRef.current.style.transform = `rotate(${angle - initialRotation}deg)`;
    };
  
    const handleRotateEnd = () => {
      setIsRotating(false);
      document.removeEventListener('mousemove', handleRotateMove);
      document.removeEventListener('mouseup', handleRotateEnd);
    };
  
    const handleResizeStart = (e) => {
      e.preventDefault();
      setIsResizing(true);
  
      setInitialWidth(draggableOverlayRef.current.offsetWidth);
      setInitialHeight(draggableOverlayRef.current.offsetHeight);
      setInitialMouseX(e.clientX);
      setInitialMouseY(e.clientY);
  
      document.addEventListener('mousemove', handleResizeMove);
      document.addEventListener('mouseup', handleResizeEnd);
    };
  
    const handleResizeMove = (e) => {
      if (!isResizing) return;
  
      const dx = e.clientX - initialMouseX;
      const dy = e.clientY - initialMouseY;
  
      const newWidth = initialWidth + dx;
      const newHeight = initialHeight + dy;
  
      const newSize = Math.max(newWidth, newHeight);
  
      if (newSize > 50) {
        draggableOverlayRef.current.style.width = `${newSize}px`;
        draggableOverlayRef.current.style.height = `${newSize}px`;
      }
    };
  
    const handleResizeEnd = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeEnd);
    };
  
    const handleMirrorX = () => {
      setIsMirroredX(!isMirroredX);
      updateTransform();
    };
  
    const handleMirrorY = () => {
      setIsMirroredY(!isMirroredY);
      updateTransform();
    };
  
    const updateTransform = () => {
      const mainImg = draggableOverlayRef.current.querySelector('.main_image');
      const scaleX = isMirroredX ? -1 : 1;
      const scaleY = isMirroredY ? -1 : 1;
  
      mainImg.style.transform = `scale(${scaleX}, ${scaleY})`;

  };
 
  const addNewElement = () => {
    const newElement = document.createElement('div');
    newElement.classList.add('draggableOverlay');
    newElement.style.position = 'absolute';
    newElement.style.left = '100px'; // Set posisi awal
    newElement.style.top = '100px'; // Set posisi awal
    newElement.innerHTML = `
      <img src="http://localhost:5173/src/assets/images/newElement.png" alt="" class="main_image">
      <!-- Element innerHTML lainnya -->
    `;
    
    // Append elemen ke dalam container
    canvasContainerRef.current.appendChild(newElement);

    // Apply fungsi draggable ke elemen baru
    makeDraggable(newElement);
  };

  useEffect(() => {
    // Select all existing elements with class 'draggableOverlay' and apply the draggable function
    const allElements = canvasContainerRef.current.querySelectorAll('.draggableOverlay');
    allElements.forEach((element) => makeDraggable(element));
  }, []);
  }


  return (
    <div>
      <div id="canvasContainer" ref={canvasContainerRef} className="w-full min-h-full relative">
        {/* Existing draggable elements */}
        <div data-image="head03" className="draggableOverlay" style={{ position: 'absolute', left: '100px', top: '100px' }}>
          <img src="http://localhost:5173/src/assets/images/Head/head03.png" alt="" className="main_image" />
        </div>
        {/* More elements */}
      </div>
      <button onClick={addNewElement}>Add New Element</button>

      <div data-image="head04" class="draggableOverlay" style="position: absolute; left: 0px; top: -127px;">
        <img src="http://localhost:5173/src/assets/images/Head/head04.png" alt="" class="main_image v2"/>

           <div class="settingImage absolute w-full h-full left-0 top-0">
   
               <div class="left">
  
                  <div class="indexTop cursor-pointer w-[70%] relative">
                      <img src="/src/assets/icons/indexTop.svg" alt="" class="w-full h-auto object-contain"/>
                  </div>
  
                  <div class="indexBottom cursor-pointer w-[70%] relative">
                      <img src="/src/assets/icons/indexBottom.svg" alt="" class="w-full h-auto object-contain"/>
                  </div>
  
                  <div class="mirrorMode cursor-pointer w-[70%] relative">
                      <img src="/src/assets/icons/mirror.svg" alt="" class="w-full h-auto object-contain"/>
                  </div>
  
                  <div class="mirrorTopMode cursor-pointer w-[70%] relative">
                      <img src="/src/assets/icons/mirror.svg" alt="" class="w-full h-auto object-contain rotate-[90deg]"/>
                  </div>
  
                  <div class="deleteBtn cursor-pointer w-[70%] relative">
                      <img src="/src/assets/icons/deleteIcon.svg" alt="" class="w-full h-auto object-contain"/>
                  </div>
  
               </div>
   
               <div class="right-[0%] absolute h-full w-[25%] ">
                  
                  <div class="rotate rotateResizeElement rounded-lg  top-0">
                      <img src="/src/assets/icons/rotate.svg" alt="" class="w-[70%] h-auto object-contain"/>
                  </div>
  
                  <div class="resize rotateResizeElement rounded-lg  bottom-0">
                      <img src="/src/assets/icons/resize.svg" alt="" class="w-[70%] h-auto object-contain mirror_image"/>
                  </div>
  
               </div>
  
          </div>
    </div>

    </div>

    
  );
};

import React, { useState, useRef } from 'react';

const MyComponent = () => {
  const [elements, setElements] = useState([]);
  const canvasContainerRef = useRef(null);

  const handleAddElement = (event) => {
    const dataImage = event.currentTarget.getAttribute('data-image');
    const dataClass = event.currentTarget.getAttribute('data-class');
    const clickedImg = event.currentTarget.querySelector('img');
    const imgSrc = clickedImg ? clickedImg.src : '';

    // Random position calculation
    if (canvasContainerRef.current) {
      const containerWidth = canvasContainerRef.current.offsetWidth * 0.7;
      const containerHeight = canvasContainerRef.current.offsetHeight * 0.7;

      const randomX = Math.floor(Math.random() * (containerWidth));
      const randomY = Math.floor(Math.random() * (containerHeight));

      const newElement = {
        dataImage,
        dataClass,
        imgSrc,
        position: { x: randomX, y: randomY }
      };

      // Tambahkan elemen baru ke dalam state
      setElements((prevElements) => [...prevElements, newElement]);
    } else {
      console.log("canvasContainerRef is not available");
    }
  };

  return (
    <div>
      <button onClick={handleAddElement}>Add Element</button>

      <div ref={canvasContainerRef} className="canvas-container" style={{ position: 'relative', width: '500px', height: '500px', border: '1px solid black' }}>
        {elements.map((element, index) => (
          <NewElement
            key={index}
            dataImage={element.dataImage}
            dataClass={element.dataClass}
            imgSrc={element.imgSrc}
            indexTop="/path/to/indexTop.png" // Ganti sesuai dengan path
            indexBottom="/path/to/indexBottom.png"
            mirrorMode="/path/to/mirrorMode.png"
            deleteIcon="/path/to/deleteIcon.png"
            rotateIcon="/path/to/rotateIcon.png"
            resizeIcon="/path/to/resizeIcon.png"
            position={element.position}
          />
        ))}
      </div>
    </div>
  );
};
 



export default DraggableOverlay;
