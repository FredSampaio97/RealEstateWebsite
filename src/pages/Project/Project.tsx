import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {destaques} from '../../assets/pagesContent';


const Project: React.FC = () => {
    const [destaque, setDestaque] = useState<typeof destaques[0] | null>(null);
    const query = new URLSearchParams(useLocation().search);
    const id = parseInt(query.get('id') || '1');

    console.log('Current ID:', id);
  
    useEffect(() => {
        // Simulate fetching data or processing
        const selectedDestaque = destaques.find(item => item.id === id);
        if (selectedDestaque) {
            console.log('Effect running, current ID:', id);
          setDestaque(selectedDestaque);
        }
      }, [id]);
  
  
    return (
    <main className="container-fluid">
      <div className="row mt-5 g-0">
        <div className="col">
          <div className="brake mx-auto"></div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center d-flex flex-column align-items-center">
          <h1 className="titulo">Destaques</h1>
          <h2 className="subtitulo">{destaque?.title}</h2>
        </div>
      </div>

      <div className="row mx-auto d-flex d-sm-block mainQuemSomos mt-4 g-0">
        <div className="col-12">
          <div className="clearfix d-flex flex-column align-items-center d-md-block">
            <p>
            {destaque?.text}
            </p>
            <div className="row g-0">
              <div className="col-12 d-flex justify-content-end mb-3 mb-sm-5 mt-sm-4">
                <a href="/">
                  <button type="button" className="btn btn-outline-secondary mt-3 btn-md" id="button3">
                    Voltar para destaques
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Project