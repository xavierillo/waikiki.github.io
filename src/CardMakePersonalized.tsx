import * as React from 'react';
import decoracion_lineal_1 from './assets/img/decoracion_lineal_1.svg';
import decoracion_lineal_2 from './assets/img/decoracion_lineal_2.svg';
import parejas from './assets/img/pareja.png';
import cumpleaños from './assets/img/cumpleaneaos.png';
import bebe from './assets/img/bebe.png';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
        <div className="container-fluid text-center bg-waikiki-fondo-1 pb-5">
            <div className="row g-0">
                <div className="col-12 pt-5 pb-5">
                    <div className='row g-0 align-items-center'>
                        <div className="col-12 col-sm-3 text-end">
                            <img src={decoracion_lineal_1} alt="Logo"  height="40"/>
                        </div>
                        <div className="col-12 col-sm-6">
                            <h1 className="bold-text color-waikiki-5 mt-auto mb-auto">Realiza regalos personalizados para cada ocación</h1>
                        </div>
                        <div className="col-12 col-sm-3 text-start">
                            <img src={decoracion_lineal_2} alt="Logo"  height="40"/>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='row align-items-center'>
                    <div className="col col-lg-4 d-flex align-items-end flex-column">
                        <div className="card mt-auto me-auto ms-auto border-0 rounded rounded-5 bg-transparent">
                            <div className="card-body">
                                <img src={parejas} alt="Logo"  height="200"/>
                                <h3 className='pt-3 color-waikiki-1 regular-light-400'>Para parejas</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 d-flex align-items-end flex-column">
                        <div className="card mt-auto me-auto ms-auto border-0 rounded rounded-5 bg-transparent">
                            <div className="card-body text-center">
                                <img src={cumpleaños} alt="Logo"  height="200"/>
                                <h3 className='pt-3 color-waikiki-1 regular-light-400'>Para cumpleaños</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 d-flex align-items-end flex-column">
                        <div className="card mt-auto me-auto ms-auto border-0 rounded rounded-5 bg-transparent">
                            <div className="card-body">
                                <img src={bebe} alt="Logo"  height="200"/>
                                <h3 className='pt-3 color-waikiki-1 regular-light-400'>Para recién nacidos</h3>
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
