import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import UnidadesCurriculares from "./components/unidadesCurriculares/UnidadesCurriculares";
import UnidadeCurricularProvider from "./providers/unidade-curricular-provider";

require('dotenv').config()


const App = () => {
  return (
    <UnidadeCurricularProvider>

      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/unidadesCurriculares" />
          </Route>
          <Route path="/unidadesCurriculares" exact component={UnidadesCurriculares} />
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </UnidadeCurricularProvider>
  );
};

export default App;
