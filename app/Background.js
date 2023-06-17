'use client'
import React from 'react'
import canvasDots from './heroCanvas.js';

const Background = () => {
  // if (typeof window !== "undefined") {
  // }
  window.onload = function () {
      canvasDots();
  };
    
    
  return (
    <>
     <div className="hero" id="hero">
        <div className="canvas">
          <canvas className="connecting-dots"></canvas>
        </div>
      </div>     
    </>
  )
}

export default Background