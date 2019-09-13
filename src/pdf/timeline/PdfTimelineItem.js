import React from 'react';
import {Text, View} from "@react-pdf/renderer";
import {renderDateString} from "../../common/date";

const PdfTimelineItem = (props) => (
    <View>
        <Text>{props.title}</Text>
        <Text>{renderDateString(new Date(props.date), props.duration)}</Text>
        <Text>{props.company.name}</Text>
        <Text>{props.text}</Text>
    </View>
);

export default  PdfTimelineItem;
