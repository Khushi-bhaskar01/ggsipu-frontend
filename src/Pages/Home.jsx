import React, { useState, useEffect, useRef } from 'react'
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'


import './Home.css'
const Home = ({
  images = [one , two , three , four , five , six],          
  width = 700,          
  height = 380,         
  radius = 400,         
  show = 1300,          
  transition = 800
}) => {

    const n = images.length || 6;
  const degPer = 360 / n;
  const [rotation, setRotation] = useState(0); 
  const indexRef = useRef(0);
  const timerRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const cleanup = () => clearTimeout(timerRef.current);
    const step = () => {
      timerRef.current = setTimeout(() => {
        if (pausedRef.current) return; 
        indexRef.current = (indexRef.current + 1) % n;
        setRotation(-indexRef.current * degPer);
        timerRef.current = setTimeout(step, transition + show);
      }, show);
    };

    timerRef.current = setTimeout(() => {
      indexRef.current = 1 % n;
      setRotation(-indexRef.current * degPer);
      timerRef.current = setTimeout(step, transition + show);
    }, show);

    return cleanup;
  }, [n, degPer, show, transition]);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleMouseEnter = () => {
    pausedRef.current = true;
    clearTimeout(timerRef.current);
  };
  const handleMouseLeave = () => {
    if (!pausedRef.current) return;
    pausedRef.current = false;
    timerRef.current = setTimeout(() => {
      indexRef.current = (indexRef.current + 1) % n;
      setRotation(-indexRef.current * degPer);
      timerRef.current = setTimeout(function step() {
        if (pausedRef.current) return;
        indexRef.current = (indexRef.current + 1) % n;
        setRotation(-indexRef.current * degPer);
        timerRef.current = setTimeout(step, transition + show);
      }, transition + show);
    }, show);
  };
  return (
    <div>
    <div
      className="orbit-scene"
      style={{ width: `${width}px`, height: `${height}px`, perspective: "1200px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="orbit-ring"
        style={{
          transform: `rotateY(${rotation}deg) rotateX(-10deg)`,
          transition: `transform ${transition}ms cubic-bezier(.22,1,.36,1)`,
        }}
      >
        {images.map((src, i) => {
          const angle = i * degPer;
          const adjusted = (angle + rotation) % 360;
          const rad = (adjusted * Math.PI) / 180;
          const depth = Math.cos(rad); 
          const scale = 0.6 + 0.8 * ((depth + 1) / 2);
          const opacity = 0.35 + 0.65 * ((depth + 1) / 2);
          const zIndex = Math.round(1000 * ((depth + 1) / 2)); 

          const transform = `translate(-50%,-50%) rotateY(${angle}deg) translateZ(${radius}px) rotateY(${0}deg) scale(${scale})`;

          return (
            <div
              className="orbit-item"
              key={i}
              style={{
                transform,
                zIndex,
                opacity,
                transition: `transform 450ms cubic-bezier(.2,.9,.3,1), opacity 350ms`,
              }}
            >
              <img src={src} alt={`orbit-${i}`} />
            </div>
          );
        })}
      </div>
    </div>
      <section className="about-container">
      <div className="about-card">
        <h2 className="about-title">Vision</h2>
        <p className="about-text">
          To become an internationally recognized centre for education and research.
        </p>
      </div>

      <div className="about-card">
        <h2 className="about-title">Mission</h2>
        <p className="about-text">
          To provide the students with the best career prospects in the global market and 
          to equip them to become effective professionals.
        </p>
      </div>

      <div className="about-card">
        <h2 className="about-title">Background</h2>
        <p className="about-text">
          With reference to <strong>Order F.No. IPU/JR(C)/41th AC/2016/161</strong>, dated 
          <strong> 25-07-2016</strong>, the University School of Information & Technology and 
          University School of Engineering and Technology merged. The name of new school is 
          <strong> University School of Information, Communication and Technology</strong>.
        </p>
      </div>

      <div className="about-card">
        <h2 className="about-title">Thrust Areas</h2>
        <p className="about-text">
          The School was set up with an aspiration to generate manpower capable of taking on 
          challenges in the realm of Information & Communication Technology. The curriculum 
          is designed with industry inputs to meet evolving ICT demands. The School has 
          highly qualified & experienced faculty, encourages research, and aims to produce 
          individuals contributing at individual, national, and global levels.
        </p>
      </div>
    </section>
    </div>
  )
}

export default Home