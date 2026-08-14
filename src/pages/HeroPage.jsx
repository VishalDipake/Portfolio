import { MoveDownRight, Download, FileText } from "lucide-react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const greetings = ["Hola", "Bonjour", "Ciao", "Olá", "Hello!"];

const floatingTech = [
  { name: "React", className: "top-[15%] right-[11%]", color: "#BFE3FF", rotate: "-6deg" },
  { name: "TypeScript", className: "top-[29%] right-[28%]", color: "#C9C4FF", rotate: "5deg" },
  { name: "Node.js", className: "top-[45%] right-[8%]", color: "#C9F3D1", rotate: "-4deg" },
  { name: "Python", className: "top-[59%] right-[27%]", color: "#FFE0A8", rotate: "7deg" },
  { name: "MongoDB", className: "top-[72%] right-[9%]", color: "#C8F0D4", rotate: "-5deg" },
  { name: "AI / ML", className: "top-[80%] right-[31%]", color: "#FFD0DF", rotate: "4deg" },
];

const codeLines = [
  "const build = () => {",
  "  return <Future />;",
  "};",
];

const HeroPage = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const resumeBtnRef = useRef(null);
  const resumeIconRef = useRef(null);
  const greetingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1 });

      tl.from(".hero-deco", {
        opacity: 0,
        scale: 0.85,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.05,
      });

      tl.from(".first-heading", {
        y: 35,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      }, "-=0.4");

      tl.fromTo(
        ".letter",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "back.out(1.5)",
          stagger: 0.05,
        },
        "-=0.35"
      );

      gsap.set(textRef1.current, { x: -30, opacity: 0 });
      gsap.set(textRef2.current, { x: -30, opacity: 0 });

      tl.to(textRef1.current, { x: 0, opacity: 1, duration: 0.55, ease: "power4.out" }, "-=0.3")
        .to(textRef2.current, { x: 0, opacity: 1, duration: 0.55, ease: "power4.out" }, "-=0.35")
        .from(".subHeading1", { opacity: 0, y: 12, duration: 0.4 }, "-=0.25")
        .fromTo(
          ".hero-btn",
          { opacity: 0, y: 16, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(1.7)", stagger: 0.08 },
          "-=0.2"
        )
        .fromTo(
          ".resume-stamp",
          { scale: 0, rotate: -25, opacity: 0 },
          { scale: 1, rotate: -8, opacity: 1, duration: 0.45, ease: "back.out(3)" },
          "-=0.15"
        )
        .from(".lastHome", { opacity: 0, duration: 0.5 }, "-=0.1");

      gsap.to(".float-arrow", { y: 6, repeat: -1, yoyo: true, ease: "power1.inOut", duration: 0.7 });
      gsap.to(resumeIconRef.current, { y: 4, repeat: -1, yoyo: true, ease: "power1.inOut", duration: 0.7, delay: 1 });

      gsap.to(".hero-deco", {
        yPercent: -35,
        ease: "none",
        stagger: 0.02,
        scrollTrigger: { trigger: ".hero-page-wrapper", start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.to(".hero-bigword", {
        xPercent: -15,
        ease: "none",
        scrollTrigger: { trigger: ".hero-page-wrapper", start: "top top", end: "bottom top", scrub: 1 },
      });

      // Swift loop: Hola → Bonjour → Ciao → Olá → Hello! (3 seconds) → repeat
      const greeting = greetingRef.current;
      if (greeting) {
        const greetingTl = gsap.timeline({ repeat: -1, repeatDelay: 0.12 });

        greetings.slice(0, -1).forEach((word) => {
          greetingTl
            .set(greeting, { textContent: word, y: 7, opacity: 0, scale: 0.96 })
            .to(greeting, { y: 0, opacity: 1, scale: 1, duration: 0.12, ease: "power2.out" })
            .to(greeting, { y: -7, opacity: 0, scale: 1.02, duration: 0.1, ease: "power2.in" }, "+=0.16");
        });

        greetingTl
          .set(greeting, { textContent: "Hello!", y: 7, opacity: 0, scale: 0.96 })
          .to(greeting, { y: 0, opacity: 1, scale: 1, duration: 0.12, ease: "back.out(1.8)" })
          .to(greeting, { duration: 3 })
          .to(greeting, { y: -7, opacity: 0, scale: 1.02, duration: 0.1, ease: "power2.in" });
      }

      gsap.to(".tech-float", {
        y: -18,
        x: 8,
        rotate: "+=4",
        duration: 1.7,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        ease: "sine.inOut",
      });

      gsap.to(".code-window", {
        y: -15,
        rotate: -2,
        duration: 2.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orbit", { rotation: 360, duration: 11, repeat: -1, ease: "none" });
      gsap.to(".hero-orbit-reverse", { rotation: -360, duration: 15, repeat: -1, ease: "none" });

      gsap.to(".hero-particle", {
        y: -80,
        x: 30,
        opacity: 0.12,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        ease: "sine.inOut",
      });

      gsap.to(".hero-code-float", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.12,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".code-cursor",
        { opacity: 0 },
        { opacity: 1, duration: 0.35, repeat: -1, yoyo: true, ease: "steps(1)" }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleResumeMove = (e) => {
    const btn = resumeBtnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.25, y: y * 0.35, duration: 0.4, ease: "power2.out" });
  };

  const handleResumeLeave = () => {
    gsap.to(resumeBtnRef.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <div className="hero-page-wrapper w-full min-h-screen relative flex items-center justify-start overflow-hidden pt-28 md:pt-36 pb-16">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(#111936 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <h3
          className="hero-bigword hero-deco absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[16vw] font-bold uppercase leading-none select-none pointer-events-none"
          style={{ WebkitTextStroke: "1.5px rgba(17,25,54,0.08)", color: "transparent" }}
        >
          Build &amp; Ship
        </h3>

        <div className="hero-deco floating-element absolute top-28 right-[8%] hidden sm:block">
          <p className="px-4 py-1.5 text-xs md:text-sm border-2 border-black uppercase bg-[#CEE5FF] rotate-6 shadow-[3px_3px_0px_0px_#111936] font-semibold font-mono">
            Full Stack
          </p>
        </div>

        <div className="hero-deco floating-element absolute top-[48%] right-[4%] hidden sm:block">
          <p className="px-4 py-1.5 text-xs md:text-sm border-2 border-black uppercase bg-[#FFDAD5] -rotate-6 shadow-[3px_3px_0px_0px_#111936] font-semibold font-mono">
            Open to work
          </p>
        </div>

        <div className="hero-deco rotate-normal absolute bottom-40 left-[6%] hidden md:block">
          <div className="w-24 h-24 rounded-full border-2 border-black/20" />
        </div>

        {/* Faint moving tech atmosphere */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-orbit absolute -right-[10%] top-[5%] w-[42vw] h-[42vw] max-w-[520px] max-h-[520px] rounded-full border border-[#111936]/10">
            <div className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-[#9B6BF2]/30" />
          </div>

          <div className="hero-orbit-reverse absolute -right-[2%] top-[15%] w-[32vw] h-[32vw] max-w-[390px] max-h-[390px] rounded-full border border-dashed border-[#111936]/10">
            <div className="absolute bottom-0 left-1/4 w-3 h-3 rounded-full bg-[#4F86F7]/30" />
          </div>

          <div className="absolute left-[42%] top-[18%] hero-code-float font-mono text-[10px] text-[#111936]/20 rotate-6">
            {"{ api: /build, status: 200 }"}
          </div>
          <div className="absolute left-[58%] top-[38%] hero-code-float font-mono text-xs text-[#111936]/15 -rotate-6">
            &lt;AI /&gt;
          </div>
          <div className="absolute right-[38%] bottom-[20%] hero-code-float font-mono text-[11px] text-[#111936]/20 rotate-3">
            npm run deploy
          </div>

          {[...Array(14)].map((_, i) => (
            <span
              key={i}
              className="hero-particle absolute w-1.5 h-1.5 rounded-full bg-[#111936]/15"
              style={{
                left: `${38 + ((i * 17) % 54)}%`,
                top: `${8 + ((i * 23) % 78)}%`,
              }}
            />
          ))}

          <div className="absolute left-[47%] top-[12%] hidden lg:block w-20 h-20 border border-[#111936]/10 rotate-45" />
          <div className="absolute left-[66%] bottom-[10%] hidden lg:block w-24 h-24 border-2 border-dotted border-[#111936]/10 rounded-full" />
        </div>

        {/* Developer playground for the previously empty right side */}
        <div className="absolute hidden lg:block right-[3%] top-[18%] w-[38%] h-[68%] pointer-events-none">
          <div className="code-window absolute bottom-[8%] left-[8%] w-[290px] rounded-xl border-2 border-black bg-[#111936] p-4 shadow-[7px_7px_0px_0px_#111936] rotate-2">
            <div className="flex gap-1.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A80]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD166]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#80ED99]"></span>
            </div>
            <div className="font-mono text-xs leading-6 text-white/90">
              {codeLines.map((line) => <div key={line}>{line}</div>)}
              <span className="code-cursor inline-block w-1.5 h-3.5 bg-white align-middle ml-1"></span>
            </div>
          </div>

          {floatingTech.map((tech) => (
            <div key={tech.name} className={`tech-float absolute ${tech.className}`} style={{ transform: `rotate(${tech.rotate})` }}>
              <div
                className="px-4 py-2 border-2 border-black rounded-lg font-mono text-xs md:text-sm font-bold shadow-[4px_4px_0px_0px_#111936] whitespace-nowrap"
                style={{ backgroundColor: tech.color }}
              >
                {tech.name}
              </div>
            </div>
          ))}

          <div className="absolute top-[8%] left-[8%] w-16 h-16 border-2 border-black rounded-full border-dashed animate-spin" style={{ animationDuration: "12s" }}></div>
          <div className="absolute bottom-[3%] right-[2%] w-28 h-28 rounded-full border border-black/20"></div>
        </div>
      </div>

      <div className="container relative z-10 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
        <div>
          <div className="w-fit h-fit overflow-hidden min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]">
            <h2 ref={greetingRef} className="first-heading py-1 font-semibold uppercase text-2xl sm:text-3xl md:text-4xl text-h2-clr">
              Hola
            </h2>
          </div>
          <div className="overflow-hidden py-4">
            <h1 className="second-heading font-bold uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-black tracking-tight leading-none flex flex-wrap">
              {"Vishal".split("").map((char, i) => (
                <span key={i} className="letter inline-block opacity-0 translate-y-10">{char}</span>
              ))}
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 pl-0 sm:pl-5 pt-8 md:pt-12">
          <div className="flex flex-col gap-3">
            <p ref={textRef1} className="w-fit font-mono uppercase font-bold tracking-widest text-xs border-l-4 px-4 border-black">Full Stack Developer</p>
            <p ref={textRef2} className="w-fit font-mono uppercase font-bold tracking-widest text-xs border-l-4 px-4 border-black">Based in Pune, India</p>
          </div>

          <p className="subHeading1 font-mono font-semibold tracking-widest text-base sm:text-lg max-w-2xl leading-relaxed">
            Building full-stack experiences <br className="hidden sm:inline" /> with React, Node.js, TypeScript and AI.
          </p>

          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 pt-4">
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <button className="hero-btn px-6 py-2.5 font-mono text-base sm:text-lg bg-black text-white border-2 border-black rounded cursor-pointer shadow-[4px_4px_0px_0px_#111936] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#111936] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-shadow duration-150">
                <a href="#work">View More</a>
              </button>

              <button className="hero-btn px-6 py-2.5 font-mono text-base sm:text-lg bg-transparent hover:bg-black text-black hover:text-white border-2 border-black rounded cursor-pointer shadow-[4px_4px_0px_0px_#111936] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#111936] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-shadow duration-150">
                <a href="#contact">Contact</a>
              </button>

              <div className="relative inline-block">
                <span className="resume-stamp absolute -top-4 -right-4 z-20 pointer-events-none">
                  <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#FFDAD5] border-2 border-black text-[10px] font-mono font-bold uppercase shadow-[2px_2px_0px_0px_#111936]">
                    <FileText size={11} /> PDF
                  </span>
                </span>
                <a href="/resume.pdf" download ref={resumeBtnRef} onMouseMove={handleResumeMove} onMouseLeave={handleResumeLeave} className="hero-btn group relative inline-flex items-center gap-2 px-6 py-2.5 font-mono text-base sm:text-lg bg-[#f7f2e8] text-black border-2 border-black rounded cursor-pointer shadow-[4px_4px_0px_0px_#111936] overflow-hidden transition-shadow duration-150" download="Vishal_Dipake.pdf">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-black transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                    <Download ref={resumeIconRef} size={20} /> Resume
                  </span>
                </a>
              </div>
            </div>

            <div className="lastHome">
              <a href="#about" className="flex items-center sm:flex-col justify-start sm:justify-center gap-2">
                <p className="uppercase font-mono tracking-widest text-xs font-bold sm:-rotate-2">Scroll to explore</p>
                <MoveDownRight className="float-arrow w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
