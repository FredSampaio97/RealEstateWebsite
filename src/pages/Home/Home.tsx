import React from 'react'
import './Home.css'
import {destaques} from '../../assets/pagesContent'
import {textoQuemSomos} from '../../assets/pagesContent'

const Home: React.FC = () => {
  return (
    <main className="container-fluid">
    {/* ================ BEM VINDO ================ */}
    <div className="row mt-5 g-0">
      <div className="col">
        <div className="brake mx-auto"></div>
      </div>
    </div>

    <div className="row mt-5">
      <div className="col text-center d-flex flex-column align-items-center" id="">
        <h1 className="titulo">Bem-Vindo à</h1>
        <h1 className="titulo">Cooperativa Contruções António Martins Sampaio</h1>
      </div>
    </div>

    <div className="row g-0">
      <div className="col-9 mx-auto mt-2 mt-sm-5" id="text">
        <p>{textoQuemSomos.p1}</p>
      </div>
    </div>

    <div className="row g-0">
      <div className="col-12 d-flex justify-content-center mb-3 mb-sm-5 mt-sm-4">
        <a href="/about">
          <button type="button" className="btn btn-outline-secondary mt-3 btn-md" id="button1">
            Ver Mais
          </button>
        </a>
      </div>
    </div>

    <div className="row mt-5 g-0">
      <div className="col">
        <div className="brake mx-auto"></div>
      </div>
    </div>

    {/* ================= DESTAQUES ================= */}
    <div className="row g-0 d-flex flex-column align-items-center">
      <div className="col d-flex flex-column align-items-center">
        <h1 className="text-center mt-4" id="tituloDestaques">Destaques</h1>
      </div>
      <div className="col d-flex justify-content-center flex-wrap row-gap-5 column-gap-4 mt-4 mb-4" id="cards">
        {/* =============== CARDS =============== */}
        {destaques.slice(0, 6).map((d, index) => (
          <div key={index} className="card cardhome" style={{ width: '20rem' }}>
            <img src={d.img} className="card-img-top cardImg" alt="..." />
            <div className="card-body">
              <h2 className="card-title">{d.title}</h2>
              <p className="card-text">
                {d.cardText}
              </p>
              <div className="d-flex position-absolute top-100 start-50 translate-middle justify-content-center">
                <a href={`/project?id=${d.id}`}>
                  <button type="button" className="btn btn-outline-secondary mt-3 btn-md" id="button2">
                    Ver Mais
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
  )
}

export default Home