import React from 'react';
import {Text} from "@react-pdf/renderer";


const PdfSkillsItem = (props) => <Text style={{fontSize:"12pt"}}>{props.label}</Text>;

export default PdfSkillsItem;