import * as React from 'react';
import decoracion_lineal_1 from './assets/img/corona_blanca_start.svg';
import decoracion_lineal_2 from './assets/img/corona_blanca_end.svg';
/* import parejas from './assets/img/pareja.png';
import cumpleaños from './assets/img/cumpleaneaos.png';
import bebe from './assets/img/bebe.png'; */

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
        <div className="container-fluid text-center bg-radial-waikiki pt-5 pb-5">
            <div className="row">
                <div className="col-12 pt-5 pb-5">
                    <div className='row align-items-center'>
                        <div className="col-12 col-sm-4 text-end">
                            <img src={decoracion_lineal_1} alt="Logo"  height="300"/>
                        </div>
                        <div className="col-12 col-sm-4">
                            <h3 className="card-title bold-text text-white mt-auto mb-auto">Tu imaginación, nuestros estampados; juntos, creamos magia.</h3>
                        </div>
                        <div className="col-12 col-sm-4 text-start">
                            <img src={decoracion_lineal_2} alt="Logo"  height="300"/>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}
