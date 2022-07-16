
import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"
import AboutMe from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Email from './components/Email';
import GeoFood_img from "./Images/geofood_logo.png";
import PdgaLogo from "./Images/pdga_logo.png";
import Sudoku  from "./Images/sudoku.jpg";
import calc from "./Images/calculator.png";

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
      <AboutMe/>
      <Skills />
      <Projects/>
     <Email /> 
    
    </div>
  );
}

export default App;
