import React, { useContext, createContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase/firebase-config'; // Asegúrate de que la ruta es correcta

// Define un tipo para el contexto que incluya el usuario y cualquier otra cosa que necesites
type AuthContextType = {
  currentUser: User | null;
};

// Crea el contexto con el tipo definido
const AuthContext = createContext<AuthContextType>({ currentUser: null });

// Hook personalizado para usar el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// Define los props del AuthProvider
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <div>Cargando...</div>; // O cualquier otro indicador de carga que prefieras
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
