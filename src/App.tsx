import FullHeader from './assets/FullHeader.tsx';
import Hero from './assets/Hero.tsx';
import ToolSection from './assets/ToolSelection.tsx';
import ResearchSection from './assets/Research.tsx';
import Footer from './assets/Footer.tsx';
import AboutSection from './assets/About.tsx';
import { createElement } from 'react';

function App() {

  return (
      FullHeader(),
      createElement('main', {className: 'main-content', id: 'mainContent' },
      Hero(),
      AboutSection(),
      ToolSection(),
      ResearchSection(),
      Footer()
      )
  )
}

export default App
