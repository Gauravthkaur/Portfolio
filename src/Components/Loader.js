import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useSpring, animated } from "@react-spring/web";
import Portfolio from "./Portfolio";

const LoadingScreen = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const progressBarRef = useRef(null);
  const counterRef = useRef(null);
  const backgroundRef = useRef(null);
  const loadingTextRef = useRef(null);

  const countAnimation = useSpring({
    number: 100,
    from: { number: 0 },
    config: {
      duration: 3000,
      easing: (t) => t * t * (3 - 2 * t),
    },
  });

  const glowAnimation = useSpring({
    from: { boxShadow: "0 0 0px rgba(255, 255, 255, 0)" },
    to: async (next) => {
      while (true) {
        await next({ boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)" });
        await next({ boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" });
      }
    },
    config: { duration: 1500 },
  });

  useEffect(() => {
    // Animate the loading text dots
    const dotsTimeline = gsap.timeline({
      repeat: -1,
    });

    dotsTimeline
      .to(".dot", {
        y: -10,
        duration: 0.5,
        opacity: 1,
        stagger: {
          each: 0.2,
          repeat: 1,
          yoyo: true,
        },
        ease: "power2.inOut",
      });

    // Main animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        if (backgroundRef.current) {
          backgroundRef.current.style.display = "none";
        }
        setLoadingComplete(true);
        dotsTimeline.kill(); // Stop the dots animation when loading completes
      },
    });

    // Enhanced progress bar animation sequence
    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 4.1,
      ease: "power2.inOut",
    })
      .to(counterRef.current, {
        scale: 1.2,
        duration: 0.3,
        ease: "back.out(1.7)",
      }, "-=0.5")
      .to([counterRef.current, loadingTextRef.current], {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.in(1.7)",
      })
      .to(progressBarRef.current, {
        rotate: 90,
        duration: 0.8,
        ease: "power3.inOut",
      })
      .to(progressBarRef.current, {
        scaleX: 40,
        scaleY: 400,
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
      })
      .to(backgroundRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      }, "-=0.6");

    return () => {
      dotsTimeline.kill(); // Cleanup
    };
  }, []);

  return (
    <>
      <div
        ref={backgroundRef}
        className="loading-screen"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          overflow: "hidden",
        }}
      >
        {/* Counter */}
        <animated.div
          ref={counterRef}
          className="text-white font-bold absolute"
          style={{
            top: "40%",
            transform: "translateY(-50%)",
            fontSize: "4rem",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
          }}
        >
          {countAnimation.number.to((val) => `${Math.floor(val)}%`)}
        </animated.div>

        {/* Loading Text */}
        <div
          ref={loadingTextRef}
          className="text-white text-xl absolute"
          style={{
            top: "55%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "2px",
            opacity: 0.8,
          }}
        >
          Loading
          <span className="dot" style={{ opacity: 0.5 }}>.</span>
          <span className="dot" style={{ opacity: 0.5 }}>.</span>
          <span className="dot" style={{ opacity: 0.5 }}>.</span>
        </div>

        {/* Progress Bar */}
        <animated.div
          ref={progressBarRef}
          className="progress-bar"
          style={{
            width: "0%",
            height: "4px",
            backgroundColor: "#fff",
            transformOrigin: "center",
            position: "absolute",
            bottom: "20%",
            borderRadius: "2px",
            ...glowAnimation,
          }}
        />
      </div>

      {/* Portfolio */}
      {loadingComplete && <Portfolio />}
    </>
  );
};

export default LoadingScreen;