import React from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import Textarea from "../../components/TextArea";

export default function TeatcherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de descrição."
      />

      <main>
        <fieldset>
          <legend> Seus Dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend> Sobre a Aula </legend>
          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo de Hora/Aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Atenção! <br />
            Preencha todos os dados.
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}
