import '../App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Login from "./Login/Login";
import ReceptionHome from "./Reception/ReceptionHome";
import GCC from "./GCC/GCC"
import {ConnectedRouter} from "connected-react-router";
import {history} from "../router/router";
import OPD from "./OPD/OPD";
import TestDetails from "./TestDetails/TestDetails";
import AddAgency from "./AddAgency/AddAgency";
import CustomerDetails from "./CustomerDetails/CustomerDetails";
import CashierList from "./CashierList/CashierList";
import Cashier from "./Cashier/Cashier";
import XrayList from "./XrayList/XrayList";

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
                    <Route exact path="/addAgency" component={AddAgency}></Route>
                    <Route exact path="/customerDetails" component={CustomerDetails}></Route>
                    <Route exact path="/cashierList" component={CashierList}></Route>
                    <Route exact path="/cashier" component={Cashier}></Route>
                    <Route exact path="/xrayList" component={XrayList}></Route>
                    <Redirect exact to="/login" from="/"/>
                </Switch>
            </ConnectedRouter>
        </div>
    );
}

export default App;
