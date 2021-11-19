import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"

//PAGES
import Home from "./Pages/Home/Home.jsx"
import MainLayout from "./Layouts/MainLayout.jsx"
// import NotFound from "./Pages/NotFound/NotFound.jsx"
import Followers from './Pages/Followers/Followers';
import Repositories from './Pages/Repositories/Repositories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <MainLayout>

            <Route path="/" exact>
              <Home/>
            </Route>

            <Route path="/followers/:user" exact>
              <Followers/>
            </Route>

            <Route path="/repositories/:user" exact>
              <Repositories/>
            </Route>

          </MainLayout>
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
