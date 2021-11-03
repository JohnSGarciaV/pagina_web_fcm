
import './App.css';
import Layout from './layouts/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Voluntarios from './pages/Voluntarios';
import InformacionVoluntario from './pages/InformacionVoluntario';
import CrearVoluntario from './pages/crearVoluntario';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path='/Voluntarios' exact>
            <Layout>
              <Route path='/Voluntarios' exact>
                <Voluntarios />
              </Route>
            </Layout>
          </Route>

          <Route path={['/InformacionVoluntario/:ndoc', '/crearVoluntario']} exact>
            <Layout>
              <Switch>

                <Route path='/InformacionVoluntario/:ndoc' exact>
                  <InformacionVoluntario />
                </Route>

                <Route path='/crearVoluntario' exact>
                  <CrearVoluntario />
                </Route>


              </Switch>
            </Layout>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
