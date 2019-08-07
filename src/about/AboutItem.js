import React from 'react';

const AboutItem = (props) => {
        return (
            <div>
                <h5>{props.title}</h5>
                <p><em>{props.text}</em></p>
            </div>
        );
};

export default AboutItem;