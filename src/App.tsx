import FullHeader from './assets/FullHeader.tsx';
import Hero from './assets/Hero.tsx';
import ToolSection from './assets/ToolSelection.tsx';
import ResearchSection from './assets/Research.tsx';
import Footer from './assets/Footer.tsx';
import AboutSection from './assets/About.tsx';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    import('./assets/app.js');
    import('./assets/script.js');
  }, []);

  return (
    <>
    {/*Render for later use
      <div id="bg-gradient" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      <FullHeader />
      <main className="main-content" id="mainContent">
        <Hero />
        <AboutSection />
        <ToolSection />
        <ResearchSection />
        <Footer />
      </main>
    </>
  )
}

export default App
