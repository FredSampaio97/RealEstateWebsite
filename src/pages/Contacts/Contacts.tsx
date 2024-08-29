import React from 'react'
import './Contacts.css'
import recaptcha from '../../assets/recaptcha.png'
import {contactInfo} from '../../assets/pagesContent'

const Contacts: React.FC = () => {
  return (
    <main className="container-fluid">
      {/* ================ CONTACTOS ================ */}
      
      <div className="row mt-5 g-0">
        <div className="col">
          <div className="brake mx-auto"></div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center d-flex flex-column align-items-center">
          <h1 className="titulo">Contactos</h1>
        </div>
      </div>

      <div className="row d-flex flex-wrap mt-5 gap-3">
        <div className="col-lg-5 d-flex flex-column align-items-center">
          <p className="subtituloContactos m-0">Morada</p>
          <p className="subtituloContactos m-0">{contactInfo.morada}</p>
          <p className="subtituloContactos">{contactInfo.codigoPostal}</p>
          <br />
          <p className="subtituloContactos m-0">Telefone</p>
          <p className="infoContactos">{contactInfo.telefone}</p>
          <br />
          <p className="subtituloContactos m-0">Fax</p>
          <p className="infoContactos">{contactInfo.telefone}</p>
          <br />
          <p className="subtituloContactos m-0">E-Mail</p>
          <p className="infoContactos">{contactInfo.email}</p>
        </div>
        <div className="col">
          <form className="d-flex flex-column align-items-center" action="">
            <div>
              <label htmlFor="">*Nome</label>
              <input className="inputContactos" type="text" placeholder="Insira aqui o seu nome" />
              <br />
              <label htmlFor="">*E-Mail</label>
              <input className="inputContactos" type="text" placeholder="Insira aqui o seu e-mail" />
              <br />
              <label htmlFor="">*Telefone</label>
              <input className="inputContactos" type="text" placeholder="Insira aqui o seu telefone" />
              <br />
              <label htmlFor="">*Assunto</label>
              <input className="inputContactos" type="text" placeholder="Insira aqui o assunto" />
              <br />
              <label htmlFor="">*Mensagem</label>
              <textarea
                className="inputContactos"
                id="inputMensagem"
                placeholder="Insira aqui a sua mensagem"
                cols={30}
                rows={10}
              />
              <div className="row mt-3 mb-5 d-flex w-100 g-0">
                <div className="col-8">
                  <p className="obrigatorio">*Campos de preenchimento obrigatório</p>
                  <div>
                    <label id="labelCheckbox">
                      <input type="checkbox" /> Quero receber uma cópia desta mensagem no meu e-mail.
                    </label>
                  </div>
                </div>
                <div className="col-4 recaptcha">
                  <img src={recaptcha} alt="" />
                </div>
              </div>

              <div className="row enviar g-0">
                <div className="col d-flex justify-content-end">
                  <a href="#">
                    <button type="submit" className="btn btn-outline-secondary btn-md" id="button4">Enviar</button>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contacts