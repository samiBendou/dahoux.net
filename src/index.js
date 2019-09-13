import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./normalize.css";
import * as serviceWorker from "./serviceWorker";
import {PDFViewer} from "@react-pdf/renderer";
import defaultState from "./common/defaultState";
import Pdf from "./pdf/Pdf";

// ReactDOM.render(<App/>, document.getElementById("root"));


ReactDOM.render(
    <PDFViewer width="100%" height={750}>
        <Pdf data={defaultState}/>
    </PDFViewer>
    , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
