import React from "react";

import {Document, Page, StyleSheet, View} from '@react-pdf/renderer';
import PdfHeader from "./PdfHeader";
import PdfLeft from "./PdfLeft";
import PdfRight from "./PdfRight";
// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E4E4E4'
    },

    pdfHeader: {
        flexDirection: 'row',
    },
    section: {
        margin: 0,
        padding: 0,
        textAlign: "left"
    }
});

// Create Document Component
const Pdf = (props) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <PdfHeader data={props.data}/>
            <View style={{flexDirection: "row"}}>
                <PdfLeft items={props.data.items.skills}/>
                <PdfRight items={props.data.items.timeline}/>
            </View>
        </Page>
    </Document>);

export default Pdf;