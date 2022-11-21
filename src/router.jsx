import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Personas from './pages/Personas';

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/personas" element={<Personas />} />
      </Routes>
    </Router>
  );
};

const Routing = () => {
  return <Rutas />
};

export default Routing;