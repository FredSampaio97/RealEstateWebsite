import React, { useState } from 'react';
import './Projects.css'
import {destaques, Destaque} from '../../assets/pagesContent'

const Projects: React.FC = () => {
  
  const PAGE_SIZE = 6;
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(destaques.length / PAGE_SIZE);

  // Get the current page's data
  const paginatedDestaques = destaques.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
    <main className="container-fluid">
      {/* ================ NOTICIAS ================ */}
      <div className="row mt-5 g-0">
        <div className="col">
          <div className="brake mx-auto"></div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center d-flex flex-column align-items-center" id="">
          <h1 className="titulo">Destaques</h1>
        </div>
      </div>

      <div className="row d-flex justify-content-center mt-4 g-0">
        <div className="col-10 sm-col-12 d-flex flex-wrap justify-content-center gap-4">
          {paginatedDestaques.map((d: Destaque) => (
            <div key={d.id} className="card carddestaques mt-4" style={{ width: '20rem' }}>
              <img src={d.img} className="card-img-top cardImgDestaques" alt={d.title} />
              <div className="card-body">
                <h2 className="tituloCardDestaques mx-3">{d.title}</h2>
                <p className="textoCardDestaques mx-3">{d.text.length > 160 ? d.text.substring(0, 160) + '...' : d.text}</p>
                <div className="d-flex position-absolute top-100 start-50 translate-middle justify-content-center">
                  <a href={`/project?id=${d.id}`}><button type="button" className="btn btn-outline-secondary mt-3 btn-md" id="button2">Ver Mais</button></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="row mt-4 g-0">
        <div className="col d-flex justify-content-center mb-5 mt-4 gap-1">
          <button
            className="buttonNoticias"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lt;
          </button>

          {[...Array(totalPages).keys()].map((index) => (
            <button
              key={index}
              className={index + 1 === currentPage ? "activeB" : "buttonNoticias"}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="buttonNoticias"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &gt;
          </button>
        </div>
      </div>
    </main>
  )
}

export default Projects