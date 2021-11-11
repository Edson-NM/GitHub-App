import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"

//COMPONENTS
import Header from './Components/Custom/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header/>
            {/* <Home/> */}
          </Route>
          <Route path="/" exact>

          </Route>
          <Route path="*">
            <h2>404 Not Found</h2>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
