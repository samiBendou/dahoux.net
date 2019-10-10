import React from 'react';
import {View} from "@react-pdf/renderer";
import PdfTimelineItem from "./PdfTimelineItem";

const PdfTimelineList = ({items}) => {
    const sortedItems = items.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    return (
        <View>
            {sortedItems.map((item) => (
                <PdfTimelineItem
                    title={item.title}
                    text={item.text}
                    date={item.date}
                    duration={item.duration}
                    location={item.location}
                    key={item.title + "&" + item.date}
                    company={item.company}
                />
            ))}
        </View>);
};

export default PdfTimelineList;