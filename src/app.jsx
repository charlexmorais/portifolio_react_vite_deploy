import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MinhaImagem from "./assets/cx.jpg";
import portfolio from "./assets/portfolio.jpg";
import email from "./assets/email.jpg";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import imgreact from "./assets/react.png";
import imgjavascript from "./assets/javascript.png";
import imgcss from "./assets/css.png";
import imghtml from "./assets/html.png";
import imgtypescript from "./assets/typescript.png";
import imgnode from "./assets/node.js.png";
import imgpostgresql from "./assets/postgresql.png";
import imgcurriculo from "./assets/curriculo.png";
import imgwhatsapp from "./assets/whatsapp.png";
import "./css/Navbar.css";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="content">
          <div className="perfil-photo">
            <img
              src={MinhaImagem}
              alt="img-perfil"
              className="minha-imagem"
            />
          </div>

          <h1>Olá! Muito prazer, sou Charle Xavier!</h1>
          <h2>Sou desenvolvedor full stack</h2>

          <div className="img-icones">
            {/* <a href="mailto:charlexavier100@gmail.com" className="nav-link">
              <img
                src={portfolio}
                alt="icone-portfolio"
                className="meu-portfolio"
                title="portfolio"
                style={{ marginRight: "10px" }}
              />
            </a> */}

            <a href="mailto:charlexavier100@gmail.com" className="nav-link">
              <img
                src={email}
                alt="icone-email"
                className="meu-email"
                title="email"
                style={{ marginRight: "10px" }}
              />
            </a>

            <a href="https://github.com/charlexmorais" className="nav-link">
              <img
                src={github}
                alt="icone-github"
                className="Meu-github"
                title="github"
                style={{ marginRight: "10px" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/charlemorais-developer-full-stack/"
              className="nav-link"
            >
              <img
                src={linkedin}
                alt="icone-linkedin"
                className="meu-linkedin"
                title="linkedin"
              />
            </a>
            <a
              href="https://github.com/charlexmorais/meu_curriculo/blob/main/CharleXavier%20de%20Morais.curriculo%20pg.2024.pdf"
              className="nav-link"
            >
              <img
                src={imgcurriculo}
                alt="icone-curriculo"
                className="img-curriculo"
                title="curriculo"
                style={{ marginRight: "10px" }}
              />
            </a>
            <a href="https://wa.me/5534996880027" className="nav-link">
              <img
                src={imgwhatsapp}
                alt="icone-whatsapp"
                className="img-whatsapp"
                title="whatszap"
                style={{ marginRight: "10px" }}
              />
            </a>
          </div>

          <h3>Experiência com:</h3>
          <div className="img-icones">
            <a href="https://vitejs.dev/guide/" className="nav-link">
              <img
                src={imgreact}
                alt="icone-react"
                className="react"
                title="react"
                style={{ marginRight: "10px" }}
              />
            </a>
            <a href="https://devdocs.io/javascript/" className="nav-link">
              <img
                src={imgjavascript}
                alt="icone-javascript"
                className="img-js"
                title="javascript"
                style={{ marginRight: "10px" }}
              />
            </a>
            <a href="https://devdocs.io/css/" className="nav-link">
              <img
                src={imgcss}
                alt="icone-css"
                className="img-css"
                title="css"
                style={{ marginRight: "10px" }}
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
              className="nav-link"
            >
              <img
                src={imghtml}
                alt="icone-html"
                className="img-html"
                title="html"
                style={{ marginRight: "10px" }}
              />
            </a>
            <a
              href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
              className="nav-link"
            >
              <img
                src={imgtypescript}
                alt="icone-typescript"
                className="img-type"
                title="typescript"
                style={{ marginRight: "10px" }}
              />
            </a>
            <a href="https://nodejs.org/docs/latest/api/" className="nav-link">
              <img
                src={imgnode}
                alt="icone-nodejs"
                className="img-node"
                title="nodejs"
                style={{ marginRight: "10px" }}
              />
            </a>
            <a href="https://www.postgresql.org/docs/" className="nav-link">
              <img
                src={imgpostgresql}
                alt="icone-postgresql"
                className="img-postgre"
                title="postgresql"
                style={{ marginRight: "10px" }}
              />
            </a>
          </div>
        </header>

        <footer>
          <p>Desenvolvido por Charle Xavier</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
