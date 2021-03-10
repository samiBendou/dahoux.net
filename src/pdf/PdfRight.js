import React from "react";

import {StyleSheet, View} from '@react-pdf/renderer';
import PdfTimelineList from "./timeline/PdfTimelineList";

const styles = StyleSheet.create({
    pdfRight: {
        flexDirection: "col",
        backgroundColor: "#fff",
        width: "100%"
    },

    section: {
        margin: "8px",
        padding: 0,
        textAlign: "left"
    },

    header: {
        fontSize: "18pt",
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
                categories.filter(category => category === 0).map((category) => (
                    <View style={styles.section} key={category}>
                        <PdfTimelineList items={items.get(category)}/>
                    </View>
                ))
            }
        </View>
    );
};

export default PdfRight;