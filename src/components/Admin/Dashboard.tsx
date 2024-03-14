import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; // Asume que tienes un hook de autenticación
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config'; // Importa tu instancia de Firestore
import  SignOut from '../SignOut';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth(); // Asume que useAuth devuelve el usuario actual
  const [name, setName] = useState('');
  const [profileType, setProfileType] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          setName(docSnap.data().name); // Asume que el documento tiene un campo 'name'
          setProfileType(docSnap.data().profileType); // Asume que el documento tiene un campo 'profileType'
        } else {
          console.log("No se encontró el documento!");
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  return (
    <div>
      <h1>Dashboard</h1>
      {name && <p>Bienvenido, {name}</p>}
      {/* Contenido condicional basado en el profileType */}
      {profileType === "visitante" && (
        <div>
          {/* Contenido específico para visitantes */}
          <p>Eres un visitante.</p>
        </div>
      )}
      {profileType === "admin" && (
        <div>
          {/* Contenido específico para administradores */}
          <p>Eres un administrador.</p>
        </div>
      )}
      ---------
      <SignOut />
    </div>
  );
}

export default Dashboard;
