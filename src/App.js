import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import VideoExampleComp from './components/VideoExampleComp';
import ResponsiveCarousel from './components/ResponsiveCarousel';
import About from './components/About';
import Programas from './components/Programas';
import Donaciones from './components/Donaciones';
import Impacto from './components/Impacto';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className=" bg-gradient-to-b from-black via-black to-gray-800 ">
      <NavBar/>
      <VideoExampleComp/>
      <ResponsiveCarousel/>
      <About/>
      <Programas/>
      <Donaciones/>
      <Impacto/>
      <Contacto/>
      
    </div>
  );
}

export default App;
