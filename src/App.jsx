
import './App.css';
import Layout from './layouts/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Voluntarios from './pages/voluntarios';
import InformacionVoluntario from './pages/InformacionVoluntario';
import CrearVoluntario from './pages/crearVoluntario';
import EditarVoluntario from './pages/editarVoluntario';
import Actividades from './pages/Actividades';
import CrearActividadVoluntariado from './pages/crearActividadVoluntariado';
import Inicio from './pages/inicio';
import CrearActividadFormacion from './pages/crearActividadFormacion';
import EditarActividadVoluntariado from './pages/editarActividadVoluntariado';
import EditarActividadFormacion from './pages/editarActividadFormacion';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path='/' exact>
              <Route path='/' exact>
                <Inicio/>
              </Route>
      
          </Route>

          <Route path={['/Voluntarios','/InformacionVoluntario/:ndoc', '/crearVoluntario', '/editarVoluntario', '/actividades', '/crearavoluntariado', '/crearaformativa','/editaravoluntariado/:id','/editaraformacion/:id']} exact>
            <Layout>
              <Switch>

              <Route path='/Voluntarios' exact>
                <Voluntarios />
              </Route>

                <Route path='/InformacionVoluntario/:ndoc' exact>
                  <InformacionVoluntario />
                </Route>

                <Route path='/crearVoluntario' exact>
                  <CrearVoluntario />
                </Route>

                <Route path='/editarVoluntario' exact>
                  <EditarVoluntario />
                </Route>

                <Route path='/actividades' exact>
                  <Actividades />
                </Route>
                
                <Route path='/crearavoluntariado' exact>
                  <CrearActividadVoluntariado/>
                </Route>

                <Route path='/crearaformativa' exact>
                  <CrearActividadFormacion/>
                </Route>

                <Route path='/editaravoluntariado/:id' component={EditarActividadVoluntariado} exact>
                  <EditarActividadVoluntariado/>
                </Route>
                
                <Route path='/editaraformacion/:id' component={EditarActividadFormacion} exact>
                  <EditarActividadFormacion/>
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
