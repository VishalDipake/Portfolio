import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    title: "The Foundation",
    desc: "Started a B.E. in Computer Science & Engineering at Sinhgad Institute of Technology, Pune, learning core CS fundamentals, OOP in Java, and how the web actually works.",
    date: "2022",
  },
  {
    title: "Full-Stack Fundamentals",
    desc: "Picked up React.js, Node.js and Express, and started shipping full MERN stack projects backed by MongoDB and MySQL.",
    date: "2023 – 2024",
  },
  {
    title: "Real Products",
    desc: "Built production-style apps: a MERN LMS with Stripe payments and JWT auth, a social platform with Cloudinary media, and an Airbnb-style listings app deployed on Render.",
    date: "2024 – 2025",
  },
  {
    title: "AI & Systems",
    desc: "Went deeper into backend architecture — Redis queues, Docker, and integrating the OpenAI API to build an AI-powered workflow automation tool.",
    date: "PRESENT",
  },
];

const JourneyPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-up").forEach((el, i) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-10 relative bg-black/5 border-t border-b border-black/10"
      id="journey"
    >
      <div className="grid grid-cols-12 gap-10">
        {/* Left Side Title */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-8 sticky top-32 self-start reveal-up">
          <h2 className="text-6xl md:text-7xl font-bold leading-tight">
            The <br /> Journey
          </h2>
          <p className="text-2xl text-[#46464D]">
            From CS fundamentals to shipping full-stack products with AI.
          </p>
        </div>

        {/* Right Side Timeline */}
        <div className="col-span-12 md:col-span-7 md:col-start-6 relative mt-16 md:mt-0">
          {/* Timeline Line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-black/20"></div>

          <div className="flex flex-col gap-16 relative side-line">
            {milestones.map((m) => (
              <div key={m.title} className="relative pl-12 group reveal-up">
                <div className="absolute left-0 top-2 w-5 h-5 rounded-full border-2 bg-white border-black transition-all group-hover:bg-black"></div>
                <h4 className="text-3xl md:text-4xl font-bold mb-2">
                  {m.title}
                </h4>
                <p className="text-xl text-[#46464D] mb-4">{m.desc}</p>
                <span className="text-lg font-mono text-[#46464D] border border-[#46464D] px-2 py-1">
                  {m.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyPage;
