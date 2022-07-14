
import './App.css';
import Layout from './layouts/Layout';
import LayoutInicio from './layouts/LayoutInicio';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import  TablaVoluntariosGeneral from './Components/Tables/VoluntariosGeneral';
import InformacionVoluntario from './pages/Voluntarios/InformacionVoluntario';
import CrearVoluntario from './pages/Voluntarios/crearVoluntario';
import EditarVoluntario from './pages/Voluntarios/editarVoluntario';
import ActividadesFormacion from './pages/ActividadesFormacion';
import ActividadesVoluntariado from './pages/ActividadesVoluntariado';
import CrearActividadVoluntariado from './pages/crearActividadVoluntariado';
import Inicio from './pages/inicio';
import CrearActividadFormacion from './pages/crearActividadFormacion';
import EditarActividadVoluntariado from './pages/editarActividadVoluntariado';
import EditarActividadFormacion from './pages/editarActividadFormacion';
import VerActividadFormacion from './pages/verActividadFormacion';
import VerActividadVoluntariado from './pages/verActividadVoluntariado';
import CrearGrupoAspirantes from './pages/Voluntarios/crearGrupo';
import Certificado from './pages/Cetificado';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Switch>

            <Route path='/' exact>
              <LayoutInicio>
                <Route path='/' exact>
                  <Inicio />
                </Route>
              </LayoutInicio>
            </Route>

            <Route path={['/Voluntarios', '/InformacionVoluntario/:ndoc', '/crearVoluntario', '/editarVoluntario/:ndoc', '/actividadesvoluntariado', '/actividadesformacion', '/crearavoluntariado', '/crearaformativa', '/editaravoluntariado/:id', '/editaraformacion/:id', '/veravoluntariado/:id', '/veraformacion/:id', '/creargrupo', '/certificado']} exact>
              <Layout>
                <Switch>

                  <Route path='/Voluntarios' exact>
                    <TablaVoluntariosGeneral />
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
                    <CrearActividadVoluntariado />
                  </Route>

                  <Route path='/crearaformativa' exact>
                    <CrearActividadFormacion />
                  </Route>

                  <Route path='/creargrupo' exact>
                    <CrearGrupoAspirantes/>
                  </Route>

                  <Route path='/editaravoluntariado/:id' component={EditarActividadVoluntariado} exact>
                    <EditarActividadVoluntariado />
                  </Route>

                  <Route path='/editaraformacion/:id' component={EditarActividadFormacion} exact>
                    <EditarActividadFormacion />
                  </Route>

                  <Route path='/veravoluntariado/:id' component={VerActividadVoluntariado} exact>
                    <VerActividadVoluntariado />
                  </Route>

                  <Route path='/veraformacion/:id' component={VerActividadFormacion} exact>
                    <VerActividadFormacion />
                  </Route>

                  <Route path='/certificado/' component={Certificado} exact>
                    <Certificado />
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
