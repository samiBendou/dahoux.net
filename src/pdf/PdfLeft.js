import React from "react";

import {StyleSheet, Text, View} from '@react-pdf/renderer';
import PdfSkillsList from "./skills/PdfSkillsList";
import SkillsCategory from "../skills/SkillsCategory";

const styles = StyleSheet.create({
    pdfLeft: {
        flexDirection: "col",
    },

    section: {
        margin: 0,
        padding: 0,
        textAlign: "left"
    },

    header: {
        fontSize: "14pt",
        fontWeight: 700,
    }
});

const PdfLeft = (props) => {
    const categories = new Array(...(new Set(props.items.map(item => item.category))));
    const items = new Map(categories.map(category => [category, []]));
    props.items.forEach(item => items.get(item.category).push(item));
    return (
        <View style={styles.pdfLeft}>
            {
                categories.map((category) => (
                    <View style={styles.section}>
                        <Text>{SkillsCategory[category]}</Text>
                        <PdfSkillsList items={items.get(category)}/>
                    </View>
                ))
            }
        </View>);
};

export default PdfLeft;
