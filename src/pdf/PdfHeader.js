import React from "react";

import {Link, StyleSheet, Text, View} from "@react-pdf/renderer";
import {renderLocationText} from "../common/core/location";

const styles = StyleSheet.create({
    pdfHeader: {
        flexDirection: "row",
    },

    name: {
        fontSize: "24pt",
        marginBottom: 2,
        fontFamily: "Helvetica-Bold"
    },

    quote: {
        fontSize: "14pt",
        marginBottom: 4,
        color: "#656A73"
    },

    description: {
        marginTop: 8,
        fontFamily: "Helvetica-Oblique",
        fontSize: "12pt",
        textAlign: "center"
    },

    link: {
        fontSize: "14pt",
        color: "#0583F2"
    },

    other: {
        fontSize: "14pt"
    },

    section: {
        margin: 0,
        padding: 0,
    }
});

const PdfHeader = (props) => (
    <View style={styles.pdfHeader}>
        <View style={{margin: 0, padding: 16}}>
            <Text style={styles.name}>{props.data.firstName} {props.data.lastName}</Text>
            <Text style={styles.quote}>{props.data.quote}</Text>
            <Text style={styles.other}> {renderLocationText(props.data.location, true)}</Text>
            <Text style={styles.other}>{props.data.mail}</Text>
            <Text style={styles.link}><Link
                src={props.data.urls.portfolio}>{props.data.urls.portfolio.split("://")[1]}</Link></Text>
            <Text style={styles.description}>“{props.data.brief}”</Text>
        </View>
    </View>);

export default PdfHeader;