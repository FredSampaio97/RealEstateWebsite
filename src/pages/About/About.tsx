import React from 'react'
import './About.css'
import aboutMainImg from '../../assets/MainQuemSomos.jpg'
import {textoQuemSomos} from '../../assets/pagesContent'

const About: React.FC = () => {
  return (
    <main className="container-fluid">
      {/* ================ QUEM SOMOS ================ */}

      <div className="row mt-5 g-0">
        <div className="col">
          <div className="brake mx-auto"></div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center d-flex flex-column align-items-center">
          <h1 className="titulo">Quem somos</h1>
        </div>
      </div>

      <div className="row mx-auto d-flex d-sm-block mainQuemSomos mt-4 g-0">
        <div className="col-12">
          <div className="clearfix d-flex flex-column align-items-center d-md-block">
            <img
              src={aboutMainImg}
              className="col-12 col-md-4 text-center float-md-start mb-3 me-md-3"
              width="350"
              height="524"
              alt=""
            />
            <p>{textoQuemSomos.p1}</p>
            <p>{textoQuemSomos.p2}</p>
            <p className="d-none d-md-block">{textoQuemSomos.p3}</p>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-12 d-flex justify-content-center mb-3 mb-sm-5 mt-sm-4"></div>
      </div>
    </main>
  )
}

export default About