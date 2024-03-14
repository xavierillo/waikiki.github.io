import * as React from 'react';
import logo_min_waikiki from '../../assets/img/logo_min_waikiki.svg';
/* import parejas from './assets/img/pareja.png';
import cumpleaños from './assets/img/cumpleaneaos.png';
import bebe from './assets/img/bebe.png'; */

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
        <div className="container-fluid text-center bg-lineal-waikiki-02 pt-5 ps-5 pe-5">
            <div className="row">
                <div className="col">
                    <div className="card text-start p-3 mt-auto me-auto ms-auto border-0 rounded rounded-5 rounded-bottom-0 bg-waikiki-fondo-1" >
                        <div className="card-body">
                            <h3 className='color-waikiki-6 mb-3'>Nuestros Servicios de Teñido</h3>
                            <p className="fw-light fs-5 mb-3 ms-2"><strong>Teñidos Coloridos y Estilos Únicos</strong>: Ofrecemos teñidos en estilos liso, tie dye o acuarela.</p>
                            <p className="fw-light fs-5 mb-3 ms-2"><strong>Diversidad de Tonalidades</strong>: Una amplia gama de colores vivos para elegir.</p>
                            <p className="fw-light fs-5 mb-3 ms-2"><strong>Estampados Personalizados</strong>: Para aquellos que buscan algo verdaderamente único.</p>
                        </div>
                    </div>
                </div>
                <div className='col-4 mt-auto mb-auto d-none d-sm-block'>
                    <img src={logo_min_waikiki} alt="Logo" height={'100%'} style={{maxHeight: '220px'}}/>
                </div>
            </div>
      </div>
    );
  }
}
