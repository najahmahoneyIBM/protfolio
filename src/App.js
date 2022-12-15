import './App.css';
import { About, Contact, Work, Skills } from './containers';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
