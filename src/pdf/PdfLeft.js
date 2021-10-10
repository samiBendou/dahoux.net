import React from "react";

import { StyleSheet, Text, View } from "@react-pdf/renderer";
import PdfSkillsList from "./skills/PdfSkillsList";
import SkillsCategory from "../skills/SkillsCategory";

const styles = StyleSheet.create({
  pdfLeft: {
    flexDirection: "col",
    width: "35%",
  },

  section: {
    margin: "16px, 16px, 8px, 8px",
    padding: 0,
    textAlign: "left",
  },

  header: {
    fontSize: "12pt",
    fontFamily: "Helvetica-Bold",
  },
});

const PdfLeft = ({ skills }) => {
  const categories = new Array(...new Set(skills.map((item) => item.category)));
  const items = new Map(categories.map((category) => [category, []]));
  skills.forEach((item) => items.get(item.category).push(item));
  return (
    <View style={styles.pdfLeft}>
      {categories
        .filter((category) => category !== 3)
        .map((category) => (
          <View style={styles.section} key={category}>
            <Text style={styles.header}>{SkillsCategory[category]}</Text>
            <PdfSkillsList items={items.get(category)} />
          </View>
        ))}
    </View>
  );
};

export default PdfLeft;
