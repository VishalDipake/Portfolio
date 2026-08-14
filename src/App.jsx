import React, { useState } from "react";
import LoadingPage from "./Components/LoadingPage";
import HeroPage from "./pages/HeroPage";
import Navbar from "./Components/Navbar";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import JourneyPage from "./pages/JourneyPage";
import SocialPage from "./pages/SocialPage";
import Footer from "./Components/Footer";

const App = () => {
  const [isLoadingOver, setIsLoading] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="paper-texture"></div>

      {/* Loading Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 flex justify-center items-center overflow-hidden">
        <LoadingPage setIsLoading={setIsLoading} />
      </div>
      {isLoadingOver && (
        <div className="relative w-full min-h-screen flex flex-col">
          <Navbar />
          <div id="hero">
            <HeroPage />
          </div>
          <div id="about" className="scroll-mt-24">
            <AboutPage />
          </div>
          <div id="work" className="scroll-mt-24">
            <WorkPage />
          </div>
          <div id="journey" className="scroll-mt-55">
            <JourneyPage />
          </div>
          <div id="contact" className="scroll-mt-24">
            <SocialPage />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
