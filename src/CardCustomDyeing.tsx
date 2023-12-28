import * as React from 'react';
/* import decoracion_lineal_1 from './assets/img/decoracion_lineal_1.svg';
import decoracion_lineal_2 from './assets/img/decoracion_lineal_2.svg';
import parejas from './assets/img/pareja.png';
import cumpleaños from './assets/img/cumpleaneaos.png';
import bebe from './assets/img/bebe.png';
 */

import disenioStart from './assets/img/disenio-0-start.png';
import disenioEnd from './assets/img/disenio-0-end.png';
import poleronTenido from './assets/img/poleron-tenido.png';
import decoracionStart from './assets/img/decoracion-01-start.png';
import decoracionEnd from './assets/img/decoracion-01-end.png';


export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
        <div className="container-fluid bg-waikiki-fondo-1 pb-5">
            <div className='row'>
                <div className="col-1 p-2 d-none d-md-block">
                    <img src={disenioStart} alt="Logo"/>
                </div>
                <div className="col-10 pt-5 pb-5 ms-auto me-auto">
                    <div className='row align-items-start'>
                        <div className='col-12'>
                            <h1 className="bold-text color-waikiki-5 text-center">Revive Tus Prendas con Teñidos Personalizados</h1>
                        </div>
                        <div className='col-12'>
                            <h4 className="regular-light-300 color-waikiki-5 ms-auto me-auto mt-3 mb-4 text-center" style={{maxWidth: '500px'}}>
                                Dale una segunda vida a tus prendas favoritas con estilo y sostenibilidad.
                            </h4>
                        </div>
                        <div className='col-12'>
                            <div className="row pt-5">
                                <div className="col-12 col-lg-6">
                                    <div className="card bg-waikiki-card-customDyeing border-0 rounded-5">
                                        <div className='card-body'>
                                            <div className="row">
                                                <div className="col-12 text-end">
                                                    <img src={decoracionEnd} alt="Logo"/>
                                                </div>
                                                <div className="col-12 ps-5 pe-5">
                                                    <h5 className='fw-medium color-waikiki-5'>¿Por qué teñir tus prendas?</h5>
                                                    <h4 className='ms-5 me-5 mt-3 fw-light'>Teñir tus prendas extiende su vida útil y reduce el desperdicio, transformando lo viejo en algo vibrante y actual. Es un acto creativo y sostenible que realza tu estilo personal mientras cuida el medio ambiente.</h4>
                                                </div>
                                                <div className="col-12 text-start">
                                                    <img src={decoracionStart} alt="Logo"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 d-none d-lg-block">
                                    <img src={poleronTenido} alt="Logo" width={'100%'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1 p-2 d-none d-md-block">
                    <img src={disenioEnd} alt="Logo"/>
                </div>
            </div>
        </div>
    );
  }
}
