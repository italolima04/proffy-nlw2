import React from "react";

import PageHeader from "../../components/PageHeader";

import "./styles.css";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes Proffys estão Disponíveis. ">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia" />
          <Input type="time" name="time" label="hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}
