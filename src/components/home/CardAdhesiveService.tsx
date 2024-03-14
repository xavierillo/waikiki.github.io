import * as React from 'react';
import waikikiAdhesivos from '../../assets/img/waikiki-adhesivos.png';
import disenio_1 from '../../assets/img/disenio-1-start.png';
import promocion from '../../assets/img/promocion.png';


export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
        <div className="container-fluid bg-waikiki-fondo-1 p-2">
            <div className='row g-0'>
                <div className="col-auto d-none d-md-block mt-auto mb-auto">
                    <img src={disenio_1} alt="Logo"/>
                </div>
                <div className="col">
                    <div className="container text-center p-4">
                        <div className='row'>
                            <div className='col-12'>
                                <h1 className="bold-text color-waikiki-5 text-center">Adhesivos en Vinilo</h1>
                                <h1 className="bold-text color-waikiki-5 text-center pb-5">Personalizados para Cada Necesidad</h1>
                            </div>
                            <div className="col-12 col-sm-6 mt-auto mb-auto pb-4">
                                <img src={waikikiAdhesivos} alt="Logo" width={250}/>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <div className="card bg-waikiki-5 border-0 rounded-5">
                                    <div className='card-body p-4'>
                                        <p className='fs-5 fst-italic text-white'>Nuestros adhesivos en vinilo son perfectos para una amplia gama de aplicaciones, desde personalizar pequeños objetos hasta crear grandes declaraciones visuales. Aquí están las especificaciones detalladas para ayudarte a elegir el tamaño perfecto para tu proyecto.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 pt-4">
                                <img src={promocion} alt="Logo" width={'100%'} style={{maxWidth: '800px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-auto d-none d-md-block">
                </div>
            </div>
        </div>
    );
  }
}
