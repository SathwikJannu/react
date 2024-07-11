import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Carousel from './components/Carousel.js';
import Nav from './components/Nav.js'
function App() {
  return (
    <div className="App">
      
      <Header/>
      <Nav/>
      <Carousel/>
      
    </div>
  );
}

export default App;
