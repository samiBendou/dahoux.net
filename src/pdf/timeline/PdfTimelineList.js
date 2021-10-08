import React from "react";
import { View } from "@react-pdf/renderer";
import PdfTimelineItem from "./PdfTimelineItem";

const PdfTimelineList = ({ items }) => {
  return (
    <View>
      {items.map((item) => (
        <PdfTimelineItem
          title={item.title}
          brief={item.brief}
          items={item.items}
          start={item.start}
          end={item.end}
          duration={item.duration}
          location={item.location}
          key={item.title + "&" + item.start}
          company={item.company}
          category={item.category}
        />
      ))}
    </View>
  );
};

export default PdfTimelineList;
