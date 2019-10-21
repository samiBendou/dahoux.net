import React from 'react';
import {View} from "@react-pdf/renderer";
import PdfTimelineItem from "./PdfTimelineItem";

const PdfTimelineList = ({items}) => {
    const sortedItems = items.slice().sort((a, b) => new Date(b.end) - new Date(a.end));
    return (
        <View>
            {sortedItems.map((item) => (
                <PdfTimelineItem
                    title={item.title}
                    text={item.text}
                    start={item.start}
                    end={item.end}
                    duration={item.duration}
                    location={item.location}
                    key={item.title + "&" + item.start}
                    company={item.company}
                />
            ))}
        </View>);
};

export default PdfTimelineList;