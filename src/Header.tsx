// Header.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoEmpresa from './assets/img/waikiki_min.svg';

const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
            <div className="container-fluid">
                {/* Logo de la empresa */}
                <a className="navbar-brand" href="#">
                    <img src={logoEmpresa} alt="Logo"  height="60" />
                </a>

                {/* Botón para menú en dispositivos móviles */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Enlaces de navegación */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav navbar-waikiki ms-auto me-auto">
                        <a className="nav-item nav-link active" href="#inicio">Inicio</a>
                        <a className="nav-item nav-link" href="#servicios">Servicios</a>
                        <a className="nav-item nav-link" href="#contacto">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
