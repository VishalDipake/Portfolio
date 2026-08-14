import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Cloud, Star } from "lucide-react";

const LoadingPage = ({setIsLoading}) => {
  // First Animation
  const dFinal = [
    "M36.4225 49.6165L90.4225 49.7913",
    "M36.3934 58.6165L72.3934 58.733",
    "M45.3643 67.6458L117.364 67.8789",
    "M45.3351 76.6458L81.3351 76.7623",
    "M36.306 85.6165L99.306 85.8204",
    "M36.2769 94.6165L63.2769 94.7039",
  ];
  const dIntial = [
    "M36.4225 49.6165L36.4225 49.6165",
    "M36.3934 58.6165L36.3934 58.6165",
    "M45.3643 67.6458L45.3643 67.6458",
    "M45.3351 76.6458L45.3351 76.6458",
    "M36.306 85.6165L36.306 85.6165",
    "M36.2769 94.6165L36.2769 94.6165",
  ];
  let pathRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.25 } });

    tl.to(".loadInitial", {
      opacity: 1,
      duration: 0.2,
    });
    tl.set(".floating-element", {
      opacity: 0,
    });

    gsap.set(".laptop-anime", {
      opacity: 0,
      scale: 0.6,
    });
    tl.to(".laptop-anime", {
      opacity: 100,
      delay: 0.5,
      scale: 1.5,
      duration: 0.6,
    });

    const lines = pathRef.current.querySelectorAll(".line");
    lines.forEach((line, i) => {
      const intialD = dIntial[i];
      const finalD = dFinal[i];
      line.setAttribute("d", intialD);
      line.setAttribute("stroke", "black");
      line.setAttribute("strokeWidth", "1.35001");
      line.setAttribute("strokeLinecap", "round");
      line.setAttribute("strokeLinejoin", "round");

      tl.to(line, { attr: { d: finalD } }, i * 0.5);
    });

    tl.to(
      ".floating-element",
      {
        opacity: 1,
      },
      "-=0.2"
    );
    // Loading animation
    gsap.fromTo(
      ".dot-circle",
      { attr: { cy: 8 } },
      {
        attr: { cy: 6 },
        ease: "ease",
        repeat: -1,
        delay: 0,
        yoyo: true,
        stagger: {
          each: 0.1,
        },
      }
    );
    gsap.set(".loading-text", {
      y: 30,
      opacity: 0,
      rotate: 5,
    });
    tl.to(
      ".loading-text",
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        ease: "power2.inOut",
      },
      "-=1"
    );
    tl.addLabel("lineRun");
    tl.to(".loading-line", {
      attr: { width: 200 },
      duration: 3,
      ease: "power1.inOut",
    });

    const counterObj = { value: 0 };

    gsap.to(".percent", {
      opacity: 100,
      duration: 2,
      delay: 2.5,
    });

    tl.to(
      counterObj,
      {
        value: 100,
        duration: 3,
        ease: "power1.inOut",
        onUpdate: () => {
          setCount(Math.floor(counterObj.value));
        },
        onComplete: () => {
          gsap.to(".loadingPage", {
            ease: "ease",
          });
          tl2.play();
          setIsLoading(true)
        },
      },
      "lineRun"
    );

    // Page Fold Effect Timeline
    const tl2 = gsap.timeline({ paused: true });

    tl2
      .to(".loadingPage", {
        transformOrigin: "top center",
        rotateX: -90,
        skewX: 10,
        scaleY: 0,
        opacity: 0,
        duration: 1.2,
        ease: "power4.inOut",
        
      });
  }, []);

  return (
    <div className="loadingPage w-screen h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white [perspective:1000px]">
      
      
      
      <div className="loadInitial relative flex flex-col items-center gap-5 opacity-0">
        <div className="floating relative flex items-center justify-center">
          {/* Star */}
          <Star className="floating-element absolute scale-150 -top-8 -left-12 opacity-0" />

          {/* Cloud */}
          <Cloud className="floating-element absolute scale-150 -top-8 -right-12 opacity-0" />
          
          {/* Arrow */}
          <svg
            className="floating-element absolute -bottom-10 -left-16 scale-125 w-6 h-6 opacity-0"
            id="arrow"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#111936"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18c3-4 8-6 12-6M14 8l4 4-4 4"
            ></path>
          </svg>

          {/* Laptop SVG */}
          <svg
            width="181"
            height="181"
            ref={pathRef}
            className="laptop-anime"
            viewBox="0 0 181 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.375" clipPath="url(#clip0_5_87)">
              <g clipPath="url(#clip1_5_87)">
                <path
                  d="M26.5662 36.0844L154.366 36.4982C156.353 36.5046 157.961 38.1229 157.955 40.1098L157.716 113.91C157.709 115.897 156.091 117.505 154.104 117.498L26.3039 117.084C24.3171 117.078 22.7092 115.46 22.7156 113.473L22.9545 39.6728C22.961 37.6859 24.5793 36.078 26.5662 36.0844V36.0844"
                  stroke="black"
                  strokeWidth="1.35001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.2517 40.5932L151.652 40.9895C152.645 40.9927 153.449 41.8019 153.446 42.7953L153.224 111.195C153.221 112.189 152.412 112.993 151.419 112.99L29.0186 112.593C28.0251 112.59 27.2212 111.781 27.2244 110.787L27.4458 42.3874C27.4491 41.394 28.2582 40.59 29.2517 40.5932V40.5932"
                  stroke="black"
                  strokeWidth="2.35001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.6895 121.544L166.689 122.039L175.646 135.568L4.64575 135.015L13.6895 121.544"
                  stroke="black"
                  strokeWidth="1.35001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Dynamic path lines */}
                <path className="line line1" d="M36.4225 49.6165L36.4225 49.6165" />
                <path className="line line2" />
                <path className="line line3" />
                <path className="line line4" />
                <path className="line line5" d="M0 0 L0 0" />
                <path className="line line6" d="M0 0 L0 0" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_5_87">
                <rect
                  width="192.001"
                  height="192.001"
                  fill="white"
                  transform="translate(0.582767) scale(0.9375) rotate(0.1855)"
                />
              </clipPath>
              <clipPath id="clip1_5_87">
                <rect
                  width="192.001"
                  height="192.001"
                  fill="white"
                  transform="translate(0.582767) scale(0.9375) rotate(0.1855)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Text and Progress Indicator */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-fit h-fit overflow-hidden">
            <h2 className="loading-text font-mono uppercase text-md flex items-center gap-1">
              Loading Experience
              <span className="flex items-center ml-1">
                <svg width="10" height="10" className="inline-block">
                  <circle
                    className="dot-circle"
                    cx="5"
                    cy="8"
                    r="2"
                    fill="black"
                  />
                </svg>
                <svg width="10" height="10" className="inline-block">
                  <circle
                    className="dot-circle"
                    cx="5"
                    cy="8"
                    r="2"
                    fill="black"
                  />
                </svg>
                <svg width="10" height="10" className="inline-block">
                  <circle
                    className="dot-circle"
                    cx="5"
                    cy="8"
                    r="2"
                    fill="black"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* Loading Bar SVG */}
          <svg
            width="200"
            height="8"
            viewBox="0 0 200 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_76)">
              <path
                d="M1 4H200"
                stroke="#111936"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_76">
                <rect
                  className="loading-line"
                  width="0"
                  height="8"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Percentage Counter */}
        <h1 className="percent opacity-0 text-5xl md:text-6xl font-mono mt-2">
          {count}%
        </h1>
      </div>
    </div>
  );
};

export default LoadingPage;