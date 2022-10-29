import { Route, Routes } from 'react-router-dom';
import './App.css';

import Experiencia from './components/ExperienciaRadical/Experiencia';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='experience' element={<Experiencia />}  />
      </Routes>
    </div>
  );
}

export default App;
