import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/home/Home';
import Dashboard from './components/Admin/Dashboard'; // Asegúrate de importar tu componente Dashboard
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './components/SignUp'; // Asegúrate de que la ruta sea correcta


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registrar" element={<SignUp />} />
        // Dentro del componente App, actualiza la ruta del dashboard
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

