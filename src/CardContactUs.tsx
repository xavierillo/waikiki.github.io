import * as React from 'react';
import Polerones from './assets/img/poleron.png';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
        <div className="container-fluid text-center bg-waikiki">
            <div className="row">
                <div className="col-12 col-md-6 d-none d-md-block mt-auto mb-auto">
                    <img src={Polerones} alt="Logo"  height="100%"  style={{maxHeight: "30rem"}} />
                </div>
                <div className="col-12 col-md-6 d-flex align-items-end flex-column p-5 pb-0">
                    <div className="card mt-auto me-auto ms-auto border-0 rounded rounded-5 rounded-bottom-0 bg-waikiki-fondo-1" style={{maxWidth: "32rem", minHeight: "20rem"}}>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-12'>
                                    <h1 className="card-title bold-text pt-5 color-waikiki-6">Exprésate<p className='mb-0'>con</p>Estilo</h1>
                                    <h3 className="card-text regular-light-400 color-waikiki-6 mb-0">Tu estilo, nuestro arte.</h3>
                                    <h3 className="card-text regular-light-400 color-waikiki-6 mb-0">Haz clic y descubre.</h3>
                                </div>
                                <div className='col-12'>
                                    <a href="https://wa.me/c/56958878257" rel="noopener noreferrer" target="_blank" className="btn btn-waikiki-5 mt-5 mb-5 p-3 rounded-5 regular-light-400">
                                        <span className='fs-5'>Contactanos aqui</span>
                                        <i className="fa-brands fa-whatsapp fs-3 mb-0 ms-2 me-2"></i>
                                    </a>
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
