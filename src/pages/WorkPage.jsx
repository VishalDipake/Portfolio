import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01",
    title: ["Edemy", "LMS"],
    desc: "Full-featured MERN stack Learning Management System for students and mentors, with course delivery, payments and role-based auth.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    link: "https://lmsfrontend-xi.vercel.app/",
    github: "https://github.com/VishalDipake/Edemy-LMS",
    reverse: false,
    accent: "#4F86F7",
    mock: "lms",
  },
  {
    num: "02",
    title: ["Social Media", "Platform"],
    desc: "A social media app with post feeds, profiles, follow/unfollow relationships, and media uploads via Cloudinary.",
    tech: ["React", "Redux Toolkit", "Express", "MongoDB", "Cloudinary"],
    link: "https://quick-chat-lms19.vercel.app/",
    github: "https://github.com/VishalDipake/QuickChat",
    reverse: true,
    accent: "#F76E9A",
    mock: "social",
  },
  {
    num: "03",
    title: ["Wanderlust", "Travel"],
    desc: "Airbnb-inspired travel listing site built with the MERN stack, with Stripe payments and JWT auth, deployed on Render.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    link: "https://wonderlust-5h3n.onrender.com/listing",
    github: "https://github.com/VishalDipake/WANDERLUST_APP",
    reverse: false,
    accent: "#3AAE8C",
    mock: "travel",
  },
  {
    num: "04",
    title: ["AI Workflow", "Automation"],
    desc: "An AI-powered workflow automation builder built from scratch, using Redis for queuing and Docker for deployment.",
    tech: ["React.js", "OpenAI API", "Redis", "Docker", "Express", "MongoDB"],
    github: "https://github.com/VishalDipake/Ai---TriggerX",
    reverse: true,
    accent: "#9B6BF2",
    mock: "workflow",
  },
  {
    num: "05",
    title: ["Virtual Try-On", "AI"],
    desc: "AI-powered virtual try-on project using computer vision, depth estimation, and deep learning to generate realistic clothing try-on results.",
    tech: ["TypeScript", "Python", "Deep Learning", "Computer Vision", "Depth Estimation", "HR-VITON"],
    github: "https://github.com/VishalDipake/Virtual-Try-On",
    reverse: false,
    accent: "#F28FAD",
    mock: "tryon",
  },
];

/* Illustrated "screenshot" mockups — browser chrome + a scene that represents
   each product's real UI, since no live screenshots exist yet. Swap the
   inner scene for a real <img> once you have one. */
const BrowserChrome = ({ url, children }) => (
  <div className="w-full rounded-lg overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_#111936] bg-white">
    <div className="flex items-center gap-2 px-3 py-2 bg-[#eeeae1] border-b-2 border-black">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
      <span className="ml-2 flex-1 truncate rounded bg-white/70 border border-black/10 px-2 py-0.5 text-[10px] font-mono text-gray-500">
        {url}
      </span>
    </div>
    <div className="aspect-video relative overflow-hidden">{children}</div>
  </div>
);

