import * as React from 'react';
import { NavLink } from "react-router-dom";
import waikiki_sello from '../../assets/img/waikiki_sello-transparente.png';
import separador from '../../assets/img/separador-2.png';
import numero_grupo from '../../assets/img/Grupo_numero.png';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
        <div className="container-fluid bg-white pt-4 pb-4 mt-4 mb-4">
            <div className='row g-0'>
                <div className="col">
                    <div className="container text-center p-0 pb-4 mb-4">
                        <div className='row'>
                            <div className='col-12'>
                                <h2 className="bold-text color-waikiki-5 text-center pt-2 pb-4">"¡Únete y estampa tu mundo con nosotros!"</h2>
                            </div>
                            <div className='col-12'>
                                <div className="row">
                                    <div className="col col-sm bg-cuponera-linea">
                                        <div className="m-0 bg-cuponera pt-4">
                                            <div className="row me-2 ms-2">
                                                <div className="col-12">
                                                    <h3 className="bold-text text-white text-center pb-4">Colecciona nuestro sello waikiki</h3>
                                                </div>
                                                <div className="col-12 col-sm-6 d-none d-md-block">
                                                    <img src={waikiki_sello} alt="Logo"  height="150"  style={{maxHeight: "30rem"}} />
                                                    <h4 className="bold-text text-white text-center m-3 ">Obtén acceso a descuentos exclusivos y premios especiales.</h4>
                                                </div>
                                                <div className="col">
                                                    <div className="card rounded-3 me-2">
                                                        <div className='card-body'>
                                                            <h6 className="regular-text text-secondary text-center">Reguistrate aquí y conoce las base del juego</h6>
                                                            <NavLink to="/Registrar"  className='btn btn-waikiki-5 mt-1 mb-4 p-2 rounded-2 regular-light-400'>Registrarse</NavLink>
                                                            <img src={separador} alt="Logo"  width="100%" />
                                                            <NavLink to="/login"  className='btn btn-waikiki-5 mt-4 mb-1 p-2 rounded-2 regular-light-400'>Inicia sesion</NavLink>
                                                            <h6 className="bold-text text-secondary text-center mb-0 mt-1">Inicia sesion y revisa tu cuponera</h6>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
