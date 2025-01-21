import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navigation from './components/Navigation';
function App() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <Navigation />
      </header>
      <nav>
      <ul>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume"></a></li>
          </ul>
      </nav>
      <main>
        <AboutMe /> 
        <Portfolio />
        <Contact />
        <Resume />
      </main>
      <footer>
        <p>© 2023 My Portfolio</p>
      </footer>
    </div>
  );
}