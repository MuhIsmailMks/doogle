function initRocketAnimation() { 
    gsap.killTweensOf('.rocket');

    const triggerElement = window.innerWidth < 1024 ? '.col1_start' : '.howTo'; 
    const YValueResponsive = window.innerWidth < 1024 ? '-50vw' : '-20vw';
    const startRocket = window.innerWidth < 1024 ? '10vw' : '50vw';
 
    gsap.fromTo('.rocket', 
        { y: startRocket }, 
        { y: YValueResponsive, 
          ease: "none", 
          scrollTrigger: {
            trigger: triggerElement,
            start: "50% 100%",
            end: "100% 50%",
            scrub: 5,
          }
        }
    );
}

function initBoxAnimation() {  
    gsap.killTweensOf('.box_fix');

    if (window.innerWidth > 1023) { 
        ScrollTrigger.create({
            trigger: ".box_fix",  
            pin: true,
            start: "top top",
            end: "+=700 top",
            scrub: 3,
        });
    } else { 
        gsap.fromTo('.box_fix', 
            { y: '10vw' }, 
            { y: '-100vw', 
              ease: "none", 
              scrollTrigger: {
                trigger: '.howToBuyContainer',
                start: "50% 100%",
                end: "100% 50%",
                scrub: 5,
              }
            }
        );
    }
}
 

function leftTorch1() { 
  gsap.killTweensOf('.leftTorch');
  
  const XValueResponsive = window.innerWidth < 1024 ? '1vw' : '10vw'; 

  gsap.fromTo('.leftTorch', 
      { x: '-10vw' }, 
      { x: XValueResponsive, 
        ease: "none", 
        scrollTrigger: {
          trigger: '.aboutContent',
          start: "50% 100%",
          end: "100% 50%",
          scrub: 3,
        }
      }
  );
}

function rightTorch1() { 
  gsap.killTweensOf('.rightTorch');
  
  const XValueResponsive = window.innerWidth < 1024 ? '-1vw' : '-10vw'; 

  gsap.fromTo('.rightTorch', 
      { x: '10vw' }, 
      { x: XValueResponsive, 
        ease: "none", 
        scrollTrigger: {
          trigger: '.aboutContent',
          start: "0% 100%",
          end: "100% 50%",
          scrub: 3,
        }
      }
  );
}


function leftTorch2() { 
  gsap.killTweensOf('.leftTorch2');
  
  const XValueResponsive = window.innerWidth < 1024 ? '1vw' : '10vw'; 

  gsap.fromTo('.leftTorch2', 
      { x: '-10vw' }, 
      { x: XValueResponsive, 
        ease: "none", 
        scrollTrigger: {
          trigger: '.cex_partnert',
          start: "50% 100%",
          end: "100% 50%",
          scrub: 3,
        }
      }
  );
}


function rightTorch2() { 
  gsap.killTweensOf('.rightTorch2');
  
  const XValueResponsive = window.innerWidth < 1024 ? '-1vw' : '-10vw'; 

  gsap.fromTo('.rightTorch2', 
      { x: '10vw' }, 
      { x: XValueResponsive, 
        ease: "none", 
        scrollTrigger: {
          trigger: '.cex_partnert',
          start: "0% 100%",
          end: "100% 50%",
          scrub: 3,
        }
      }
  );
}


 
// Jalankan animasi saat DOM siap
window.addEventListener('DOMContentLoaded', () => {
    initRocketAnimation(); 
    initBoxAnimation();
    leftTorch1();
    rightTorch1();
    leftTorch2();
    rightTorch2();
    

      if (window.innerWidth > 1023) { 
        gsap.fromTo('.howToImg', { scale: '0',  }, {
          scale: "1" , ease: "none", scrollTrigger: {
              trigger: '.box_fix',
              start: "0% 100%",
              end: "100% 100%", 
              scrub: 3,
          }
      });
    } 

     
      
});

// Tambahkan listener untuk resize
window.addEventListener('resize', () => { 
    initRocketAnimation(); 
    initBoxAnimation();
    ScrollTrigger.refresh();
});

const observer = new IntersectionObserver((entries, observer) => {
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        new TypeIt(".typeAnimation", { 
            strings: [`   BOBOTRON is the ultimate fusion of tradition and innovation—a futuristic cyborg bear that blends the timeless essence of BOBO with cutting-edge technology. He is the natural evolution of BOBO, enhanced by advanced AI and robotics, representing the pinnacle of modern design. In every sense, BOBOTRON embodies the future, far surpassing the limitations of his predecessors.

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

      If needed, his entire forxm can be reconstructed in moments, ensuring he returns with all the knowledge and experience he’s gained, completely untouched by the loss. This ability to constantly evolve and upgrade makes BOBOTRON a superior, indomitable force—surpassing all previous incarnations of Bobo in strength, resilience, and intelligence. He’s not just a bear; he’s the future. `
        ],
            speed: .1,
            waitUntilVisible: true,
            loop: false,
          }).go();

          
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01 }); 
  
  const typeElement = document.querySelector(".typeAnimation");
  observer.observe(typeElement);

 




  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100, // Jumlah bintang
        "density": {
          "enable": true,
          "value_area": 500 // Area kepadatan bintang
        }
      },
      "color": {
        "value": "#ffffff" // Warna bintang
      },
      "shape": {
        "type": "circle", // Bentuk bintang
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 1, // Transparansi awal bintang
        "random": true, // Bintang akan memiliki tingkat transparansi acak
        "anim": {
          "enable": true,
          "speed": 2, // Kecepatan kedip bintang
          "opacity_min": 0.3, // Opasitas minimum saat bintang berkedip
          "sync": false // Animasi kedip acak antar bintang
        }
      },
      "size": {
        "value": 2,
        "random": true // Ukuran bintang acak
      },
      "line_linked": {
        "enable": false // Matikan garis penghubung antar partikel
      },
      "move": {
        "enable": true,
        "speed": 0.2, // Kecepatan gerakan bintang
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false // Tidak ada interaksi hover
        },
        "onclick": {
          "enable": false // Tidak ada interaksi klik
        },
        "resize": true
      }
    },
    "retina_detect": true
  });
  



// comets
  const Comets = document.querySelector('.comets')

function createComet () { 
  if (Comets.children.length > 100) {
    Comets.children[0].remove()
  }
  let cometX = Math.round(Math.random() * window.innerWidth)
  let cometY = Math.round(Math.random() * window.innerHeight)
  let comet = document.createElement('div')
  comet.setAttribute('class', 'comet')
  comet.style.left = cometX+'px'
  comet.style.top  = cometY+'px'
  
  Comets.append(comet)
} 


let cometInterval;

function startCometAnimation() {
  cometInterval = setInterval(createComet, 1000);
}

function stopCometAnimation() {
  clearInterval(cometInterval);
}
 
function handleVisibilityChange() {
  if (document.visibilityState === 'visible') {
    startCometAnimation();  
  } else {
    stopCometAnimation();   
  }
}
 
document.addEventListener('visibilitychange', handleVisibilityChange);
 
startCometAnimation();
