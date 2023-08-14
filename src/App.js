import './App.css';
import Nav from "./components/Navbar/Nav.jsx"
import Section from "./components/Section/Section.jsx"
import About from "./components/About/About.jsx"
import Skills from './components/Skills/Skills.jsx'
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Section/>
      <About/>
      <Skills/>
      <Project />
      <ContactMe/>
      <Footer />
    </div>
  );
}

export default App;
