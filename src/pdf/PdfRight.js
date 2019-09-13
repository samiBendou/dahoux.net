import React from "react";

import {StyleSheet, Text, View} from '@react-pdf/renderer';
import PdfTimelineList from "./timeline/PdfTimelineList";

const styles = StyleSheet.create({
    pdfRight: {
        flexDirection: "col",
    },

    nameText: {
        fontSize: "16pt"
    },

    section: {
        margin: 0,
        padding: 0,
        textAlign: "left"
    }
});

const PdfRight = (props) => (
    <View style={styles.pdfRight}>
        <View style={styles.section}>
            <Text>Education</Text>
            <PdfTimelineList items={props.items}/>
        </View>
        <View style={styles.section}>
            <Text>Work Experience</Text>
            <PdfTimelineList items={props.items}/>
        </View>

        <View style={styles.section}>
            <Text>Personal achievements</Text>
            <PdfTimelineList items={props.items}/>
        </View>

        <View style={styles.section}>
            <Text>Travels</Text>
            <PdfTimelineList items={props.items}/>
        </View>
    </View>);

export default PdfRight;