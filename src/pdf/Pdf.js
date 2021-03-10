import React from "react";

import {Document, Page, StyleSheet, View} from '@react-pdf/renderer';

import PdfLeft from "./PdfLeft";
import PdfRight from "./PdfRight";
// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#F0F2F2'
    },
    section: {
        margin: 0,
        padding: 0,
        textAlign: "left"
    }
});

// Create Document Component
const Pdf = (props) => (
    <Document style={styles.document}>
        <Page size="A4" style={styles.page}>
            <View style={{flexDirection: "row"}}>
                <PdfLeft items={props.data.items.skills}/>
                <PdfRight items={props.data.items.timeline} data={props.data}/>
            </View>
        </Page>
    </Document>);

export default Pdf;