const LmsMock = ({ accent }) => (
  <div className="w-full h-full p-3 flex gap-2" style={{ background: "#F4F6FB" }}>
    <div className="w-1/4 h-full rounded bg-white border border-black/10 p-2 flex flex-col gap-2">
      {["Dashboard", "My Courses", "Mentors", "Certificates"].map((l, i) => (
        <div key={l} className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-sm" style={{ background: i === 1 ? accent : "#D9DEEA" }}></span>
          <span className="h-1.5 rounded bg-[#D9DEEA]" style={{ width: 34 - i * 3 }}></span>
        </div>
      ))}
    </div>
    <div className="flex-1 grid grid-cols-2 gap-2">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="rounded bg-white border border-black/10 p-2 flex flex-col gap-1.5">
          <div className="h-8 rounded" style={{ background: `${accent}33` }}></div>
          <div className="h-1.5 w-3/4 rounded bg-[#D9DEEA]"></div>
          <div className="progress-bar h-1.5 rounded-full bg-[#EAEDF4] overflow-hidden">
            <div className="progress-fill h-full rounded-full" style={{ background: accent, width: "0%" }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SocialMock = ({ accent }) => (
  <div className="w-full h-full p-3 flex gap-2" style={{ background: "#FBF5F7" }}>
    <div className="flex-1 flex flex-col gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="rounded bg-white border border-black/10 p-2 flex gap-2 items-start">
          <span className="w-6 h-6 rounded-full shrink-0" style={{ background: `${accent}${i === 0 ? "" : "99"}` }}></span>
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-1.5 w-1/3 rounded bg-[#EEDCE3]"></div>
            <div className="h-6 w-full rounded" style={{ background: `${accent}22` }}></div>
            <div className="flex gap-2 pt-0.5">
              <span className="social-heart w-2.5 h-2.5 rounded-full" style={{ background: accent }}></span>
              <span className="h-1.5 w-6 rounded bg-[#EEDCE3]"></span>
              <span className="h-1.5 w-6 rounded bg-[#EEDCE3]"></span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="w-1/4 flex flex-col gap-2">
      <div className="h-full rounded bg-white border border-black/10 p-2 flex flex-col gap-2">
        <div className="h-1.5 w-2/3 rounded bg-[#EEDCE3]"></div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full" style={{ background: `${accent}88` }}></span>
            <span className="h-1.5 rounded bg-[#EEDCE3]" style={{ width: 20 }}></span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TravelMock = ({ accent }) => (
  <div className="w-full h-full p-3 flex flex-col gap-2" style={{ background: "#F3FAF7" }}>
    <div className="rounded bg-white border border-black/10 px-3 py-1.5 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full" style={{ background: accent }}></span>
      <span className="h-1.5 w-24 rounded bg-[#DCEFE7]"></span>
    </div>
    <div className="flex-1 grid grid-cols-3 gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="rounded bg-white border border-black/10 overflow-hidden flex flex-col">
          <div className="flex-1" style={{ background: `linear-gradient(135deg, ${accent}55, ${accent}22)` }}></div>
          <div className="p-1.5 flex flex-col gap-1">
            <div className="h-1.5 w-3/4 rounded bg-[#DCEFE7]"></div>
            <div className="h-1.5 w-1/2 rounded" style={{ background: accent }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const WorkflowMock = ({ accent }) => (
  <div className="w-full h-full p-4 relative" style={{ background: "#F7F5FC" }}>
    <svg viewBox="0 0 300 160" className="w-full h-full">
      <path className="flow-line" d="M30 40 H120" stroke={accent} strokeWidth="2" fill="none" strokeDasharray="4 4" />
      <path className="flow-line" d="M150 40 V80 H150" stroke={accent} strokeWidth="2" fill="none" strokeDasharray="4 4" />
      <path className="flow-line" d="M150 100 H240" stroke={accent} strokeWidth="2" fill="none" strokeDasharray="4 4" />
      <rect x="10" y="20" width="90" height="36" rx="6" fill="white" stroke={accent} strokeWidth="2" />
      <text x="55" y="43" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#333">Trigger</text>
      <rect x="105" y="62" width="90" height="36" rx="6" fill="white" stroke={accent} strokeWidth="2" />
      <text x="150" y="85" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#333">AI Step</text>
      <rect x="200" y="90" width="90" height="36" rx="6" fill={accent} stroke={accent} strokeWidth="2" />
      <text x="245" y="113" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="white">Output</text>
      <circle className="flow-dot" cx="30" cy="40" r="3" fill={accent} />
    </svg>
  </div>
);

const TryOnMock = ({ accent }) => (
  <div className="w-full h-full p-3 relative overflow-hidden" style={{ background: "#FFF5F7" }}>
    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
      <span className="font-mono text-[9px] font-bold uppercase tracking-widest">Virtual Try-On</span>
      <span className="px-2 py-1 rounded border border-black/20 bg-white font-mono text-[8px]">DEPTH AI</span>
    </div>
    <div className="absolute inset-x-8 top-12 bottom-5 flex items-center justify-center gap-4">
      <div className="w-1/3 h-full rounded-lg border border-black/10 bg-white p-2 flex flex-col gap-2">
        <div className="h-2 w-2/3 rounded bg-black/10"></div>
        <div className="flex-1 rounded-md" style={{ background: `linear-gradient(145deg, ${accent}55, #ffffff)` }}></div>
        <div className="h-2 w-1/2 rounded bg-black/10"></div>
      </div>
      <div className="text-xl font-bold" style={{ color: accent }}>→</div>
      <div className="w-1/3 h-full rounded-lg border-2 border-black bg-white p-2 flex flex-col gap-2 shadow-[3px_3px_0px_0px_#111936]">
        <div className="h-2 w-2/3 rounded" style={{ background: accent }}></div>
        <div className="flex-1 rounded-md relative overflow-hidden" style={{ background: `linear-gradient(160deg, #f4f4f4, ${accent}44)` }}>
          <div className="absolute left-1/2 top-[18%] -translate-x-1/2 w-7 h-7 rounded-full border-2 border-black/60 bg-[#f1c9b8]"></div>
          <div className="absolute left-1/2 top-[42%] -translate-x-1/2 w-16 h-20 rounded-t-[45%] border-2 border-black/60" style={{ background: `${accent}99` }}></div>
        </div>
        <div className="h-2 w-1/2 rounded bg-black/10"></div>
      </div>
    </div>
  </div>
);

const mockMap = { lms: LmsMock, social: SocialMock, travel: TravelMock, workflow: WorkflowMock, tryon: TryOnMock };

const ProjectVisual = ({ p }) => {
  const wrapRef = useRef(null);
  const Mock = mockMap[p.mock];

  const handleMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(el, {
      rotateY: px * 10,
      rotateX: -py * 10,
      transformPerspective: 800,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const handleLeave = () => {
    gsap.to(wrapRef.current, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="project-visual w-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      <BrowserChrome url={p.link || `github.com/VishalDipake`}>
        <Mock accent={p.accent} />
      </BrowserChrome>
    </div>
  );
};

const WorkPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".work-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Signature mockup animations, replayed each time the card enters view
        const fills = card.querySelectorAll(".progress-fill");
        const hearts = card.querySelectorAll(".social-heart");
        const flowLines = card.querySelectorAll(".flow-line");

        ScrollTrigger.create({
          trigger: card,
          start: "top 80%",
          onEnter: () => {
            if (fills.length) {
              gsap.to(fills, { width: "78%", duration: 1, ease: "power2.out", stagger: 0.1 });
            }
            if (hearts.length) {
              gsap.fromTo(
                hearts,
                { scale: 1 },
                { scale: 1.6, duration: 0.35, ease: "back.out(3)", stagger: 0.15, yoyo: true, repeat: 1 }
              );
            }
            if (flowLines.length) {
              flowLines.forEach((line) => {
                const len = line.getTotalLength ? line.getTotalLength() : 100;
                gsap.fromTo(
                  line,
                  { strokeDashoffset: len },
                  { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }
                );
              });
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-x-hidden min-h-screen py-10">
      <h1 className="text-4xl md:text-6xl w-fit mx-4 sm:mx-8 py-5 border-b-2 sm:border-b-4 border-black font-medium mb-10">
        Selected Work
      </h1>

      <div ref={containerRef} className=" mx-auto px-4 sm:px-8  pb-24">
        {projects.map((p, i) => (
          <div
            key={p.num}
            className="work-card sticky bg-white border-2 border-black/10 rounded-2xl shadow-xl overflow-hidden mb-8"
            style={{ top: `${96 + i * 16}px`, zIndex: 10 + i }}
          >
              <div className="grid group grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center p-6 md:p-12 relative">
                {/* Text Side */}
                <div
                  className={`${
                    p.reverse ? "order-1 md:order-2" : ""
                  } relative flex flex-col gap-6 z-10 sm:px-2`}
                >
                  <span
                    className={`absolute -z-10 text-[8rem] md:text-[11rem] font-bold text-[#00000014] -top-16 ${
                      p.reverse ? "right-0" : "-left-2"
                    } transition-colors duration-300 group-hover:text-[#00000033] select-none pointer-events-none`}
                  >
                    {p.num}
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
                    {p.title[0]} <br /> {p.title[1]}
                  </h2>
                  <p className="text-base md:text-lg font-mono text-gray-700 leading-relaxed lg:pr-8">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-5 py-2 bg-black/5 font-mono rounded-md text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-black text-white border-2 border-black rounded-md font-mono text-sm font-semibold shadow-[3px_3px_0px_0px_#111936] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#111936] transition-all"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white text-black border-2 border-black rounded-md font-mono text-sm font-semibold shadow-[3px_3px_0px_0px_#111936] hover:bg-black hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#111936] transition-all"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Visual Side */}
                <div
                  className={`${
                    p.reverse ? "order-2 md:order-1" : ""
                  } w-full max-w-xl mx-auto flex justify-center items-center rounded ${
                    p.reverse ? "rotate-1" : "-rotate-1"
                  } group-hover:rotate-0 transition-transform duration-500`}
                >
                  <ProjectVisual p={p} />
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
