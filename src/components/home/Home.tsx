import { useEffect } from 'react';
import { Element, Events, scrollSpy } from 'react-scroll';
import Header from './Header';
import CardContactUs from './CardContactUs';
import CardMakePersonalized from './CardMakePersonalized';
import CardMessage1 from './CardMessage1';
import CardCustomDyeing from './CardCustomDyeing';
import CardCustomDyeingMessage1 from './CardCustomDyeingMessage1';
import CardAdhesiveService from './CardAdhesiveService';
import CardCouponBookService from './CardCouponBookService';
import wikiki_min from '../../assets/img/waikiki-logo-mini.png';

function App() {

  useEffect(() => {
      Events.scrollEvent.register('begin', function () {
          // eslint-disable-next-line prefer-rest-params
          console.log("begin", arguments);
      });

      Events.scrollEvent.register('end', function () {
          // eslint-disable-next-line prefer-rest-params
          console.log("end", arguments);
      });

      scrollSpy.update();

      return () => {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
      };
  }, []);

  return (
    <>
      <Header type_header={0}/>
      <Element name="servicioEstampados" >
        <CardContactUs />
        <CardMakePersonalized />
        <CardMessage1 />
      </Element>
      <Element name="servicioTenido">
        <CardCustomDyeing />
        <CardCustomDyeingMessage1 />
      </Element>
      <Element name="ServicioAdhesivo">
        <CardAdhesiveService />
      </Element>
      <Element name="ServicioCuponera">
        <CardCouponBookService />
      </Element>
      <div className="container-fuild ps-5 pe-5 bg-waikiki-5">
        <footer className="d-flex flex-wrap justify-content-between align-items-center mt-0 mb-0 py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <img src={wikiki_min} alt="Logo" width={40}/>
            </a>
            <span className="mb-3 mb-md-0 text-white">© 2023 Waikiki, Ideas que Fluyen</span>
          </div>

          <div className="col-md-4 d-flex align-items-center">
            <small className="mb-3 mb-md-0 text-white">by © 2023 Javier ahumada</small>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
                <a className="text-white" target="_blank" href="https://www.instagram.com/waikiki.iqf?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                  <i className="fa-brands fa-instagram"></i>
                </a>
            </li>
            <li className="ms-3">
              <a className="text-white" href="https://wa.me/c/56958878257" rel="noopener noreferrer" target="_blank">
                <i className="fa-brands fa-whatsapp" ></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default App