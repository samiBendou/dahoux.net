import React from 'react';
import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {renderDateString} from "../../common/date";

const styles = StyleSheet.create({
    title: {
        fontSize: "18pt",
        fontWeight: "lighter",
    },

    date: {
        fontSize: "14pt"
    },

    company: {
        fontSize: "14pt",
    },

    text: {
        fontSize: "12pt",
        width: "70%"
    }
});

const PdfTimelineItem = (props) => (
    <View style={{flexDirection:"col"}}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.date}>{renderDateString(new Date(props.date), props.duration)}</Text>
        <Text style={styles.company}>{props.company.name}</Text>
        <Text style={styles.text}>{props.text}</Text>
    </View>
);

export default  PdfTimelineItem;
