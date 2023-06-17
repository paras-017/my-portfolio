'use client'
import { useEffect } from 'react';
import canvasDots from './heroCanvas.js';

const Home = ()=> {
  
  window.onload = function () {
    canvasDots();
  };
  
  return (
    <>
     <div className="hero" id="hero">
        <div className="canvas">
          <canvas className="connecting-dots"></canvas>
        </div>
        {/* hero */}
        <div className="heading">
        <div className="heading__line-1">Hello, I'm <span>Ben</span>.</div>
        <div className="heading__line-2">I'm a full stack web developer.</div>
        <a href="#about" className="heading__link">
          <div className="heading-cta">
            View my work
          </div>
        </a>
      </div>
      </div>     
    </>
  )
}
export default Home