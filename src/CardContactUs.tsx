import * as React from 'react';
import Polerones from './assets/img/muchosPoleronesSinFondo.png';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
        <div className="container-fluid text-center bg-waikiki">
            <div className="row">
                <div className="col">
                    <img src={Polerones} alt="Logo"  height="534" />
                </div>
                <div className="col col-lg-6 d-flex align-items-end flex-column">
                    <div className="card mt-auto me-auto ms-auto border-0 rounded rounded-5 rounded-bottom-0" style={{width: "32rem", height: "28rem"}}>
                    <div className="card-body">
                        <h1 className="card-title bold-text pt-5 color-waikiki-6">Exprésate<p className='mb-0'>con</p>Estilo</h1>
                        <h3 className="card-text regular-light-400 color-waikiki-6 mb-0">Tu estilo, nuestro arte.</h3>
                        <h3 className="card-text regular-light-400 color-waikiki-6 mb-0">Haz clic y descubre.</h3>
                        <a href="#" className="btn btn-waikiki-5 mt-5 mb-5 p-3 rounded-5 regular-light-400" style={{minWidth: '20rem'}}>
                            <span className='fs-5'>Contactanos aqui</span>
                            <i className="fa-brands fa-whatsapp fs-3 mb-0 ms-2 me-2"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}
