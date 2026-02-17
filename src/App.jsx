

import { NavBar } from "./components/NavBar";
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
