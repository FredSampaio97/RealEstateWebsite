import React, { useEffect, useState } from 'react';
import './Spotlight.css'
import { useLocation } from 'react-router-dom';
import { empreendimentos } from '../../assets/pagesContent';

const Spotlight: React.FC = () => {
  const [empreendimento, setEmpreendimento] = useState<typeof empreendimentos[0] | null>(null);
  const query = new URLSearchParams(useLocation().search); /* useLocation().search = "?id=1" for example it could be "?id=3" or "?name=fred", so the location hook provides the URL location "/spotlight" in this case, and the search provides the query string "?id=x". The URLSearchParams lets us access query params, so if the query is "?id=1" we can fetch the value of the id by doing "query.get(id)" and it will return "1" as a string */
  const id = parseInt(query.get('id') || '1'); /* if id has a value then make it an interger and id=value, if not then id=1 */

  console.log('Current ID:', id);

  useEffect(() => {
    // Simulate fetching data or processing
    const selectedEmpreendimento = empreendimentos.find(item => item.id === id);
    if (selectedEmpreendimento) {
      setEmpreendimento(selectedEmpreendimento);
    }
  }, [id]);

  return (
    <main className="container-fluid d-flex flex-column align-items-center">
      <div className="row mt-5 g-0">
        <div className="col">
          <div className="brake mx-auto"></div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center" id="">
          <h1 className="titulo">Empreendimentos</h1>
          <h2 className="subtitulo">{empreendimento?.name}</h2>
        </div>
      </div>

      <div className="row mainEmpreend mt-4 g-0">
        <div className="col-12 text-start">
          <div className="row g-0">
            <div className="col-12">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta.</p>
              <p>Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis possimus iure maxime rem eum, omnis doloremque maiores suscipit, ullam adipisci cumque labore dicta.</p>
            </div>
          </div>

          <div className="row imgEmpreend mt-5 g-0">
            <div className="col-12 d-flex flex-wrap gap-4 justify-content-center">
              <img src={empreendimento?.img1} alt="" />
              <img src={empreendimento?.img2} alt="" />
              <img src={empreendimento?.img3} alt="" />
              <img src={empreendimento?.img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Spotlight