import './App.css';
import ListaPacientes from './pages/ListaPacientes';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import OpcoesPaciente from './pages/OpcoesPaciente';
import CriarPaciente from './pages/CriarPaciente';
import EditarPaciente from './pages/EditarPaciente';
import CriarVisitante from './pages/CriarVisitante';
import hapvida from './assets/logo.png'; // ajuste o caminho conforme sua pasta

function App() {
  return (
    <BrowserRouter>
      <header className="header-logo">
        <Link to="/">
          <img src={hapvida} width={200} alt="Hapvida logo" />
        </Link>
      </header>
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
