import React from 'react';
import MyDocument from "./pdf/MyDocument";
import {PDFViewer} from "@react-pdf/renderer";

const Pdf = () => (
    <div>
        <PDFViewer width="100%" height="100%">
            <MyDocument/>
        </PDFViewer>
    </div>
);

export default Pdf;