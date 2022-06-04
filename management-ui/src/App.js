import './App.css';
import Login from './components/Login/Login';
import Profile from './components/Profile';
import receptionHome from "./components/Reception/receptionHome";
import {  Router, Redirect, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';


function App() {

  const history = createBrowserHistory();

  return (
    <div className="App">
      <Router history={history}>
          <Switch>
            <Route exact path = "/" component={Login}></Route>
            <Route exact path = "/login" component={Login}></Route>
            <Route exact path = "/receptionHome" component={receptionHome}></Route>
            
          </Switch>
      </Router>
    </div>
  );
}

export default App;
