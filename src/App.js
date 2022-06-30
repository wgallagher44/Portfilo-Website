
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import AboutMe from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Email from './components/Email';
function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
      <AboutMe/>
      <Skills />
      {/* <Projects /> */}
     <Email /> 
    
    </div>
  );
}

export default App;
