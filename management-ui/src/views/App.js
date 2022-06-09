import '../App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Login from "./Login/Login";
import ReceptionHome from "./Reception/ReceptionHome";
import GCC from "./Reception/GCC"
import {ConnectedRouter} from "connected-react-router";
import {history} from "../router/router";
import OPD from "./Reception/OPD";
import TestDetails from "./Reception/TestDetails";

function App() {

    return (
        <div className="App">
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/receptionHome" component={ReceptionHome}></Route>
                    <Route exact path="/GCC" component={GCC}></Route>
                    <Route exact path="/OPD" component={OPD}></Route>
                    <Route exact path="/testDetails" component={TestDetails}></Route>
                    <Redirect exact to="/login" from="/"/>
                </Switch>
            </ConnectedRouter>
        </div>
    );
}

export default App;
