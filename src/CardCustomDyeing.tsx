import * as React from 'react';
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
        <div className="container-fluid bg-waikiki-fondo-1 p-2">
            <div className='row g-0'>
                <div className="col-auto d-none d-md-block">
                    <img src={disenioStart} alt="Logo"/>
                </div>
                <div className="col">
                    <div className='row p-4'>
                        <div className='col-12'>
                            <h1 className="bold-text color-waikiki-5 text-center">Revive Tus Prendas con Teñidos Personalizados</h1>
                            <h3 className="regular-light-400 color-waikiki-5 text-center m-4 pb-5">
                                Dale una segunda vida a tus prendas favoritas con estilo y sostenibilidad.
                            </h3>
                        </div>
                        <div className='col-12'>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-12 col-lg-6 mt-auto">
                                        <div className="card bg-waikiki-card-customDyeing border-0 rounded-5">
                                            <div className='card-body'>
                                                <div className="row">
                                                    <div className="col-12 text-end">
                                                        <img src={decoracionEnd} alt="Logo" width={70}/>
                                                    </div>
                                                    <div className="col-12 ps-5 pe-5 text-start">
                                                        <h1 className='fw-medium color-waikiki-5 mb-3'>¿Por qué teñir tus prendas?</h1>
                                                        <p className='fs-5 text-white'>Teñir tus prendas extiende su vida útil y reduce el desperdicio, transformando lo viejo en algo vibrante y actual. Es un acto creativo y sostenible que realza tu estilo personal mientras cuida el medio ambiente.</p>
                                                    </div>
                                                    <div className="col-12 text-start">
                                                        <img src={decoracionStart} alt="Logo" width={70}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 ms-auto me-auto d-none d-lg-block">
                                        <img src={poleronTenido} alt="Logo"  width={400}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-auto d-none d-md-block">
                    <img src={disenioEnd} alt="Logo"/>
                </div>
            </div>
        </div>
    );
  }
}
