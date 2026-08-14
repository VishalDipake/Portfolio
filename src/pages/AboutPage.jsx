import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { y: 80, opacity: 0.2 },
        {
          y: -20,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 15%",
            scrub: 1,
          },
        }
      );

      gsap.from(".heading", {
        yPercent: 60,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      gsap.from(".about-p", {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      gsap.to(".about-orbit", {
        rotation: 360,
        duration: 16,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".about-orbit-reverse", {
        rotation: -360,
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".about-float", {
        y: -9,
        rotate: "+=2",
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.12,
        ease: "sine.inOut",
      });

      gsap.to(".about-glow", {
        scale: 1.25,
        opacity: 0.55,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="about-section relative w-full min-h-[75vh] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 px-6 sm:px-10 md:px-20 lg:px-28 py-16 md:py-20 items-center"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="about-orbit absolute -left-20 top-10 w-56 h-56 rounded-full border border-black/10" />
        <div className="about-orbit-reverse absolute right-8 top-16 w-28 h-28 rounded-full border-2 border-dashed border-[#9B6BF2]/20" />
        <div className="about-glow absolute left-[42%] top-[18%] w-24 h-24 rounded-full bg-[#BFE3FF]/40 blur-3xl" />
        <div className="about-glow absolute right-[8%] bottom-[15%] w-32 h-32 rounded-full bg-[#FFD0DF]/30 blur-3xl" />
        <span className="about-float absolute left-[8%] bottom-[18%] font-mono text-xs text-black/20 rotate-[-8deg]">
          const developer = true;
        </span>
        <span className="about-float absolute right-[12%] top-[42%] font-mono text-sm text-black/20 rotate-[7deg]">
          {"<build />"}
        </span>
      </div>

      <div className="relative flex justify-center items-center py-4 sm:py-6">
        <div className="about-orbit absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-black/10" />
        <div className="about-orbit-reverse absolute w-60 h-60 sm:w-68 sm:h-68 rounded-full border border-dashed border-black/10" />

        <div
          ref={imgRef}
          className="about-photo relative w-56 sm:w-64 md:w-72 aspect-[4/5] rotate-1 bg-transparent p-2.5 font-mono border-2 border-black rounded-xl cursor-pointer shadow-[6px_6px_0px_0px_#111936] z-10"
        >
          <img
            src="/profilePic.png"
            alt="Vishal Dipake"
            className="w-full h-full object-cover rounded-lg"
          />

          <p className="about-chip about-float px-3 py-1.5 text-xs sm:text-sm border-2 border-black absolute uppercase -top-5 -left-5 bg-[#CEE5FF] -rotate-6 shadow-[3px_3px_0px_0px_#111936] font-semibold">
            React
          </p>
          <p className="about-chip about-float px-3 py-1.5 text-xs sm:text-sm border-2 border-black absolute uppercase -right-5 -bottom-4 rotate-4 bg-[#FFDAD5] shadow-[3px_3px_0px_0px_#111936] font-semibold">
            Node.js
          </p>
          <p className="about-chip about-float px-3 py-1.5 text-xs sm:text-sm border-2 border-black absolute -right-8 top-[28%] rotate-6 bg-[#D9F5DD] shadow-[3px_3px_0px_0px_#111936] font-semibold">
            AI / ML
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-center gap-4 max-w-xl">
        <div className="border-b-2 sm:border-b-4 border-black w-full py-2 overflow-hidden">
          <h1 className="heading text-3xl sm:text-4xl md:text-5xl font-bold">
            Developer.
          </h1>
        </div>

        <p className="about-p text-sm sm:text-base md:text-lg font-mono text-[#46464D] leading-relaxed">
          Computer Science graduate and full-stack developer building modern web
          products with React, TypeScript, Node.js, MongoDB and Python. I enjoy
          turning ideas into shipped software, especially AI-powered
          applications, computer vision systems and reliable backend APIs.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {["React", "TypeScript", "Node.js", "Python", "AI", "Computer Vision"].map(
            (item, i) => (
              <span
                key={item}
                className="about-float px-2.5 py-1 border border-black rounded-full bg-white/70 font-mono text-[10px] sm:text-xs shadow-[2px_2px_0px_0px_#111936]"
                style={{ animationDelay: `${i * 0.18}s` }}
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
