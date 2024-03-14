import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config'; // Importa tu instancia de autenticación

const SignOut: React.FC = () => {

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Cierre de sesión exitoso
            console.log("Sesión cerrada exitosamente");
            // Aquí puedes redirigir al usuario a la página de inicio de sesión o a la página principal
        }).catch((error) => {
            // Ocurrió un error al cerrar sesión
            console.error("Error al cerrar la sesión", error);
        });
    };

  return (
    <button onClick={handleSignOut}>Cerrar Sesión</button>
  );
}

export default SignOut;
