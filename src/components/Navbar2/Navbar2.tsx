import React from 'react';
import './Navbar2.css';
import logo from '../../assets/logo.png';
import { bannersAll } from '../../assets/banners';
import { empreendimentos } from '../../assets/pagesContent';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // If you are using React Router
import '../../assets/main'


const Navbar: React.FC = () => {
  const location = useLocation(); // Get the current route
  const [currentBanner, setCurrentBanner] = useState<string>('');

  useEffect(() => {
    // Find the corresponding banner based on the current path
    const bannerInfo = bannersAll.find(banner => location.pathname.includes(banner.page));
    if (bannerInfo) {
      setCurrentBanner(bannerInfo.banner); // Set the banner if found
    }
  }, [location.pathname]); // Re-run the effect when the path changes

  const menuMobile = () => {
    // Implement the menu toggle logic here if needed
  };

  return (
    <header>
      {/* ================== NAVBAR ================== */}
      <div className="container-fluid p-0 g-0">
        <div className="row g-0">
          <div className="col d-flex justify-content-center p-0 mt-5">
            <nav className="navbar navH navbar-expand-lg p-0" id="nav-top-mobile">
              <div className="container-fluid d-flex align-items-end p-0">
                <a className="navbar-brand pb-4 pe-4 ps-4 ps-lg-0" href="/">
                  <img src={logo} alt="Logo" width="265" height="50" className="d-inline-block align-text-top" />
                </a>
                <button onClick={menuMobile} className="navbar-toggler mb-3 ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" id="menu-fechado"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" id="menu-aberto" width="16" height="16" fill="currentColor" className="d-none bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-top">
                    <li className="nav-item">
                      <a className="nav-link pb-3" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">Quem Somos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/news">Notícias</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/projects">Destaques</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" id="menu_emp" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Empreendimentos
                      </a>
                      <ul className="dropdown-menu">
                        <div className="drop2">
                          {empreendimentos.map((e, i) => (
                            <React.Fragment key={e.id}>
                              {i > 0 && <li><hr className="dropdown-divider" /></li>}
                              <li><a className="dropdown-item" href={`/spotlight?id=${e.id}`}>{e.name}</a></li>
                            </React.Fragment>
                          ))}
                        </div>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/vacation">Centro de Férias</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contacts">Contactos</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ===================== IMG PRINCIPAL ===================== */}
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-inner">
                {currentBanner && (
                  <img src={currentBanner} className="d-block w-100" alt="Banner" />
                )}
                <div className="shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
