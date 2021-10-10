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
    marginLeft: "12px",
    padding: 0,
    textAlign: "left",
  },

  header: {
    fontSize: "16pt",
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

const PdfRight = ({ data }) => {
  const experiences = data.items.experience
    .sort((a, b) => new Date(b.start) - new Date(a.start))
    .filter((item) => item.category !== 2)
    .slice(0, 4);

  const formations = data.items.education
    .sort((a, b) => new Date(b.start) - new Date(a.start))
    .filter((item) => item.category === 5)
    .slice(0, 4);

  return (
    <View style={styles.pdfRight}>
      <View style={{ margin: 0, padding: 8 }}>
        <Text style={styles.name}>
          {data.firstName} {data.lastName}
        </Text>
        <Text style={styles.quote}>{data.quote}</Text>
        <Text style={styles.other}> {renderLocationText(data.location.resolved, true)}</Text>
        <Text style={styles.other}>{data.mail}</Text>
        <Link style={styles.link} src={data.urls.portfolio}>
          {data.urls.portfolio.split("://")[1]}
        </Link>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Experience</Text>
        <PdfTimelineList items={experiences} />
        <Text style={styles.header}>Formation</Text>
        <PdfTimelineList items={formations} />
      </View>
    </View>
  );
};

export default PdfRight;
