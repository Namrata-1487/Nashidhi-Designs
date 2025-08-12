// components/ParallaxSection.js
import { Parallax } from 'react-parallax';
import mechImg from '../assets/mechanical.jpg';

export default function ParallaxSection() {
 return (
  <Parallax bgImage="./assets/images/drafting.png" strength={1200}>
   <div className="hero">
    <div className="overlay"></div>
    <div className="hero-inner" data-aos="fade-up">
     <h1>From <span>Sketch</span> to <span>Stunning 3D Model</span></h1>
     <p>We transform rough mechanical drawings into animated, photorealistic renders.</p>
     <a href="/portfolio" className="btn-primary-glow">View Our Work</a>
    </div>
   </div>
  </Parallax>

 );
}
