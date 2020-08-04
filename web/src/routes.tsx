import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/study" component={TeacherList} />
        <Route exact path="/give-classes" component={TeacherForm} />
      </Switch>
    </BrowserRouter>
  );
}
