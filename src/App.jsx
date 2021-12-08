
import './App.css';
import Layout from './layouts/Layout';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Voluntarios from './pages/voluntarios';
import InformacionVoluntario from './pages/InformacionVoluntario';
import CrearVoluntario from './pages/crearVoluntario';
import EditarVoluntario from './pages/editarVoluntario';
import ActividadesFormacion from './pages/ActividadesFormacion';
import ActividadesVoluntariado from './pages/ActividadesVoluntariado';
import CrearActividadVoluntariado from './pages/crearActividadVoluntariado';
import Inicio from './pages/inicio';
import CrearActividadFormacion from './pages/crearActividadFormacion';
import EditarActividadVoluntariado from './pages/editarActividadVoluntariado';
import EditarActividadFormacion from './pages/editarActividadFormacion';
import VerActividadFormacion from './pages/verActividadFormacion';
import VerActividadVoluntariado from './pages/verActividadVoluntariado';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Router>
        <Switch>

          <Route path='/' exact>
              <Route path='/' exact>
                <Inicio/>
              </Route>
      
          </Route>

          <Route path={['/Voluntarios','/InformacionVoluntario/:ndoc', '/crearVoluntario', '/editarVoluntario/:ndoc', '/actividadesvoluntariado','/actividadesformacion', '/crearavoluntariado', '/crearaformativa','/editaravoluntariado/:id','/editaraformacion/:id','/veravoluntariado/:id','/veraformacion/:id']} exact>
            <Layout>
              <Switch>

              <Route path='/Voluntarios' exact>
                <Voluntarios />
              </Route>

                <Route path='/InformacionVoluntario/:ndoc' component={InformacionVoluntario} exact>
                </Route>

                <Route path='/crearVoluntario' exact>
                  <CrearVoluntario />
                </Route>

                <Route path='/editarVoluntario/:ndoc' component={EditarVoluntario} exact>
                </Route>

                <Route path='/actividadesvoluntariado' exact>
                  <ActividadesVoluntariado />
                </Route>

                <Route path='/actividadesformacion' exact>
                  <ActividadesFormacion />
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

                <Route path='/veravoluntariado/:id' component={VerActividadVoluntariado} exact>
                  <VerActividadVoluntariado/>
                </Route>
                
                <Route path='/veraformacion/:id' component={VerActividadFormacion} exact>
                  <VerActividadFormacion/>
                </Route>
              </Switch>
            </Layout>
          </Route>


        </Switch>
      </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
