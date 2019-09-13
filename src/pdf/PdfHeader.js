import React from "react";

import {Image, StyleSheet, Text, View} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    pdfHeader: {
        flexDirection: "row",
    },

    nameText: {
      fontSize:"16pt"
    },

    section: {
        margin: 0,
        padding: 0,
        textAlign: "left"
    }
});

const PdfHeader = (props) => (
    <View style={styles.pdfHeader}>
        <View style={styles.section}>
            <Image src={props.data.urls.picture} style={{width: 150}}/>
        </View>
        <View style={{...styles.section, paddingLeft: 12, paddingTop: 12}}>
            <Text style={{fontSize:"32pt", marginBottom: 2}}>{props.data.firstName} {props.data.lastName}</Text>
            <Text style={{fontSize:"24pt", marginBottom: 8}}>{props.data.quote}</Text>
            <Text>{props.data.mail}</Text>
            <Text>{props.data.urls.portfolio.split("://")[1]}</Text>
        </View>
    </View>);

export default PdfHeader;