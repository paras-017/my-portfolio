'use client'
import React, { useEffect } from 'react'
import canvasDots from './heroCanvas.js';

const Background = () => {
    if (typeof window !== "undefined") {
        window.onload = function () {
            canvasDots();
        };
    }
    
    
  return (
    <>
     <div className="hero" id="hero">
        <div className="canvas">
          <canvas className="connecting-dots"></canvas>
        </div>
        <h1>hekllo</h1>
      </div>
    </>
  )
}

export default Background