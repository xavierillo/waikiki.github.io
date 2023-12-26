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
        <div className="container-fluid text-center bg-white">
            <div className="row">
                <div className="col-12 pt-5">
                    <div className='row align-items-center'>
                        <div className="col-12 col-sm-4 text-end">
                            <img src={decoracion_lineal_1} alt="Logo" className="responsive-height" height="200"/>
                        </div>
                        <div className="col-12 col-sm-4">
                        <h3 className="card-title bold-text color-waikiki-5 mt-auto mb-auto">Realiza regalos personalizados para cada ocación</h3>
                        </div>
                        <div className="col-12 col-sm-4 text-start">
                            <img src={decoracion_lineal_2} alt="Logo" className="responsive-height" height="200"/>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='row align-items-center'>
                    <div className="col col-lg-4 d-flex align-items-end flex-column">
                        <div className="card mt-auto me-auto ms-auto border-0 rounded rounded-5 rounded-bottom-0" style={{height: "28rem"}}>
                            <div className="card-body">
                                <img src={parejas} alt="Logo"  height="250"/>
                                <h3 className='pt-3 color-waikiki-1'>Para parejas</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 d-flex align-items-end flex-column">
                        <div className="card mt-auto me-auto ms-auto border-0 rounded rounded-5 rounded-bottom-0" style={{height: "28rem"}}>
                            <div className="card-body text-center">
                                <img src={cumpleaños} alt="Logo"  height="250"/>
                                <h3 className='pt-3 color-waikiki-1'>Para cumpleaños</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 d-flex align-items-end flex-column">
                        <div className="card mt-auto me-auto ms-auto border-0 rounded rounded-5 rounded-bottom-0" style={{height: "28rem"}}>
                            <div className="card-body">
                                <img src={bebe} alt="Logo"  height="250"/>
                                <h3 className='pt-3 color-waikiki-1'>Para recién nacidos</h3>
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
