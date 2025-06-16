import './App.css';
import ListaPacientes from './pages/ListaPacientes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OpcoesPaciente from './pages/OpcoesPaciente';
import CriarPaciente from './pages/CriarPaciente';
import EditarPaciente from './pages/EditarPaciente';
import CriarVisitante from './pages/CriarVisitante';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaPacientes />}/>
        <Route path='/paciente/:id' element={<OpcoesPaciente />} />
        <Route path='/criarPaciente' element={<CriarPaciente />} />
        <Route path='/editaPaciente/:id' element={<EditarPaciente />} />
        <Route path='/criarVisitante/:id' element={<CriarVisitante />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
