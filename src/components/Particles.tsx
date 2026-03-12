import React from "react";  
import Particles from "react-particles-js";  

const ParticlesComponent = () => {  
  return (  
    <Particles  
      params={{  
        particles: {  
          number: { value: 100 },  
          size: { value: 2 },  
          size_random: { value: false },  
          shape: { type: "circle" },  
          color: { value: "#ffffff" },  
          opacity: { value: 0.5 },  
          move: {  
            speed: 0.5,  
            direction: "none",  
            random: false,  
            straight: false,  
            out_mode: "bounce",  
            bounce: false,  
            attract: {  
              enable: false,  
              rotateX: 600,  
              rotateY: 1200,  
            },  
          },  
        },  
        interactivity: {  
          events: {  
            onhover: {  
              enable: true,  
              mode: "repulse",  
            },  
            onclick: {  
              enable: true,  
              mode: "push",  
            },  
          },  
          modes: {  
            repulse: {  
              distance: 200,  
              duration: 0.4,  
            },  
          },  
        },  
        detect_retina: true,  
        responsive: [],  
      }}  
      className="absolute top-0 left-0 w-full h-full z-0"  
    />  
  );  
};  

export default ParticlesComponent;