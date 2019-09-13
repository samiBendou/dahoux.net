import React from "react";

import {StyleSheet, Text, View} from '@react-pdf/renderer';
import PdfSkillsList from "./skills/PdfSkillsList";

const styles = StyleSheet.create({
    pdfRight: {
        flexDirection: "col",
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

const PdfLeft = (props) => (
    <View style={styles.pdfLeft}>
        <View style={styles.section}>
            <Text>Skills</Text>
            <PdfSkillsList items={props.items}/>
        </View>
        <View style={styles.section}>
            <Text>Languages</Text>
            <PdfSkillsList items={props.items}/>
        </View>

        <View style={styles.section}>
            <Text>Hobbies</Text>
            <PdfSkillsList items={props.items}/>
        </View>

        <View style={styles.section}>
            <Text>Travels</Text>
            <PdfSkillsList items={props.items}/>
        </View>
    </View>);

export default PdfLeft;