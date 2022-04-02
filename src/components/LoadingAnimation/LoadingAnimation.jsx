import { useRef, useEffect } from "react";
import "./loading-animation.scss";
import anime from 'animejs/lib/anime.es.js';

const LoadingAnimation = () => {

  const loadingCirclesContainer = useRef();
  
  useEffect(() => {
    const { current } = loadingCirclesContainer;
    const loadingCircles = Array.from(current?.children);
    
    anime({
      targets: loadingCircles,
      keyframes: [
        { translateY: -15},
        { translateY: 0},
      ],
      delay: anime.stagger(100),
      duration: 800,
      loop: true,
      easing: "easeInOutSine"
    });

  }, []);

  return (
    <div className="loading" ref={loadingCirclesContainer}>
      <div className="loading__circles" />
      <div className="loading__circles" />
      <div className="loading__circles" />
    </div>
  );
};

export default LoadingAnimation;
