import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CounterHook from "./componentes/hooks/CounterHook";
import CounterComponent from "./componentes/component/CounterComponent";
import CounterHook2 from "./componentes/hooks/CounterHook2";
import CounterComponent2 from "./componentes/component/CounterComponent2";
import GreetingHook from "./componentes/hooks/GreetingHook";
import GreetingComponent from "./componentes/component/GreetingComponent";
import GreetingHook2 from "./componentes/hooks/GreetingHook2";
import GreetingComponent2 from "./componentes/component/GreetingComponent2";
import ProfileComponent from "./componentes/apicontext/ProfileComponent";
import ProfileContextApi from "./componentes/apicontext/ProfileContextApi";
import ProfileUseContext from "./componentes/apicontext/ProfileUseContext";
import ProfileComponentSetState from "./componentes/apicontext/ProfileComponentSetState";
import ProfileComponentUseContext from "./componentes/apicontext/ProfileComponentUseContext";
import ProfileContextHook from "./componentes/apicontext/ProfileContextHook";
import StorageHook from "./componentes/hooks/StorageHook";
import CacheStorageHook from "./componentes/hooks/CacheStorageHook";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          React.js
        </a>
        <div className="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Class Component
          </a>
          <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
            <li><Link to={"/counterComponente"} className="nav-link">
              Contador (state)
            </Link></li>
            <li><Link to={"/counterComponente2"} className="nav-link">
              Contador (ComponentDidMount)
            </Link></li>
            <li><Link to={"/greetingComponent"} className="nav-link">
              Saudação (ComponentDidMount)
            </Link></li>
            <li><Link to={"/cacheStorageHook"} className="nav-link">
              Saudação (LocalStorage)
            </Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hook
          </a>
          <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
            <li><Link to={"/counterHook"} className="nav-link">
              Counter (useState)
            </Link></li>
            <li><Link to={"/counterHook2"} className="nav-link">
              Contador (useEffect)
            </Link></li>
            <li><Link to={"/greetingHook"} className="nav-link">
              Saudação (useEffect)
            </Link></li>
            <li><Link to={"/greetingHook2"} className="nav-link">
              Saudação (LocalStorage)
            </Link></li>
            <li><Link to={"/storageHook"} className="nav-link">
              Storage (Custom Hook)
            </Link></li>
            <li><Link to={"/cacheStorageHook"} className="nav-link">
              Cache Storage (LocalStorage)
            </Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Context API
          </a>
          <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
            <li><Link to={"/profileComponent"} className="nav-link">
              Perfil (Component)
            </Link></li>
            <li><Link to={"/profileComponent"} className="nav-link">
              Perfil (Context API)
            </Link></li>
            <li><Link to={"/profileComponent"} className="nav-link">
              Perfil (useContext)
            </Link></li>
            <li><Link to={"/profileComponentSetState"} className="nav-link">
              Perfil (Component setState)
            </Link></li>
            <li><Link to={"/profileComponentUseContext"} className="nav-link">
              Perfil (useContext setState)
            </Link></li>
            <li><Link to={"/profileContextHook"} className="nav-link">
              Perfil (Hook useContext)
            </Link></li>
          </ul>
        </li>
        </div>
      </nav>

      <div className="container">
        <Switch>
          <Route exact path="/counterComponente" component={CounterComponent} />
          <Route exact path="/counterHook" component={CounterHook} />
          <Route exact path="/counterComponente2" component={CounterComponent2} />
          <Route exact path="/counterHook2" component={CounterHook2} />
          <Route exact path="/greetingComponent" component={GreetingComponent} />
          <Route exact path="/greetingHook" component={GreetingHook} />
          <Route exact path="/greetingComponent2" component={GreetingComponent2} />
          <Route exact path="/greetingHook2" component={GreetingHook2} />
          <Route exact path="/profileComponent" component={ProfileComponent} />
          <Route exact path="/profileContextApi" component={ProfileContextApi} />
          <Route exact path="/profileUseContext" component={ProfileUseContext} />
          <Route exact path="/profileComponentUseContext" component={ProfileComponentUseContext} />
          <Route exact path="/profileComponentSetState" component={ProfileComponentSetState} />
          <Route exact path="/profileContextHook" component={ProfileContextHook} />
          <Route exact path="/storageHook" component={StorageHook} />
          <Route exact path="/cacheStorageHook" component={CacheStorageHook} />
          
        </Switch>
      </div>
    </div>


  );
}

export default App;
