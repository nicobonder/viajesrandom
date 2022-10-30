import { Route, Routes } from 'react-router-dom';
import './App.css';

import Experiencia from './components/ExperienciaRadical/Experiencia';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import RandomTrip from './components/RandomTrip';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='trip' element={<RandomTrip />}  />
        <Route path='experience' element={<Experiencia />}  />
      </Routes>
    </div>
  );
}

export default App;
