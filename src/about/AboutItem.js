import React from 'react';

const AboutItem = (props) => {
        return (
            <div>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        );
};

export default AboutItem;