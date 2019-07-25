import React from 'react';
import AboutItem from './AboutItem';

const AboutList = ({items}) => {
    return items.map((item) =>
        <AboutItem
            title={item.title}
            text={item.text}
            key={item.title}
        />);
};

export default AboutList;