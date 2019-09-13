import React from "react";

import {StyleSheet, Text, View} from '@react-pdf/renderer';
import PdfTimelineList from "./timeline/PdfTimelineList";
import TimelineCategory from "../timeline/TimelineCategory";

const styles = StyleSheet.create({
    pdfRight: {
        flexDirection: "col",
    },

    section: {
        margin: 0,
        padding: 0,
        textAlign: "left"
    },

    header: {
        fontSize: "20pt",
        fontWeight: 700,
    }
});

const PdfRight = (props) => {
    const categories = new Array(...(new Set(props.items.map(item => item.category))));
    const items = new Map(categories.map(category => [category, []]));
    props.items.forEach(item => items.get(item.category).push(item));
    return (
        <View style={styles.pdfRight}>
            {
                categories.map((category) => (
                    <View style={styles.section}>
                        <Text style={styles.header}>{TimelineCategory[category]}</Text>
                        <PdfTimelineList items={items.get(category)}/>
                    </View>
                ))
            }
        </View>
    );
};

export default PdfRight;