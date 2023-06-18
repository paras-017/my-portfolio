'use client'
import { useEffect } from 'react';
import canvasDots from './heroCanvas.js';
import Hero from '@/components/Hero.jsx';

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
         <Hero/>
      </div>     
    </>
  )
}
export default Home