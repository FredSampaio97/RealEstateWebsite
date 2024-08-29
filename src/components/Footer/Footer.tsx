import React from 'react';
import './Footer.css';
import imgTel from "../../assets/tel.svg"
import imgEmail from "../../assets/mail.svg"
import imgAdress from "../../assets/loc.svg"
import imgFacebook from "../../assets/facebook.svg"
import { contactInfo } from '../../assets/pagesContent';
import { useLocation } from 'react-router-dom'; // If you are using React Router


interface FooterProps {
  currentPage: string;
}
// const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const API_KEY = "AIzaSyDHaBGVfFyYjNxngoh_RsjxVRegY-lYGpU"

const Footer: React.FC<FooterProps> = () => {
  
  const location = useLocation();
  const currentPage = location.pathname;
  const isProject = () => currentPage === '/project';

  const destaquesHref = isProject() ? '/project' : '/projects';

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/about' },
    { name: 'Notícias', href: '/news' },
    { name: 'Destaques', href: destaquesHref },
    { name: 'Empreendimentos', href: '/spotlight' },
    { name: 'Centro de Férias', href: '/vacation' },
    { name: 'Contactos', href: '/contacts' },
  ];

  const isActive = (menuItem: string) => currentPage === menuItem; // If current page = page name activate class Active
  const isContact = () => currentPage === "/contacts";

  return (
    <footer className="container-fluid mt-5 p-0">
      {/* Conditionally render this section */}
      {!isContact() && (
        <>
          {/* ========== CONTACTOS ========== */}
          <div className="bgImg">
            <div className="bgColor">
              <div className="row g-0">
                <div className="col-12 mt-5 mt-sm-2 text-center">
                  <div className="brake mx-auto mt-0 mt-sm-5" id="brake"></div>
                  <h1 className="mt-4 footerTitulo">Contactos</h1>
                </div>
              </div>
              <div className="row contactosColuna g-0 mt-0 mt-sm-0 mt-md-5">
                <div className="col-12 col-md-3 mt-0 mt-sm-2 mt-md-5 text-center">
                  <a href="tel:+123456789"><img className="icons" src={imgTel} alt="" width="75" height="75" /></a>
                  <p>{contactInfo.telefone}</p>
                </div>
                <div className="col-12 col-md-3 mt-0 mb-3 mt-md-5 text-center">
                  <a href="https://goo.gl/maps/example"><img className="icons" src={imgAdress} alt="" width="75" height="75" /></a>
                  <p className="mb-0">{contactInfo.morada}</p>
                </div>
                <div className="col-12 col-md-3 mt-0 mt-md-5 text-center">
                  <a href="mailto:example@example.com"><img className="icons" src={imgEmail} alt="" width="75" height="75" /></a>
                  <p>{contactInfo.email}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ========== MAPA ========== */}
      <div className="row g-0">
        <div className="col mt-4">
          <div style={{ maxWidth: '100%', overflow: 'hidden', width: '100%', height: '500px' }}>
            <iframe
              style={{ height: '100%', width: '100%', border: 0 }}
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?q=Porto,+Portugal&key=${API_KEY}`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* ========== REDES ========== */}
      <div className="row g-0 navFooter mt-4">
        <div className="col bgColorNav">
          <div className="row g-0 d-flex flex-column">
            <div className="col p-0 mt-2">
              <div className="text-center mt-5 facebook">
                <a href="https://www.facebook.com"><img className="icons" src={imgFacebook} alt="" width="80px" height="80px" /></a>
              </div>
              <p className="text-center mt-4">Siga-nos no Facebook</p>
              <div className="line mt-5"></div>
            </div>
          </div>
          <div className="row d-none d-lg-block g-0 me-5 d-flex justify-content-center mt-5">
            <div className="col-9 me-5 mt-2 text-end">
              <nav>
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={isActive(item.href) ? 'active' : ''}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-12 mx-auto mx-lg-0 col-md-6 d-flex justify-content-end copy">
              <div className="text-center me-lg-5">
                Copyright &copy; {new Date().getFullYear()} Grupo MediaMaster. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
