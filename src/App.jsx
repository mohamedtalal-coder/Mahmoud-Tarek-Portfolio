import { Navbar, Footer } from './components/layout';
import { ScrollToTop } from './components/ui';
import { Hero, About, Projects, Skills, Contact } from './sections';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
