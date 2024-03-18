// src/components/SignUp.tsx
import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config"; // Asegúrate de que la ruta sea correcta
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config"; // Importa tu instancia de Firestore
import { useNavigate } from "react-router-dom";
import Header from './home/Header';
import { Element, Events, scrollSpy } from 'react-scroll';
import waikiki_sello from '../assets/img/waikiki_sello-transparente.png';
import numero_grupo from '../assets/img/Grupo_numero.png';


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [rut, setRut] = useState("");
    const [birthday, setBirthday] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Inicializa useNavigate

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };


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
        <Header type_header={1}/>
        <Element name="signUp">
            <div className="container-fluid bg-waikiki-inv pt-4">
                <div className="card bg-transparent border-0">
                    <div className="card-body ">
                        <div className="row g-0">
                            <div className='col-12'>
                                <div className="row">
                                    <div className="col col-sm bg-cuponera-linea">
                                        <div className="m-0 bg-cuponera pt-4">
                                            <div className="row me-2 ms-2">
                                                <div className="col-12">
                                                    <h3 className="bold-text text-white text-center pb-4">"¡Regístrate y comienza a llenar nuestra cuponera!"</h3>
                                                </div>
                                                <div className="col-12">
                                                <div className="col-12">
                                                    {/* {error && <p style={{ color: "red" }}>{error}</p>}
                                                    <form onSubmit={handleSignUp} className="row">
                                                        <div className="col-12 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={name}
                                                                onChange={(e) => setName(e.target.value)}
                                                                placeholder="Nombre completo"
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-6 from-group">
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
                                                    </form> */}
                                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                        <Row className="mb-3">
                                                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                                <Form.Label>Nombre completo</Form.Label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={name}
                                                                    onChange={(e) => setName(e.target.value)}
                                                                    placeholder=""
                                                                    required
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    Por favor ingrese el nombre completo.
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                            <Form.Label>Last name</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="Last name"
                                                                defaultValue="Otto"
                                                            />
                                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                                            <Form.Label>Username</Form.Label>
                                                            <InputGroup hasValidation>
                                                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                                <Form.Control
                                                                type="text"
                                                                placeholder="Username"
                                                                aria-describedby="inputGroupPrepend"
                                                                required
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                Please choose a username.
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                            </Form.Group>
                                                        </Row>
                                                        <Row className="mb-3">
                                                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                                            <Form.Label>City</Form.Label>
                                                            <Form.Control type="text" placeholder="City" required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please provide a valid city.
                                                            </Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                                            <Form.Label>State</Form.Label>
                                                            <Form.Control type="text" placeholder="State" required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please provide a valid state.
                                                            </Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                                            <Form.Label>Zip</Form.Label>
                                                            <Form.Control type="text" placeholder="Zip" required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please provide a valid zip.
                                                            </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </Row>
                                                        <Form.Group className="mb-3">
                                                            <Form.Check
                                                            required
                                                            label="Agree to terms and conditions"
                                                            feedback="You must agree before submitting."
                                                            feedbackType="invalid"
                                                            />
                                                        </Form.Group>
                                                        <Button type="submit">Submit form</Button>
                                                        </Form>
                                                </div>
                                                </div>
                                                <div className="col-12 col-sm-6 d-none d-md-block">
                                                    <img src={waikiki_sello} alt="Logo"  height="150"  style={{maxHeight: "30rem"}} />
                                                    <h4 className="bold-text text-white text-center m-3 ">Obtén acceso a descuentos exclusivos y premios especiales.</h4>
                                                </div>
                                                <div className="col">
                                                    <div className="card rounded-3 me-2">
                                                        <div className='card-body'>
                                                            aqad
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-sm-5 col-md-3 bg-cuponera-linea d-none d-sm-block">
                                        <div className="m-0 bg-cuponera d-flex align-items-center justify-content-center">
                                            <div className="row ali">
                                                <div className="col">
                                                    <img src={numero_grupo} alt="Logo" height="370px" className='ms-3 me-3 text-center'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-8 bg-cuponera-linea">
                                <div className="row bg-cuponera">
                                    <div className="col-12 mt-auto mb-auto ">
                                        <div className="row">
                                            <div className="col-12">
                                                <h4>¡Regístrate y comienza a llenar tu cuponera!"</h4>
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
