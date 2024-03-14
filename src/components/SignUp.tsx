// src/components/SignUp.tsx
import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config"; // Asegúrate de que la ruta sea correcta
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config"; // Importa tu instancia de Firestore
import { useNavigate } from "react-router-dom";
import Header from './home/Header';
import { Element, Events, scrollSpy } from 'react-scroll';


const SignUp: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [rut, setRut] = useState("");
    const [birthday, setBirthday] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Inicializa useNavigate


    const checkRutExists = async (rut: string) => {
        const rutRef = doc(db, 'rutValidations', rut);
        try {
          const docSnap = await getDoc(rutRef);

          console.log(docSnap);
          if (!docSnap.exists()) {
            // RUT no existe, puede proceder con el registro
            return false;
          }
          // RUT existe, no debería proceder con el registro
        } catch (error) {
          // Error al leer el documento, probablemente debido a las reglas de seguridad que bloquean la lectura de un documento existente
          console.error("El RUT ya está registrado.");
          return true;
        }
    }

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");


        // Verificar si el RUT ya existe
        const rutExists = await checkRutExists(rut);
        if (rutExists) {
            setError('El RUT ya está registrado.');
            return; // Detiene la ejecución del registro
        }


        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Continúa con el almacenamiento de los datos adicionales en Firestore...
            const user = userCredential.user;
            // Aquí es donde almacenas la información adicional en Firestore
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                rut: rut,
                birthday: birthday,
                profileType: "visitante", // Asigna el perfil de "visitante" por defecto
            });

            navigate("/dashboard"); // Redirige al usuario al dashboard de visitas

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                setError('El correo electrónico ya está en uso.');
            } else {
                setError('Error al registrar el usuario.');
            }
        }
    };

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            // eslint-disable-next-line prefer-rest-params
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            // eslint-disable-next-line prefer-rest-params
            console.log("end", arguments);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (<>
        <Header />
        <Element name="signUp">
            <div className="container-fluid text-center bg-waikiki pt-4">
                <div className="card bg-transparent border-0">
                    <div className="card-body ">
                        <div className="row g-0">
                            <div className="col-12">
                                <h2 className="text-white font-weight-bold">"¡Únete y estampa tu mundo con nosotros!"</h2>
                            </div>
                            <div className="col-8 bg-cuponera-linea">
                                <div className="row bg-cuponera">
                                    <div className="col-12 mt-auto mb-auto ">
                                        <div className="row">
                                            <div className="col-12">
                                                <h4>¡Regístrate y comienza a llenar tu cuponera!"</h4>
                                            </div>
                                            <div className="col-12">
                                                {error && <p style={{ color: "red" }}>{error}</p>}
                                                <form onSubmit={handleSignUp} className="form-group">
                                                    {/* Campos para nombre, RUT y fecha de cumpleaños */}
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            placeholder="Nombre completo"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="from-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={rut}
                                                            onChange={(e) => setRut(e.target.value)}
                                                            placeholder="RUT"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="from-group">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            value={birthday}
                                                            onChange={(e) => setBirthday(e.target.value)}
                                                            placeholder="Fecha de cumpleaños"
                                                            required
                                                        />
                                                    </div>
                                                    {/* Campos para correo electrónico y contraseña */}
                                                    <div className="from-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            placeholder="Correo electrónico"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="from-group">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            placeholder="Contraseña"
                                                            required
                                                        />
                                                    </div>
                                                    <button type="submit">Registrarse</button>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 bg-cuponera-linea">
                                <div className="row bg-cuponera">
                                    <div className="col-12 mt-auto mb-auto ">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    </>);
};

export default SignUp;
