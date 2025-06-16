import './App.css';
import ListaPacientes from './pages/ListaPacientes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OpcoesPaciente from './pages/OpcoesPaciente';
import CriarPaciente from './pages/CriarPaciente';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaPacientes />}/>
        <Route path='/paciente/:id' element={<OpcoesPaciente />} />
        <Route path='/criarPaciente' element={<CriarPaciente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
