import React from "react";

import {StyleSheet, Text, View} from '@react-pdf/renderer';
import PdfTimelineList from "./timeline/PdfTimelineList";
import TimelineCategory from "../timeline/TimelineCategory";

const styles = StyleSheet.create({
    pdfRight: {
        flexDirection: "col",
        backgroundColor: "#fff",
        width: "100%"
    },

    section: {
        margin: "16px, 8px, 16px, 8px",
        padding: 0,
        textAlign: "left"
    },

    header: {
        fontSize: "20pt",
        fontFamily: "Helvetica-Bold"
    }
});

const PdfRight = (props) => {
    const categories = new Array(...(new Set(props.items.map(item => item.category))));
    const items = new Map(categories.map(category => [category, []]));
    props.items.forEach(item => items.get(item.category).push(item));
    // noinspection JSIncompatibleTypesComparison
    categories.sort((a) => a === 0 ? -1 : 0 );
    return (
        <View style={styles.pdfRight}>
            {
                categories.map((category) => (
                    <View style={styles.section} key={category}>
                        <Text style={styles.header}>{TimelineCategory[category]}</Text>
                        <PdfTimelineList items={items.get(category)}/>
                    </View>
                ))
            }
        </View>
    );
};

export default PdfRight;