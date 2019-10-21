import React from 'react';
import {View} from "@react-pdf/renderer";
import PdfSkillsItem from "./PdfSkillsItem";

const PdfSkillsList = ({items}) => {
    return (
        <View>
                {items.sort((a, b) => b.level - a.level).map((item) =>
                    <PdfSkillsItem
                        label={item.label}
                        key={item.label}
                    />)}
        </View>);
};

export default PdfSkillsList;