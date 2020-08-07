import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import api from "../../services/api";

import "./styles.css";

export default function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Logomarca Proffy" />
          <h2>Sua Plataforma de Estudos Online.</h2>
        </div>

        <img src={landingImg} alt="Landing da Pagina" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          <p>
            Total de {totalConnections} Conexões Já Feitas!
            <img src={purpleHeartIcon} alt="Coração Roxo" />
          </p>
        </span>
      </div>
    </div>
  );
}
