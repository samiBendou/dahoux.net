import React from 'react';
import Home from "./Home";
import Pdf from "./Pdf";
import {Route, Switch} from "react-router-dom";

const App = () => (
    <div className="app">
        <Main />
    </div>
);

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pdf" component={Pdf}/>
    </Switch>
);

export default App;