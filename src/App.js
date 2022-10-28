import { Route, Routes } from 'react-router-dom';
import './App.css';

import Experiencia from './components/ExperienciaRadical/Experiencia';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='experience' element={<Experiencia />}  />
      </Routes>
    </div>
  );
}

export default App;
