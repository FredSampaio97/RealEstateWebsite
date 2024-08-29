import React, { useState } from 'react';
import './News.css'
import {noticias} from '../../assets/pagesContent'


const News: React.FC = () => {
  const PAGE_SIZE = 6;
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(noticias.length / PAGE_SIZE);

  // Get the current page's data
  const paginatedNoticias = noticias.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  
  
  return (
    <main className="container-fluid">

    {/* ================ NOTÍCIAS ================ */}
    
    <div className="row mt-5 g-0">
        <div className="col">
            <div className="brake mx-auto"></div>
        </div>
    </div>

    <div className="row mt-5">
        <div className="col text-center d-flex flex-column align-items-center">
            <h1 className="titulo">Notícias</h1>
        </div>
    </div>

    <div className="row d-flex justify-content-center mt-4 g-0">
        <div className="col-10 sm-col-12 d-flex flex-wrap justify-content-center gap-4">
            {paginatedNoticias.map((n) => (
                <div key={n.id} className="cardNoticias">
                    <div className="imgCard">
                        <img src={n.img} alt={n.title} />
                    </div>
                    <h2 className="p-3">{n.title}</h2>
                    <p className="px-3">{n.text.length > 160 ? n.text.substring(0, 400) + '...' : n.text}</p>
                </div>
            ))}
        </div>
    </div>

    <div className="row mt-4 g-0">
        <div className="col d-flex justify-content-center mb-5 mt-3 gap-1">
            <div>
                <button
                    className="buttonNoticias"
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    {'<'}
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
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    {'>'}
                </button>
            </div>
        </div>
    </div>
</main>
  )
}

export default News