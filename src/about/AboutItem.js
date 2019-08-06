import React from 'react';

const AboutItem = (props) => {
        return (
            <div>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        );
};

export default AboutItem;