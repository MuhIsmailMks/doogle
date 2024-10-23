import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'; 

// main image
import backText from './assets/images/backText.png';
import bgGenerator from './assets/images/bgGenerator.png';
import aboutImg from './assets/images/aboutImg.png';


// button
import headBtn from './assets/images/button/headBtn.png';
import accessBtn from './assets/images/button/accessBtn.png';
import extasBtn from './assets/images/button/extasBtn.png';
import startOver from './assets/images/button/startOver.png'; 
import download from './assets/images/button/download.png'; 

// icons svg
import backArrow from './assets/icons/backArrow.svg';
import uploadIcon from './assets/icons/uploadIcon.svg';

import indexTop from './assets/icons/indexTop.svg';
import indexBottom from './assets/icons/indexBottom.svg';
import mirrorMode from './assets/icons/mirror.svg';
import deleteIcon from './assets/icons/deleteIcon.svg';
import rotateIcon from './assets/icons/rotate.svg';
import resizeIcon from './assets/icons/resize.svg';

 
// add images
// head
import head01 from './assets/images/Head/head01.png'; 
import head02 from './assets/images/Head/head02.png'; 
import head03 from './assets/images/Head/head03.png'; 
import head04 from './assets/images/Head/head04.png'; 
import head05 from './assets/images/Head/head05.png'; 
import head06 from './assets/images/Head/head06.png'; 
import head07 from './assets/images/Head/head07.png'; 
import head08 from './assets/images/Head/head08.png'; 
import head09 from './assets/images/Head/head09.png'; 
import head10 from './assets/images/Head/head10.png'; 
import head11 from './assets/images/Head/head11.png';  

// accessories
import access01 from './assets/images/Accessories/access01.png'; 
import access02 from './assets/images/Accessories/access02.png'; 
import access03 from './assets/images/Accessories/access03.png'; 
import access04 from './assets/images/Accessories/access04.png'; 
import access05 from './assets/images/Accessories/access05.png'; 
import access06 from './assets/images/Accessories/access06.png'; 
import access07 from './assets/images/Accessories/access07.png'; 
import access08 from './assets/images/Accessories/access08.png'; 
import access09 from './assets/images/Accessories/access09.png'; 
import access10 from './assets/images/Accessories/access10.png'; 
import access11 from './assets/images/Accessories/access11.png';  
import access12 from './assets/images/Accessories/access12.png';  
import access13 from './assets/images/Accessories/access13.png';  
import access14 from './assets/images/Accessories/access14.png';  
import access15 from './assets/images/Accessories/access15.png';  
import access16 from './assets/images/Accessories/access16.png';  

// accessories
import extra01 from './assets/images/Extras/extra01.png'; 
import extra02 from './assets/images/Extras/extra02.png'; 
import extra03 from './assets/images/Extras/extra03.png'; 
import extra04 from './assets/images/Extras/extra04.png'; 
import extra05 from './assets/images/Extras/extra05.png'; 
import extra06 from './assets/images/Extras/extra06.png'; 
import extra07 from './assets/images/Extras/extra07.png'; 
import extra08 from './assets/images/Extras/extra08.png'; 
import extra09 from './assets/images/Extras/extra09.png'; 
import extra10 from './assets/images/Extras/extra10.png'; 
import extra11 from './assets/images/Extras/extra11.png'; 
import extra12 from './assets/images/Extras/extra12.png'; 
import extra13 from './assets/images/Extras/extra13.png'; 
import extra14 from './assets/images/Extras/extra14.png'; 
import extra15 from './assets/images/Extras/extra15.png';  
import extra16 from './assets/images/Extras/extra16.png';  

import './imageMaker.css' 
import html2canvas from 'html2canvas';
 
 
 
