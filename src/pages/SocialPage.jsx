import React from 'react'

const SocialPage = () => {
  return (
    <div className="w-screen h-screen relative">
      {/* Background */}
      <div className="w-full h-full overflow-hidden bg-[#111936]">
        <img
          src="/gradient.png"
          alt=""
          className="w-full h-full object-cover scale-125 opacity-60 filter grayscale"
        />
      </div>

      {/* Overlay Text Box */}
      <div className="absolute scale-125 inset-0 flex items-center justify-center px-4">
        <div className="bg-[#e6e0e0e1] text-center p-10 rounded-lg border-3 shadow-[2px_2px_0_0] max-w-xl floating">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            LET'S BUILD SOMETHING TOGETHER.
          </h2>

          <div className="flex flex-wrap gap-6 justify-center text-lg font-semibold">
            <a
              href="https://github.com/VishalDipake"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111936] hover:text-black hover:italic hover:underline duration-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-d-396163325/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111936] hover:text-black hover:italic hover:underline duration-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:vishaldipake072@gmail.com"
              className="text-[#111936] hover:text-black hover:italic hover:underline duration-300 transition-colors"
            >
              Email
            </a>
            <a
              href="https://leetcode.com/u/Vishal_Dipake/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111936] hover:text-black hover:italic hover:underline duration-300 transition-colors"
            >
              LeetCode
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SocialPage
