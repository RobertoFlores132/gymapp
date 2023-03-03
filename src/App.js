import './App.css';
import Aboutus from './Components/Aboutus';
import Benefits from './Components/Benefits';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      <Benefits/>
      <Aboutus/>
      <Contact/>
    </div>
  );
}

export default App;