const BobotronGenerator = () => {
    // add image from input 
    const [imageUrl, setImageUrl] = useState(null);
    
    const handleImageChange = (event) => {
    const file = event.target.files[0];
        if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImageUrl(imageUrl);  
        }
    };
 
    const [activeButton, setActiveButton] = useState("head");  
    const [activeContent, setActiveContent] = useState("head");  
 
    const handleButtonClick = (btnData) => {
      setActiveButton(btnData); 
      setActiveContent(btnData); 
    };

    // canvas container
    const canvasContainerRef = useRef(null); 
    const downloadButtonRef = useRef(null);  
    const [elements, setElements] = useState([]);

    useEffect(() => {

      function makeDraggable(draggableOverlay) {
        let offsetX = 0, offsetY = 0, isDragging = false, isRotating = false, isResizing = false;
        let initialRotation = 0, centerX, centerY, initialWidth, initialHeight, initialMouseX, initialMouseY;
      
        let lastRotation = 0;
     
        
    // draggable function
    draggableOverlay.addEventListener('mousedown', (e) => {
      if (isRotating || isResizing) return; 
      
      isDragging = true;
      
      const rect = draggableOverlay.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
  
      draggableOverlay.style.cursor = 'grabbing';
  
      document.addEventListener('mousemove', onDrag);
      document.addEventListener('mouseup', stopDrag);
    });
  
    // Support for touch devices
    draggableOverlay.addEventListener('touchstart', (e) => {
      if (isRotating || isResizing) return;
  
      isDragging = true;
      document.body.classList.add('active')
  
      const rect = draggableOverlay.getBoundingClientRect();
      offsetX = e.touches[0].clientX - rect.left;
      offsetY = e.touches[0].clientY - rect.top;
  
      draggableOverlay.style.cursor = 'grabbing';
  
      document.addEventListener('touchmove', onDragTouch);
      document.addEventListener('touchend', stopDragTouch);
    });
  
    const onDrag = (e) => {
      if (!isDragging || isRotating || isResizing) return;
  
      // Dapatkan referensi container dari canvasContainerRef
      const container = canvasContainerRef.current;
      
      if (container) {
        const containerRect = container.getBoundingClientRect();
        let newLeft = e.clientX - containerRect.left - offsetX;
        let newTop = e.clientY - containerRect.top - offsetY;
  
        draggableOverlay.style.left = `${newLeft}px`;
        draggableOverlay.style.top = `${newTop}px`;
      }
    };
  
    const onDragTouch = (e) => {
      if (!isDragging || isRotating || isResizing) return;
  
      // Dapatkan referensi container dari canvasContainerRef
      const container = canvasContainerRef.current;
  
      if (container) {
        const containerRect = container.getBoundingClientRect();
        let newLeft = e.touches[0].clientX - containerRect.left - offsetX;
        let newTop = e.touches[0].clientY - containerRect.top - offsetY;
  
        draggableOverlay.style.left = `${newLeft}px`;
        draggableOverlay.style.top = `${newTop}px`;
      }
    };
  
    const stopDrag = () => {
      isDragging = false;
      draggableOverlay.style.cursor = 'grab';
      document.removeEventListener('mousemove', onDrag);
      document.removeEventListener('mouseup', stopDrag);
    };
  
    const stopDragTouch = () => {
      isDragging = false;
      draggableOverlay.style.cursor = 'grab';
      document.body.classList.remove('active')
      document.removeEventListener('touchmove', onDragTouch);
      document.removeEventListener('touchend', stopDragTouch);
    };    
      
      
    // rotate function
    const rotateHandle = draggableOverlay.querySelector('.rotate');
      
    // For desktop
     rotateHandle.addEventListener('mousedown', (e) => {
          e.preventDefault();
          isRotating = true;
        
          const rect = draggableOverlay.getBoundingClientRect();
          
          centerX = rect.left + rect.width / 2;
          centerY = rect.top + rect.height / 2;
        
          const currentTransform = window.getComputedStyle(draggableOverlay).transform;
        
          // Check for valid transform matrix
          if (currentTransform !== 'none') {
            const matrix = currentTransform.match(/matrix\((.+)\)/);
            if (matrix) {
              const values = matrix[1].split(', ');
              initialRotation = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
            }
          } else {
            initialRotation = 0;
          }
        
          document.addEventListener('mousemove', onRotate);
          document.addEventListener('mouseup', stopRotate);
        });
        
        // For touch devices
        rotateHandle.addEventListener('touchstart', (e) => {
          e.preventDefault();
          isRotating = true;
        
          const rect = draggableOverlay.getBoundingClientRect();
          
          centerX = rect.left + rect.width / 2;
          centerY = rect.top + rect.height / 2;
        
          const currentTransform = window.getComputedStyle(draggableOverlay).transform;
        
          if (currentTransform !== 'none') {
            const matrix = currentTransform.match(/matrix\((.+)\)/);
            if (matrix) {
              const values = matrix[1].split(', ');
              initialRotation = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
            }
          } else {
            initialRotation = 0;
          }
        
          document.addEventListener('touchmove', onRotateTouch);
          document.addEventListener('touchend', stopRotateTouch);
          
        });
        
        function onRotate(e) {
          if (!isRotating) return;
        
          const currentMouseX = e.clientX;
          const currentMouseY = e.clientY;
        
          const angle = Math.atan2(currentMouseY - centerY, currentMouseX - centerX) * (180 / Math.PI);
          draggableOverlay.style.transform = `rotate(${angle - initialRotation}deg)`;
        }
        
        function onRotateTouch(e) {
          if (!isRotating) return;
        
          const currentMouseX = e.touches[0].clientX;
          const currentMouseY = e.touches[0].clientY;
        
          const angle = Math.atan2(currentMouseY - centerY, currentMouseX - centerX) * (180 / Math.PI);
          draggableOverlay.style.transform = `rotate(${angle - initialRotation}deg)`;
        }
        
        function stopRotate() {
          isRotating = false;
          document.removeEventListener('mousemove', onRotate);
          document.removeEventListener('mouseup', stopRotate);
        }
        
        function stopRotateTouch() {
          isRotating = false;
          document.removeEventListener('touchmove', onRotateTouch);
          document.removeEventListener('touchend', stopRotateTouch);
        }
        
      
      
      // resize function
      const resizeHandle = draggableOverlay.querySelector('.resize');
      resizeHandle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isResizing = true;
      
        initialWidth = draggableOverlay.offsetWidth;
        initialHeight = draggableOverlay.offsetHeight;
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;
       
      
        document.addEventListener('mousemove', onResize);
        document.addEventListener('mouseup', stopResize);
      });
      
      // Support for touch devices
      resizeHandle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isResizing = true;
      
        initialWidth = draggableOverlay.offsetWidth;
        initialHeight = draggableOverlay.offsetHeight;
        initialMouseX = e.touches[0].clientX;
        initialMouseY = e.touches[0].clientY;
       
      
        document.addEventListener('touchmove', onResizeTouch);
        document.addEventListener('touchend', stopResizeTouch);
      });
      
      function onResize(e) {
        if (!isResizing) return;
      
        const dx = e.clientX - initialMouseX;
        const dy = e.clientY - initialMouseY;
      
        let newWidth = initialWidth + dx;
        let newHeight = initialHeight + dy;
      
        let newSize = Math.max(newWidth, newHeight);
      
        if (newSize > 50) {
          draggableOverlay.style.width = `${newSize}px`;
          draggableOverlay.style.height = `${newSize}px`;
        }
      }
      
      function onResizeTouch(e) {
        if (!isResizing) return;
      
        const dx = e.touches[0].clientX - initialMouseX;
        const dy = e.touches[0].clientY - initialMouseY;
      
        let newWidth = initialWidth + dx;
        let newHeight = initialHeight + dy;
      
        let newSize = Math.max(newWidth, newHeight);
      
        if (newSize > 50) {
          draggableOverlay.style.width = `${newSize}px`;
          draggableOverlay.style.height = `${newSize}px`;
        }
      }
      
      function stopResize() {
        isResizing = false;
         
      
        document.removeEventListener('mousemove', onResize);
        document.removeEventListener('mouseup', stopResize);
      }
      
      function stopResizeTouch() {
        isResizing = false;
       
      
        document.removeEventListener('touchmove', onResizeTouch);
        document.removeEventListener('touchend', stopResizeTouch);
      }
      
      
      
          
        // mirror mode (horizontal)
        const mirrorMode = draggableOverlay.querySelector('.mirrorMode');
        let isMirroredX = false;
      
        // mirror mode (vertical)
        const mirrorTopMode = draggableOverlay.querySelector('.mirrorTopMode');
        let isMirroredY = false;
      
        mirrorMode.addEventListener('click', () => {
          isMirroredX = !isMirroredX;
          updateTransform(); 
        });
      
        mirrorTopMode.addEventListener('click', () => {
          isMirroredY = !isMirroredY;
          updateTransform();  
        });
      
        // Fungsi untuk mengupdate transformasi gambar
        function updateTransform() {
          const mainImg = draggableOverlay.querySelector('.main_image');
          const scaleX = isMirroredX ? -1 : 1; 
          const scaleY = isMirroredY ? -1 : 1; 
       
          mainImg.style.transform = `scale(${scaleX}, ${scaleY})`;
        }
      
      
      
      
        // Event listener untuk menurunkan z-index
        const indexBottom = draggableOverlay.querySelector('.indexBottom');
        indexBottom.addEventListener('click', () => {
          let currentZIndex = parseInt(window.getComputedStyle(draggableOverlay).zIndex);
          
          // Cek apakah z-index lebih besar dari 1, jika iya kurangi, jika tidak tetap 1
          if (currentZIndex > 1) {
              draggableOverlay.style.zIndex = currentZIndex - 1;
          }
        });
      
        // Event listener untuk menaikkan z-index
        const indexTop = draggableOverlay.querySelector('.indexTop');
        indexTop.addEventListener('click', () => {
          let currentZIndex = parseInt(window.getComputedStyle(draggableOverlay).zIndex);
          
          // Cek apakah z-index lebih besar dari 1, jika iya kurangi, jika tidak tetap 1
          if (currentZIndex > 1) {
              draggableOverlay.style.zIndex = currentZIndex + 1;
          }
        });
      
        // delete function
        const deleteBtn = draggableOverlay.querySelector('.deleteBtn'); 
        
        const handleDelete = () => {
          // Hapus elemen dari state
          const dataImage = draggableOverlay.getAttribute('data-image');
          setElements((prevElements) => prevElements.filter((el) => el.id !== dataImage));
  
          // Hapus elemen dari DOM
          if (draggableOverlay && draggableOverlay.parentNode) {
            draggableOverlay.remove();
          } else {
            console.log("Element not found in DOM");
          }
  
          // Cek jika masih ada elemen lain
          const remainingElements = document.querySelectorAll(`#canvasContainer [data-image="${dataImage}"]`);
          if (remainingElements.length === 0) {
            const addImageElement = document.querySelector(`.addImage[data-image="${dataImage}"]`);
            if (addImageElement) {
              addImageElement.classList.remove('active');
            }
          }
          
        };
  
        if (deleteBtn) {
          deleteBtn.addEventListener('click', handleDelete);
        }
  
        // Cleanup
        return () => {
          if (deleteBtn) {
            deleteBtn.removeEventListener('click', handleDelete);
          }
        };
  
      }; // end make draggable

       // Buat draggable untuk setiap elemen
      elements.forEach((element) => {
        const newElement = document.getElementById(`draggableOverlay-${element.id}`);
        if (newElement) {
          makeDraggable(newElement);
        }
      });

    }, [elements])

    // addImage function
    useEffect(() => {
      const addImageElements = document.querySelectorAll('.addImage');
  
      const handleClick = (event) => {
        event.currentTarget.classList.add('active');
        const dataImage = event.currentTarget.getAttribute('data-image');
        const dataClass = event.currentTarget.getAttribute('data-class');
        const clickedImg = event.currentTarget.querySelector('img');
        const imgSrc = clickedImg ? clickedImg.src : '';
  
        // Generate posisi acak
        if (canvasContainerRef.current) {
          const containerWidth = canvasContainerRef.current.offsetWidth * 0.7; // 70% dari lebar container
          const containerHeight = canvasContainerRef.current.offsetHeight * 0.7; // 70% dari tinggi container
          const randomX = Math.floor(Math.random() * (containerWidth));
          const randomY = Math.floor(Math.random() * (containerHeight));
  
          // Tambahkan elemen baru ke dalam state
          setElements((prevElements) => [
            ...prevElements,
            {
              id: Date.now(),
              dataImage,
              dataClass,
              imgSrc,
              position: { x: randomX, y: randomY },
            },
          ]);
        }
      };
  
      // Tambahkan event listener click ke setiap elemen dengan class 'addImage'
      addImageElements.forEach((element) => {
        element.addEventListener('click', handleClick);
      });
  
      // Cleanup: Hapus event listener ketika komponen di-unmount
      return () => {
        addImageElements.forEach((element) => {
          element.removeEventListener('click', handleClick);
        });
      };
    }, []);
     
    // restart button
    const handleRestart = () => { 
        const elements = document.querySelectorAll('.draggableOverlay');
        elements.forEach((element) => element.remove());
      
      const addImageElements = document.querySelectorAll('.addImage');
      
      addImageElements.forEach((element) => {
        element.classList.remove('active');
      });
    };

    // downlaod
    const handleDownload = () => {
      const canvasContainer = canvasContainerRef.current;
      const draggableOverlays = canvasContainer.querySelectorAll('.draggableOverlay');
      const settingImages = canvasContainer.querySelectorAll('.settingImage');
      const oldBorders = [];
      const oldDisplays = [];
  
      // Simpan border dan display lama setiap elemen draggableOverlay
      draggableOverlays.forEach((draggableOverlay, index) => {
        oldBorders[index] = draggableOverlay.style.border;
        oldDisplays[index] = settingImages[index].style.display;
  
        // Hilangkan border sebelum mengambil screenshot
        draggableOverlay.style.border = 'none';
        settingImages[index].style.display = 'none';
      });
  
      // Gunakan html2canvas untuk screenshot
      html2canvas(canvasContainer).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'container.png';
        link.href = canvas.toDataURL();
        link.click();
  
        // Kembalikan border dan display seperti semula
        draggableOverlays.forEach((draggableOverlay, index) => {
          draggableOverlay.style.border = oldBorders[index];
          settingImages[index].style.display = oldDisplays[index];
        });
      });
    };
    
    
  return (
    <div >  
      
      {/* back button */}
      <div className="relative px-[3vw] py-6 max-w-[2000px] mx-auto">
        <Link to="/" className="relative flex items-center gap-4 backBtn pl-[10vw] max-w-[200px] lg:pl-[3vw] "> 
        <img src={backArrow} alt="" className="w-[30px] h-auto object-contain backArrow absolute left-0 duration-200"/>
        <img src={backText} alt="" className="h-[50px] w-auto object-contain border-[#be000d] border-[3px] rounded-2xl relative py-4 px-6"/>
        </Link>
      </div>

      {/* <!-- meme generator --> */}
      <section  className="flex min-[1200px]:flex flex-col items-center max-w-[100%] relative py-[10vw]"  >
    
        {/* <!-- input image --> */}
        <div id="uploadImageContainer"
          className="w-[95%] max-w-[1500px] flex h-[550px] uploadImageContainer cursor-pointer relative justify-center items-center rounded-[20px]">

          <input
            type="file"
            id="imageInput"
            accept="image/*"
            className="w-full h-full cursor-pointer absolute z-10 opacity-0"
            onChange={handleImageChange}
          />

          <div
            className="absolute top-[5%] flex flex-col items-center z-[5] text-white text-center px-5"
          >
            <img
              src={uploadIcon}
              alt="upload"
              className="w-[50px] h-auto object-contain"
            />
            <p className="text-[1.5em]">Drag & drop an image here,</p>
            <p className="text-[1.5em]">or click to select one</p>
            <p className="text-[.95em] lowercase">
              (Only *.jpeg and *.png images will be accepted)
            </p>
          </div>

          <img
            src={bgGenerator}
            alt=""
            className="bottom-0 w-[80%] h-auto object-contain absolute z-0"
          />
        </div>

        <div id="memeMakerContainer"
          className="memeMakerContainer w-[95%] min-[1400px]:w-[85vw] max-w-[1500px] max-[3000px]:min-h-[40vw] min-[3000px]:min-h-[1200px]">

          {/* <!-- canvas --> */}
          <div id="canvasContainer" ref={canvasContainerRef} className="w-full lg:w-[70%] min-h-full h-auto z-10 relative flex justify-center items-center bg-[#000919]">
        
            <div
              id="imageContainer"
              className="imageContainer relative h-auto max-h-[90%] overflow-hidden w-full"
            >
              <img
                id="previewImage"
                src={imageUrl || ""}
                alt=""
                className="w-full h-auto object-contain select-none"
              />
            </div>

            {elements.map((element, index) => (
              <div
                key={element.id}
                id={`draggableOverlay-${element.id}`} // Assign unique ID
                className={`draggableOverlay ${element.dataClass}`}
                data-image={element.dataImage}
                style={{
                  position: 'absolute',
                  left: `${element.position.x}px`,
                  top: `${element.position.y}px`,
                }}
              >

              <img src={element.imgSrc} alt="" className={`main_image ${element.dataClass}`} />
              <div className="settingImage absolute w-full h-full left-0 top-0">
                {/* Left section */}
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
                {/* Right section */}
                <div className="right-[0%] absolute h-full w-[25%]">
                  <div className="rotate rotateResizeElement rounded-lg  top-0">
                    <img src={rotateIcon} alt="" className="w-[70%] h-auto object-contain" />
                  </div>
                  <div className="resize rotateResizeElement rounded-lg  bottom-0">
                    <img src={resizeIcon} alt="" className="w-[70%] h-auto object-contain mirror_image" />
                  </div>
                </div>
              </div>
            </div>
          ))}
 
          </div>

          {/* <!-- buttons settings --> */}
          <div className="settingContainer">
            <div className="settingContainerRow relative flex flex-col items-center gap-4 lg:gap-10 px-3 w-full"  >
       
              <div
                className="choiseBtnContainer w-full flex justify-between rounded-full h-[40px]"
              >
                <button data-btn="head" className={activeButton === "head" ? "active" : ""}  onClick={() => handleButtonClick("head")}>
                  <img
                    src={headBtn}
                    alt=""
                    className="h-[36%] w-auto object-contain"
                  />
                </button>

                <button data-btn="accessories" 
          className={activeButton === "accessories" ? "active" : ""}
          onClick={() => handleButtonClick("accessories")}>
                  <img
                    src={accessBtn}
                    alt=""
                    className="h-[30%] w-auto object-contain"
                  />
                </button>

                <button data-btn="extras" 
          className={activeButton === "extras" ? "active" : ""}
          onClick={() => handleButtonClick("extras")}>
                  <img
                    src={extasBtn}
                    alt=""
                    className="h-[36%] w-auto object-contain"
                  />
                </button>

              </div>

              {/* <!-- choise meme --> */}
              {/* <!-- head --> */}
              <div id="head" className={`choiseMemes  w-full h-auto  ${activeContent === "head" ? "active" : ""}`}>

                <div className="choiseMemeContainer">

                  <div
                    data-image="head01"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={head01} alt="" />
                  </div>

                  <div
                    data-image="head02"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={head02} alt="" />
                  </div>

                  <div
                    data-image="head03"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={head03} alt="" />
                  </div>

                  <div
                    data-image="head04"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={head04} alt="" />
                  </div>

                  <div
                    data-image="head05"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={head05} alt="" />
                  </div>

                  <div
                    data-image="head06"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={head06} alt="" />
                  </div>

                  <div
                    data-image="head07"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={head07} alt="" />
                  </div>

                  <div
                    data-image="head08"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={head08} alt="" />
                  </div>

                  <div
                    data-image="head09"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={head09} alt="" />
                  </div>

                  <div
                    data-image="head10"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={head10} alt="" />
                  </div>

                  <div
                    data-image="head11"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={head11} alt="" />
                  </div>
                </div>
              </div>

              {/* <!-- accessories --> */}
              <div id="accessories" className={`choiseMemes w-full h-auto  ${activeContent === "accessories" ? "active" : ""}`}>
                <div className="choiseMemeContainer">
                  <div
                    data-image="access1"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access01} alt="" />
                  </div>

                  <div
                    data-image="access2"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access02} alt="" />
                  </div>

                  <div
                    data-image="access3"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access03} alt="" />
                  </div>

                  <div
                    data-image="access4"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access04} alt="" />
                  </div>

                  <div
                    data-image="access5"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access05} alt="" />
                  </div>

                  <div
                    data-image="access6"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access06} alt="" />
                  </div>

                  <div
                    data-image="access7"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access07} alt="" />
                  </div>

                  <div
                    data-image="access8"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access08} alt="" />
                  </div>

                  <div
                    data-image="access9"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access09} alt="" />
                  </div>

                  <div
                    data-image="access10"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access10} alt="" />
                  </div>

                  <div
                    data-image="access11"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access11} alt="" />
                  </div>

                  <div
                    data-image="access12"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access12} alt="" />
                  </div>

                  <div
                    data-image="access13"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access13} alt="" />
                  </div>

                  <div
                    data-image="access14"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access14} alt="" />
                  </div>

                  <div
                    data-image="access15"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access15} alt="" />
                  </div>

                  <div
                    data-image="access16"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={access16} alt="" />
                  </div>
                </div>
              </div>

              {/* <!-- extras --> */}
              <div id="extras" className={`choiseMemes w-full h-auto ${activeContent === "extras" ? "active" : ""}`}>
             
              <div className="choiseMemeContainer">

                  <div
                    data-image="extra01"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra01} alt="" />
                  </div>

                  <div
                    data-image="extra02"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={extra02} alt="" />
                  </div>

                  <div
                    data-image="extra03"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra03} alt="" />
                  </div>

                  <div
                    data-image="extra04"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra04} alt="" />
                  </div>

                  <div
                    data-image="extra05"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra05} alt="" />
                  </div>

                  <div
                    data-image="extra06"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra06} alt="" />
                  </div>

                  <div
                    data-image="extra07"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={extra07} alt="" />
                  </div>

                  <div
                    data-image="extra08"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra08} alt="" />
                  </div>

                  <div
                    data-image="extra09"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra09} alt="" />
                  </div>

                  <div
                    data-image="extra10"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra10} alt="" />
                  </div>

                  <div
                    data-image="extra11"
                    className="relative cursor-pointer addImage"
                    data-class="v1"
                  >
                    <img src={extra11} alt="" />
                  </div>

                  <div
                    data-image="extra12"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra12} alt="" />
                  </div>

                  <div
                    data-image="extra13"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra13} alt="" />
                  </div>

                  <div
                    data-image="extra14"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra14} alt="" />
                  </div>

                  <div
                    data-image="extra15"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra15} alt="" />
                  </div>

                  <div
                    data-image="extra16"
                    className="relative cursor-pointer addImage"
                    data-class="v2"
                  >
                    <img src={extra16} alt="" />
                  </div>
                </div>
              </div>  

              {/* <!-- start and download --> */}
              <div
                className="btnChoise w-full flex justify-center items-center gap-4"
              >
                <button id="restartButton" className="" onClick={handleRestart}>
                  <img
                    src={startOver}
                    alt=""
                    className="w-[50%] h-auto object-contain"
                  />
                </button>

                <button id="downloadBtn" ref={downloadButtonRef} onClick={handleDownload}>
                  <img
                    src={download}
                    alt=""
                    className="w-[80%] h-auto object-contain"
                  />
                </button>

              </div>
            </div>
          </div>

        </div>

      </section>
      
    </div>
  )
}

export default BobotronGenerator
