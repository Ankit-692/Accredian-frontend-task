import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Lower from './components/Lower';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Lower/>
    </div>
  );
}

export default App;
