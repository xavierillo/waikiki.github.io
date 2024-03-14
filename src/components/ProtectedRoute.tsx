// components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Suponiendo que tienes un hook personalizado para la autenticación

const ProtectedRoute = () => {
  const { currentUser } = useAuth(); // Obtiene el usuario actual desde el contexto de autenticación

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
