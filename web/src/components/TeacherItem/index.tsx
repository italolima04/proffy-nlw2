import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/51957032?s=460&u=3347eb20cc74e0588e5e74fd0ef04ed1ac99953d&v=4"
          alt="Avatar"
        />
        <div>
          <strong>Ítalo Lima</strong>
          <span>Matemática Aplicada</span>
        </div>
      </header>
      <p>Texto de Teste.</p>
      <footer>
        <p>Preço/hora:</p>
        <strong>R$ 100,00</strong>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp Ícone" />
          Entrar em Contato!!!
        </button>
      </footer>
    </article>
  );
}
