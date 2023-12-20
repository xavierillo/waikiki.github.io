import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Header from './Header';
import Polerones from './assets/img/muchosPoleronesSinFondo.png';

function App() {
 
  return (
    <>
      <Header />
      <div className="container-fluid text-center bg-black">
        <div className="row">
          <div className="col">
            <img src={Polerones} alt="Logo"  height="534" />
          </div>
          <div className="col d-flex align-items-end flex-column">
            <div className="card mt-auto me-auto ms-auto" style={{width: "10rem"}}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
