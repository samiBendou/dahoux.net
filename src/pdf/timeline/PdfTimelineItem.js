import React from 'react';
import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {renderDate} from "../../common/core/date";
import {renderLocationText} from "../../common/core/location";

const styles = StyleSheet.create({
    title: {
        marginTop: 4,
        fontSize: "16pt",
        fontFamily: "Helvetica-Bold",
    },

    date: {
        marginTop: 4,
        fontSize: "10pt",
        fontFamily: "Helvetica-Bold"
    },

    company: {
        fontSize: "12pt",
        fontFamily: "Helvetica-Bold",
        marginBottom: 8
    },

    location: {
        fontSize: "12pt"
    },
    text: {
        fontSize: "11pt",
        width: "70%"
    }
});

const PdfTimelineItem = (props) => (
    <View style={{flexDirection: "col"}}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.date}>{renderDate(new Date(props.start), new Date(props.end))}</Text>
        <View style={{flexDirection: "row"}}>
            <Text style={styles.company}>{props.company.name || ""} </Text>
            <Text style={styles.location}>- {renderLocationText(props.location, false)}</Text>
        </View>
        <Text style={styles.text}>{props.brief}</Text>
        {
            props.items.map(item => (
                <Text style={styles.text}>- {item}</Text>
            ))}
    </View>
);

export default PdfTimelineItem;
