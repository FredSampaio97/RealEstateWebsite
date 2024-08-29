import React from 'react'
import '../../pages/About/About.css'
import '../../pages/Spotlight/Spotlight.css'

// import imgFerias1 from '../../assets/ferias1.jpg'
import imgFerias2 from '../../assets/ferias2.jpg'
import imgFerias3 from '../../assets/ferias3.jpg'
import imgFerias4 from '../../assets/ferias4.jpg'
import imgFerias5 from '../../assets/ferias5.jpg'
import imgFerias6 from '../../assets/ferias6.jpg'

const Vacation: React.FC = () => {
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
          <h1 className="titulo">Centro de Férias</h1>
        </div>
      </div>

      <div className="row mx-auto d-flex d-sm-block mainQuemSomos mt-4 g-0">
        <div className="col-12">
          <div className="clearfix d-flex flex-column align-items-center d-md-block">
            <img
              src={imgFerias3}
              className="col-12 col-md-4 text-center float-md-start mb-3 me-md-3"
              width="350"
              height="524"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nulla totam aut labore quas dolorem! Exercitationem, eum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?
            </p>
            <p className="d-none d-md-block">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptas facilis quam odit. Necessitatibus quo adipisci, optio quibusdam tempore sequi cumque omnis accusamus quidem porro voluptate quis ad unde magnam ipsa impedit error! Fuga officia modi ducimus perspiciatis, animi officiis? Aspernatur illo atque dolores cum reprehenderit ex soluta, alias aut consequuntur error autem odio tempore assumenda quidem corrupti quas corporis facere sunt voluptas eaque maiores blanditiis eos asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, perferendis hic rem officiis amet quia?
            </p>
          </div>
        </div>
      </div>

      <div className="row mx-auto mainEmpreend g-0">
        <div className="col-12 text-start">
          <div className="row imgEmpreend mt-4 mb-4 g-0">
            <div className="col-12 d-flex flex-wrap gap-4 justify-content-center gap-3">
              <img src={imgFerias6} alt="" />
              <img src={imgFerias5} alt="" />
              <img src={imgFerias4} alt="" />
              <img src={imgFerias2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Vacation