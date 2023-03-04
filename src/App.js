import './App.css';
import Aboutus from './Components/Aboutus';
import Benefits from './Components/Benefits';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='App'>
        <Navbar/>
        <div id='home'>
          <Home/>
        </div>
        <div id='benefits'>
          <Benefits/>
        </div>
        <div id='aboutus'>
          <Aboutus/>
        </div>
        <div id='contact'>
          <Contact/>
        </div>
    </div>    
  );
}

export default App;