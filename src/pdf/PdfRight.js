import React from "react";

import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import PdfTimelineList from "./timeline/PdfTimelineList";
import { renderLocationText } from "../common/core/location";

const styles = StyleSheet.create({
  pdfRight: {
    flexDirection: "col",
    backgroundColor: "#fff",
    width: "100%",
    paddingRight: "16px",
  },

  section: {
    margin: "12px",
    padding: 0,
    textAlign: "left",
  },

  header: {
    fontSize: "18pt",
    fontFamily: "Helvetica-Bold",
  },
  pdfHeader: {
    flexDirection: "row",
  },

  name: {
    fontSize: "24pt",
    marginBottom: 2,
    fontFamily: "Helvetica-Bold",
  },

  quote: {
    fontSize: "14pt",
    marginBottom: 4,
    color: "#656A73",
  },

  description: {
    marginTop: 8,
    fontFamily: "Helvetica-Oblique",
    fontSize: "12pt",
    textAlign: "center",
    width: "100%",
  },

  link: {
    fontSize: "14pt",
    color: "#0583F2",
  },

  other: {
    fontSize: "14pt",
  },
});

const PdfRight = (props) => {
  const categories = new Array(...new Set(props.items.map((item) => item.category)));
  const items = new Map(categories.map((category) => [category, []]));
  props.items.forEach((item) => items.get(item.category).push(item));
  const experiences = items
    .get(0)
    .sort((a, b) => new Date(b.start) - new Date(a.start))
    .slice(0, 5);
  console.log(experiences);
  return (
    <View style={styles.pdfRight}>
      <View style={{ margin: 0, padding: 8 }}>
        <Text style={styles.name}>
          {props.data.firstName} {props.data.lastName}
        </Text>
        <Text style={styles.quote}>{props.data.quote}</Text>
        <Text style={styles.other}> {renderLocationText(props.data.location, true)}</Text>
        <Text style={styles.other}>{props.data.mail}</Text>
        <Link style={styles.link} src={props.data.urls.portfolio}>
          {props.data.urls.portfolio.split("://")[1]}
        </Link>
      </View>

      <View style={styles.section}>
        <PdfTimelineList items={experiences} />
      </View>
    </View>
  );
};

export default PdfRight;
