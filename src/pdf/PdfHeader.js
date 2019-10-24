import React from "react";

import {Image, Link, StyleSheet, Text, View} from "@react-pdf/renderer";
import {renderLocationText} from "../common/core/location";

const styles = StyleSheet.create({
    pdfHeader: {
        flexDirection: "row",
    },

    name: {
        fontSize: "28pt",
        marginBottom: 2,
        fontFamily: "Helvetica-Bold"
    },

    quote: {
        fontSize: "24pt",
        marginBottom: 4,
        color: "#656A73"
    },

    description: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 12,
        fontFamily: "Helvetica-Oblique",
        fontSize: "14pt",
        width: "65%",
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
        <View style={styles.section}>
            <Image src={props.data.urls.thumbnail} style={{width: 150}}/>
        </View>
        <View style={{...styles.section, paddingLeft: 12, paddingTop: 12}}>
            <Text style={styles.name}>{props.data.firstName} {props.data.lastName}</Text>
            <Text style={styles.quote}>{props.data.quote}</Text>
            <Text style={styles.other}> {renderLocationText(props.data.location, true)}</Text>
            <Text style={styles.other}>{props.data.mail}</Text>
            <Text style={styles.link}><Link
                src={props.data.urls.portfolio}>{props.data.urls.portfolio.split("://")[1]}</Link></Text>
            <Text style={styles.description}>“{props.data.description}”</Text>
        </View>
    </View>);

export default PdfHeader;